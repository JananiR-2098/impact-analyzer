import { Component,OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Sharedservice } from '../services/sharedservice';
import { GraphResponse } from '../models/graph-response';
import { Graph } from '../graph/graph';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.html',
  imports: [CommonModule, MatSidenavModule, MatButtonModule, MatIconModule, Graph],
  styleUrls: ['./sidebar.css']
})

export class SidebarComponent  {
  promptMessage: string = '';
  testPlan: string = '';
  graphData: GraphResponse[] = [];
  panelData: any = null;

  constructor(private sharedservice: Sharedservice) {}

  ngOnInit() {
    this.sharedservice.panelData$.subscribe(data => {
      if(data){
        this.testPlan = data.testPlan ;
        this.graphData = data.graphData as GraphResponse[];
        console.log("Received panel data:", data);
        console.log("GRAPH:", this.graphData);
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

  async exportPDF() {
    const element = document.getElementById('exportSection');

    if (!element) {
      console.error("PDF element not found");
      return;
    }

    //document.body.setAttribute("@.disabled", "true");

    await new Promise(res => setTimeout(res, 200));

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false
    });

    const imgData = canvas.toDataURL('image/png');

    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgWidth = 210;

    const pageHeight = 295;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save('sidebar-export.pdf');
  }

}
