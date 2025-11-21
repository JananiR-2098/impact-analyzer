import { Component, OnInit } from '@angular/core';
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

  async exportPDF() {
  const section = document.getElementById('exportSection');
  if (!section) return;

  // Save original styles
  const originalHeight = section.style.height;
  const originalOverflow = section.style.overflow;

  // EXPAND FULL CONTENT
  section.style.height = 'auto';
  section.style.overflow = 'visible';

  // Give Angular time to render expanded content
  setTimeout(() => {
    html2canvas(section, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      scrollX: 0,
      scrollY: -window.scrollY
    }).then(canvas => {
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgData = canvas.toDataURL('image/png');

      const imgWidth = 210;
      const pageHeight = 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        pdf.addPage();
        position = heightLeft - imgHeight;
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('analysis-panel.pdf');

      // RESTORE ORIGINAL STYLES
      section.style.height = originalHeight;
      section.style.overflow = originalOverflow;
    });
  }, 200);
  }
}
