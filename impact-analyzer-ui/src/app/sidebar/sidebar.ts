import { Component,OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { Sharedservice } from '../services/sharedservice';

interface Msg { role: 'user' | 'assistant'; text: string }

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
  imports: [CommonModule, MatSidenavModule, MatButtonModule],
  styleUrls: ['./sidebar.css']
})

export class SidebarComponent  {

  messages: Msg[] = [];

  panelData: any = null;

  constructor(private sharedservice: Sharedservice) {

  }

  ngOnInit() {
    this.sharedservice.panelData$.subscribe(data => {
      if(data){
        this.messages = data;
      }
    });
  }

}
