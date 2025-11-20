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

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.html',
  imports: [CommonModule, MatSidenavModule, MatButtonModule, MatIconModule, Graph],
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
        // Convert markdown to HTML (handle both sync and async)
        const parsed = marked.parse(this.testPlan || '');
        if (parsed instanceof Promise) {
          parsed.then((html: string) => {
            this.testPlanHtml = html;
          });
        }
        console.log("Received panel data:", data);
        console.log("GRAPH:", this.graphData);
        console.log("GRAPH:", this.selectedGraph);
      }
    });
  }

  async exportPDF() {
  const element = document.getElementById('exportSection');

  if (!element) {
    console.error("PDF element not found");
    return;
  }

  // wait for DOM to settle (important for graphs/markdown)
  await new Promise(res => setTimeout(res, 200));

  // --- FIX: Capture full scrollable content ---
  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
    scrollY: -window.scrollY,
    windowWidth: element.scrollWidth,
    windowHeight: element.scrollHeight,
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

  pdf.save('impact-analysis-document.pdf');
}
}
