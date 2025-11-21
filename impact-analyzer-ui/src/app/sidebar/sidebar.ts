import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { marked } from 'marked';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Sharedservice } from '../services/sharedservice';
import { GraphResponse } from '../models/graph-response';
import { Graph } from '../graph/graph';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { NgxGraphModule } from '@swimlane/ngx-graph';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.html',
  imports: [CommonModule, MatSidenavModule, MatButtonModule, MatIconModule, Graph, NgxGraphModule],
  styleUrls: ['./sidebar.css']
})

export class SidebarComponent implements OnInit {
  selectedTab: 'graph' | 'testplan' = 'graph';
  promptMessage: string = '';
  testPlan: string = '';
  graphData: GraphResponse[] = [];
  panelData: any = null;
  selectedGraph!: GraphResponse;
  testPlanHtml: string = '';

  constructor(private readonly sharedservice: Sharedservice) {}

  ngOnInit() {
    this.sharedservice.panelData$.subscribe(data => {
      if(data){
        this.testPlan = data.testPlan ;
        this.graphData = data.graphData;
        if (this.graphData && this.graphData.length > 0) {
          this.selectedGraph = this.graphData[0];
        }
        
        const parsed = marked.parse(this.testPlan || '');
        if (parsed instanceof Promise) {
          parsed.then((html: string) => {
            this.testPlanHtml = html;
          });
        } else {
          this.testPlanHtml = parsed as string;
        }
        console.log("Received panel data:", data);
        console.log("GRAPH:", this.graphData);
        console.log("GRAPH:", this.selectedGraph);
      }
    });
  }

@ViewChild('testPlanContent', { static: false }) testPlanContent!: ElementRef;
exportTestPDF() {
  const element = this.testPlanContent.nativeElement;
  
  const clone = element.cloneNode(true) as HTMLElement;
  clone.style.position = 'absolute';
  clone.style.left = '-9999px';
  clone.style.top = '0';
  clone.style.height = 'auto';
  clone.style.maxHeight = 'none';
  clone.style.overflow = 'visible';
  clone.style.width = element.scrollWidth + 'px';
  document.body.appendChild(clone);

  setTimeout(() => {
    html2canvas(clone, {
      useCORS: true,
      windowWidth: clone.scrollWidth,
      windowHeight: clone.scrollHeight,
      scale: 2
    }).then(canvas => {
      document.body.removeChild(clone);
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      let heightLeft = pdfHeight;
      let position = 0;
      pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, pdfHeight);
      heightLeft -= pdf.internal.pageSize.getHeight();
      while (heightLeft > 0) {
        position = heightLeft - pdfHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, pdfHeight);
        heightLeft -= pdf.internal.pageSize.getHeight();
      }
      pdf.save('testplan.pdf');
    });
  }, 100);
}
}
