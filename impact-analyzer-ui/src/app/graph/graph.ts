import { Component, Input, OnChanges } from '@angular/core';
import { GraphResponse } from '../models/graph-response';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { curveLinear } from 'd3-shape';

@Component({
  selector: 'app-graph',
  imports: [NgxGraphModule],
  standalone: true,
  templateUrl: './graph.html',
  styleUrls: ['./graph.css'],
})
export class Graph implements OnChanges {
  @Input() graph!: GraphResponse;

  nodes: any[] = [];
  links: any[] = [];
  curve: any = curveLinear;
  tooltip = {
    visible: false,
    text: '',
    x: 0,
    y: 0,
  };

  sanitizeId(id: string): string {
    return id.replaceAll(/[^a-zA-Z0-9_-]/g, '_');
  }

  ngOnChanges() {
    if (!this.graph) return;

    console.log('Graph data received:', this.graph);

    // 1. Build sanitized NODE list
    this.nodes = this.graph.nodes.map((n) => ({
      id: n.id,
      label: n.label || n.id,
      data: {
        critical: n.critical ?? false,
        textWidth: this.calculateTextWidth(n.label || ''),
      },
    }));
    console.log('Graph data received:', this.nodes);

    // Build a fast lookup set
    const nodeIds = new Set(this.nodes.map((n) => n.id));

    // 2. Build sanitized LINK list + filter invalid links
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

    console.log('Final nodes:', this.nodes);
    console.log('Final links:', this.links);
  }

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
    // Tooltip
    this.tooltip.visible = true;
    this.tooltip.text = node.id;
    this.tooltip.x = event.clientX + 12;
    this.tooltip.y = event.clientY + 12;

    // Reset all nodes first
    for (const n of this.nodes) {
      n.data = n.data || {};
      n.data.hover = false;
      n.data.neighbor = false;
    };

    // Reset all links first
    for (const link of this.links) {
      link.data = link.data || {};
      link.data.hover = false;
    };

    // Highlight hovered node
    node.data.hover = true;

    // Find neighbors
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
    };

    // Highlight neighbor nodes
    for (const n of this.nodes) {
      if (neighbors.has(n.id)) {
        n.data.neighbor = true;
      }
    };
  }

  onNodeLeave(node: any) {
    // Hide tooltip
    this.tooltip.visible = false;

    // Reset all nodes
    for (const n of this.nodes) {
      if (n.data) {
        n.data.hover = false;
        n.data.neighbor = false;
      }
    };

    // Reset all links
    for (const l of this.links) {
      if (l.data) {
        l.data.hover = false;
      }
    };
  }

  onNodeHoverId(event: MouseEvent, node: any) {
    console.dir('Hovering over node:', node);
    this.tooltip.visible = true;
    this.tooltip.text = node.id;
    this.tooltip.x = event.clientX + 12; // small offset
    this.tooltip.y = event.clientY + 12;
  }
}
