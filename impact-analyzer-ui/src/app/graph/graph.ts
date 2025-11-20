import { Component, Input, OnChanges } from '@angular/core';
import { GraphResponse } from '../models/graph-response';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { curveLinear } from 'd3-shape';

@Component({
  selector: 'app-graph',
  imports: [NgxGraphModule],
  standalone: true,        
  templateUrl: './graph.html',
  styleUrl: './graph.css',
})

export class Graph implements OnChanges {
  @Input() graph!: GraphResponse;
  nodes: any[] = [];
  links: any[] = [];
  curve: any = curveLinear;

 sanitizeId(id: string): string {
  return id.replace(/[^a-zA-Z0-9_-]/g, "_");
 }

  ngOnChanges() {
    if (!this.graph) return;

    this.nodes = this.graph.nodes.map(n => ({   
      id: this.sanitizeId(n.id),
      label: n.label || n.id
    }));

    this.links = this.graph.links.map(l => ({
      id: `${this.sanitizeId(l.source)}-${this.sanitizeId(l.target)}`,
      source: this.sanitizeId(l.source),
      target: this.sanitizeId(l.target),
      label: l.label,
      data: { critical: l.critical,
        color: l.critical ? 'red' : '#6a5acd',
        width: l.critical ? 4 : 2
      }
    }));
  }

  onNodeClick(node: any) {
    console.log("Sidebar graph node clicked:", node);
  }

  onLinkClick(link: any) {
    console.log("Sidebar graph link clicked:", link);
  }
}