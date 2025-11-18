import { Component,OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { Sharedservice } from '../services/sharedservice';
import { GraphResponse } from '../models/graph-response';
import { Graph } from '../graph/graph';

interface Msg { role: 'user' | 'assistant'; text: string }

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
  imports: [CommonModule, MatSidenavModule, MatButtonModule, Graph],
  styleUrls: ['./sidebar.css']
})

export class SidebarComponent  {
  promptMessage: string = '';
  testPlan: string = '';
  graphData: GraphResponse | null = null;
  panelData: any = null;

  constructor(private sharedservice: Sharedservice) {

  }

  ngOnInit() {
    this.sharedservice.panelData$.subscribe(data => {
      if(data){
        this.promptMessage = data.promptMessage ; 
        this.testPlan = data.testPlan ;
        this.graphData = data.graphData;
        console.log("Received panel data:", data);
        console.log("GRAPH:", this.graphData);
      }
    });
  }

}
