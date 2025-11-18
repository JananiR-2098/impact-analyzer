import { Component, Input, OnChanges } from '@angular/core';
import { GraphResponse } from '../models/graph-response';
import { NgxGraphModule } from '@swimlane/ngx-graph';

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

  ngOnChanges() {
    if (!this.graph) return;

    this.nodes = this.graph.nodes.map(n => ({
      id: n.id,
      label: n.label
    }));

    this.links = this.graph.links.map(l => ({
      id: `${l.source}-${l.target}`,
      source: l.source,
      target: l.target,
      label: l.label,
      data: { critical: l.critical }
    }));
  }

  onNodeClick(node: any) {
    console.log("Sidebar graph node clicked:", node);
  }

  onLinkClick(link: any) {
    console.log("Sidebar graph link clicked:", link);
  }
}