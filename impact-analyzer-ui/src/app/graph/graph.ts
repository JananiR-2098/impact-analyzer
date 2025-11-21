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

 sanitizeId(id: string): string {
  return id.replaceAll(/[^a-zA-Z0-9_-]/g, "_");
 }

  ngOnChanges() { if (!this.graph) return;

  console.log("Graph data received:", this.graph);

  // 1. Build sanitized NODE list
    this.nodes = this.graph.nodes.map(n => ({
      id: n.id,
      label: n.label || n.id,
      data: {
        critical: n.critical ?? false,
        textWidth: this.calculateTextWidth(n.label || '' )
      }   
     }));
  console.log("Graph data received:", this.nodes);

  // Build a fast lookup set
  const nodeIds = new Set(this.nodes.map(n => n.id));
  

  // 2. Build sanitized LINK list + filter invalid links
   this.links = this.graph.links
      .filter(l => nodeIds.has(l.source) && nodeIds.has(l.target))
      .map(l => ({
        id: `${l.source}-${l.target}`,
        source: l.source,
        target: l.target,
        label: l.label || 'depends', 
        data: {
          critical: l.critical,
          color: l.critical ? "red" : "#6a5acd",
          width: l.critical ? 4 : 2
        }
      }));

    console.log("Final nodes:", this.nodes);
    console.log("Final links:", this.links);   
  }

   onNodeClick(node: any) {
    console.log("Clicked:", node);
  }

  onLinkClick(link: any) {
    console.log("Clicked link:", link);
  }

  calculateTextWidth(label: string): number {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d")!;
  context.font = "14px Arial";  // match <text> style
  return context.measureText(label).width;
}

onNodeHover(node: any) {
  node.data = node.data || {};
  node.data.hover = true;

  // highlight connected links
  this.links.forEach(link => {
    link.data = link.data || {};
    if (link.source === node.id || link.target === node.id) {
      link.data.hover = true;
    }
  });
}

onNodeLeave(node: any) {
  node.data.hover = false;

  // remove highlight from all links
  this.links.forEach(link => {
    if (link.data) link.data.hover = false;
  });
}
}