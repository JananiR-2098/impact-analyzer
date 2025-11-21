import { Component,OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { Sidepanel } from '../services/sidepanel';
import { Sharedservice } from '../services/sharedservice';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

interface Msg { role: 'user' | 'assistant'; text: string }

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
  imports: [CommonModule, MatSidenavModule, MatButtonModule, MatIconModule],
  styleUrls: ['./sidebar.css']
})

export class SidebarComponent  {

  messages: Msg[] = [];

  panelData: any = null;

  constructor(public panel: Sidepanel, private sharedservice: Sharedservice) {

  }

  ngOnInit() {
    this.sharedservice.panelData$.subscribe(data => {
      if(data){
        this.messages = data;
      }
    });
  }

  @ViewChild('pdfContent', { static: false }) pdfContent!: ElementRef;

  downloadPDF() {
    const DATA = this.pdfContent.nativeElement;
    html2canvas(DATA).then(canvas => {
      const imgWidth = 208;
      const pageHeight = 295;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      const contentDataURL = canvas.toDataURL('image/png');
      let pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(contentDataURL, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('download.pdf');
    });
  }

}