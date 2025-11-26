import { Component, Input, OnChanges, ViewChild, NgZone, OnDestroy, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphResponse } from '../models/graph-response';
import { NgxGraphModule, GraphComponent, NgxGraphZoomOptions } from '@swimlane/ngx-graph';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { curveLinear } from 'd3-shape';

@Component({
  selector: 'app-graph',
  imports: [NgxGraphModule, CommonModule],
  standalone: true,
  templateUrl: './graph.html',
  styleUrls: ['./graph.css'],
})
export class Graph implements OnChanges, OnInit, AfterViewInit, OnDestroy {
  @Input() graph!: GraphResponse;
  @ViewChild('graphRef', { static: false }) graphComponent!: GraphComponent;

  private fitRequested$ = new Subject<void>();
  private fitSub?: Subscription;
  private stateSub?: Subscription;
  private isFitting: boolean = false;
  private _loadTimers: any[] = [];
  private bodyTooltipEl: HTMLDivElement | null = null;

  nodes: any[] = [];
  links: any[] = [];
  curve: any = curveLinear;
  layout: string = 'dagre';
  // Dagre layout settings tuned for a horizontal (left-to-right) layout
  dagreSettings: any = {
    rankdir: 'LR', // left-to-right
    ranksep: 100,
    nodesep: 80,
    align: 'UL',
    marginx: 20,
    marginy: 20,
  };
  tooltip = {
    visible: false,
    text: '',
    x: 0,
    y: 0,
  };

  private onWindowResize = () => {
    if (!this.isFitting) this.fitRequested$.next();
  };

  sanitizeId(id: string): string {
    return id.replaceAll(/[^a-zA-Z0-9_-]/g, '_');
  }

  /**
   * Robust manual fit implemented by measuring SVG child bboxes and applying
   * a transform on the root group to center and scale the graph to the container.
   */
  private manualFit() {
    const container = document.querySelector('.graph-container') as HTMLElement | null;
    if (!container) return;

    const svg = container.querySelector('svg');
    if (!svg) return;

    // collect bounding boxes for nodes and links
    const nodeElems = Array.from(svg.querySelectorAll('.graph-node')) as SVGGraphicsElement[];
    const pathElems = Array.from(svg.querySelectorAll('path')) as SVGGraphicsElement[];

    const allElems = nodeElems.concat(pathElems);
    if (allElems.length === 0) return;

    let minX = Number.POSITIVE_INFINITY;
    let minY = Number.POSITIVE_INFINITY;
    let maxX = Number.NEGATIVE_INFINITY;
    let maxY = Number.NEGATIVE_INFINITY;

    for (const el of allElems) {
      try {
        const bbox = el.getBBox();
        minX = Math.min(minX, bbox.x);
        minY = Math.min(minY, bbox.y);
        maxX = Math.max(maxX, bbox.x + bbox.width);
        maxY = Math.max(maxY, bbox.y + bbox.height);
      } catch (e) {
        // ignore invalid bbox on some SVG nodes
      }
    }

    if (!isFinite(minX) || !isFinite(minY) || !isFinite(maxX) || !isFinite(maxY)) return;

    const bboxWidth = Math.max(1, maxX - minX);
    const bboxHeight = Math.max(1, maxY - minY);

    const pad = 40; // padding around the graph
    const containerRect = container.getBoundingClientRect();
    const containerW = Math.max(1, containerRect.width - pad * 2);
    const containerH = Math.max(1, containerRect.height - pad * 2);

    const scale = Math.min(containerW / bboxWidth, containerH / bboxHeight);

    // center the bbox in the container
    const translateX = (containerRect.width / 2) - ((minX + bboxWidth / 2) * scale);
    const translateY = (containerRect.height / 2) - ((minY + bboxHeight / 2) * scale);

    // apply transform to the root <g> inside the svg (ngx-graph typically uses first g as root)
    const rootGroup = svg.querySelector('g');
    if (!rootGroup) return;

    // disable transitions while we set the transform
    container.classList.add('no-transitions');
    (rootGroup as SVGGElement).setAttribute('transform', `translate(${translateX.toFixed(2)}, ${translateY.toFixed(2)}) scale(${scale.toFixed(4)})`);

    // re-enable transitions shortly after paint
    requestAnimationFrame(() => requestAnimationFrame(() => {
      setTimeout(() => container.classList.remove('no-transitions'), 80);
    }));
  }

  fitGraph() {
    if (this.isFitting) return;
    this.fitRequested$.next();
  }

  setLayout(name: string) {
    this.layout = name || 'dagre';
    // request a re-layout and fit
    this.fitGraph();
  }

  private doFit() {
    if (!this.graphComponent) return;
    const opts: NgxGraphZoomOptions = { autoCenter: true, force: true } as any;
    try {
      const container = document.querySelector('.graph-container');
      if (container) container.classList.add('no-transitions');
      this.isFitting = true;

      (this.graphComponent as any).zoomToFit(opts);
      // As an extra robust fallback, perform a manual SVG bbox-based fit shortly after
      // This helps when the graph library's zoomToFit doesn't account for padding or
      // when DOM layout timing causes the viewport to be incorrect.
      setTimeout(() => {
        try {
          this.manualFit();
        } catch (e) {
          // non-fatal
        }
      }, 30);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTimeout(() => {
            if (container) container.classList.remove('no-transitions');
            this.isFitting = false;
          }, 50);
        });
      });
    } catch (err) {
      try {
        const container = document.querySelector('.graph-container');
        if (container) container.classList.add('no-transitions');
        this.isFitting = true;
        (this.graphComponent as any).zoomToFit(true, 100);
        setTimeout(() => {
          try {
            this.manualFit();
          } catch (e) {}
        }, 30);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setTimeout(() => {
              if (container) container.classList.remove('no-transitions');
              this.isFitting = false;
            }, 50);
          });
        });
      } catch (e) {
        console.warn('zoomToFit failed:', e);
        this.isFitting = false;
      }
    }
  }

  ngOnChanges() {
    if (!this.graph) return;

    console.log('Graph data received:', this.graph);

    this.nodes = this.graph.nodes.map((n) => ({
      id: n.id,
      label: n.label || n.id,
      data: {
        critical: n.critical ?? false,
        textWidth: this.calculateTextWidth(n.label || ''),
      },
    }));

    const nodeIds = new Set(this.nodes.map((n) => n.id));

    this.links = this.graph.links
      .filter((l) => nodeIds.has(l.source) && nodeIds.has(l.target))
      .map((l) => ({
        id: `${l.source}-${l.target}`,
        source: l.source,
        target: l.target,
        label: l.label || 'depends',
        data: {
          critical: l.critical,
          color: l.critical ? 'red' : '#6a5acd',
          width: l.critical ? 4 : 2,
        },
      }));

    // Request a fit when data changes
    this.fitGraph();
  }

  ngOnInit() {
    this.fitSub = this.fitRequested$.pipe(debounceTime(300)).subscribe(() => {
      this.ngZone.runOutsideAngular(() => this.doFit());
    });
    window.addEventListener('resize', this.onWindowResize);

    // create a tooltip element attached to document.body to avoid clipping by SVG/container
    try {
      this.bodyTooltipEl = document.createElement('div');
      this.bodyTooltipEl.className = 'svg-tooltip body-tooltip';
      // inline styles to ensure visibility and avoid CSS ordering issues
      Object.assign(this.bodyTooltipEl.style, {
        position: 'fixed',
        display: 'none',
        padding: '6px 10px',
        background: 'rgba(0,0,0,0.78)',
        color: 'white',
        fontSize: '13px',
        borderRadius: '4px',
        pointerEvents: 'none',
        zIndex: '2147483647',
        whiteSpace: 'nowrap',
        transform: 'translate(-50%, -120%)',
      } as any);
      document.body.appendChild(this.bodyTooltipEl);
    } catch (e) {
      this.bodyTooltipEl = null;
    }
  }

  ngAfterViewInit() {
    // initial fit
    this.fitGraph();

    // Schedule a couple of fallback fit attempts after load to ensure the graph
    // finishes layout and tiles into view (helps when layout runs async).
    this._loadTimers.push(setTimeout(() => this.fitGraph(), 120));
    this._loadTimers.push(setTimeout(() => this.fitGraph(), 600));

    try {
      if (this.graphComponent && (this.graphComponent as any).stateChange) {
        this.stateSub = (this.graphComponent as any).stateChange.subscribe((ev: any) => {
          if (ev && ev.state === 'Output') {
            this.ngZone.runOutsideAngular(() => this.doFit());
          }
        });
      }
    } catch (e) {
      console.debug('stateChange subscription failed', e);
    }
  }

  ngOnDestroy() {
    this.fitSub?.unsubscribe();
    this.fitRequested$.complete();
    this.stateSub?.unsubscribe();
    window.removeEventListener('resize', this.onWindowResize);
    // clear any pending load timers
    for (const t of this._loadTimers) {
      try { clearTimeout(t); } catch (e) {}
    }
    this._loadTimers = [];
    // remove body tooltip if present
    if (this.bodyTooltipEl && this.bodyTooltipEl.parentElement) {
      try { this.bodyTooltipEl.parentElement.removeChild(this.bodyTooltipEl); } catch (e) {}
    }
  }

  constructor(private ngZone: NgZone) {}

  onNodeClick(node: any) {
    console.log('Clicked:', node);
  }

  onLinkClick(link: any) {
    console.log('Clicked link:', link);
  }

  calculateTextWidth(label: string): number {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d')!;
    context.font = '14px Arial'; // match <text> style
    return context.measureText(label).width;
  }

  onNodeHover(node: any, event: MouseEvent) {
    // Update node/link hover states (below) and update tooltip display.
    // If a body-attached tooltip exists, use it and avoid updating the in-template tooltip
    this.ngZone.run(() => {
      if (!this.bodyTooltipEl) {
        this.tooltip.visible = true;
        this.tooltip.text = node.id;
        const container = document.querySelector('.graph-container') as HTMLElement | null;
        if (container) {
          const rect = container.getBoundingClientRect();
          this.tooltip.x = Math.round(event.clientX - rect.left + 12);
          this.tooltip.y = Math.round(event.clientY - rect.top + 12);
        } else {
          this.tooltip.x = event.clientX + 12;
          this.tooltip.y = event.clientY + 12;
        }
      } else {
        // ensure template tooltip is hidden when using body tooltip
        this.tooltip.visible = false;
      }
    });

    if (this.bodyTooltipEl) {
      this.bodyTooltipEl.textContent = node.id;
      this.bodyTooltipEl.style.left = `${Math.round(event.clientX)}px`;
      this.bodyTooltipEl.style.top = `${Math.round(event.clientY)}px`;
      this.bodyTooltipEl.style.display = 'block';
    }

    for (const n of this.nodes) {
      n.data = n.data || {};
      n.data.hover = false;
      n.data.neighbor = false;
    }

    for (const link of this.links) {
      link.data = link.data || {};
      link.data.hover = false;
    }

    node.data.hover = true;

    const neighbors = new Set<string>();
    for (const link of this.links) {
      if (link.source === node.id) {
        neighbors.add(link.target);
        link.data.hover = true;
      }
      if (link.target === node.id) {
        neighbors.add(link.source);
        link.data.hover = true;
      }
    }

    for (const n of this.nodes) {
      if (neighbors.has(n.id)) {
        n.data.neighbor = true;
      }
    }
  }

  onNodeLeave(node: any) {
    this.ngZone.run(() => {
      this.tooltip.visible = false;
    });
    if (this.bodyTooltipEl) this.bodyTooltipEl.style.display = 'none';
    for (const n of this.nodes) {
      if (n.data) {
        n.data.hover = false;
        n.data.neighbor = false;
      }
    }
    for (const l of this.links) {
      if (l.data) {
        l.data.hover = false;
      }
    }
  }

  onNodeHoverId(event: MouseEvent, node: any) {
    this.ngZone.run(() => {
      if (!this.bodyTooltipEl) {
        this.tooltip.visible = true;
        this.tooltip.text = node.id;
        const container = document.querySelector('.graph-container') as HTMLElement | null;
        if (container) {
          const rect = container.getBoundingClientRect();
          this.tooltip.x = Math.round(event.clientX - rect.left + 12);
          this.tooltip.y = Math.round(event.clientY - rect.top + 12);
        } else {
          this.tooltip.x = event.clientX + 12;
          this.tooltip.y = event.clientY + 12;
        }
      } else {
        this.tooltip.visible = false;
      }
    });
    if (this.bodyTooltipEl) {
      this.bodyTooltipEl.textContent = node.id;
      this.bodyTooltipEl.style.left = `${Math.round(event.clientX)}px`;
      this.bodyTooltipEl.style.top = `${Math.round(event.clientY)}px`;
      this.bodyTooltipEl.style.display = 'block';
    }
  }
}
