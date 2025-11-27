import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { GraphResponse } from '../models/graph-response';
import { Message } from '../models/msg';

@Injectable({ providedIn: 'root' })
export class Sharedservice {
  private readonly panelDataSource = new Subject<any>();
  panelData$ = this.panelDataSource.asObservable();

  private readonly panelOutputSource = new Subject<any>();
  panelOutput$ = this.panelOutputSource.asObservable();

  openPanelold(msg: Message[]) {
    this.panelDataSource.next(msg);
  }

  openPanel(data: {repoName: string,  graphData: GraphResponse[]; testPlan: string }) {
    console.log('Shared Service - Opening panel with data:', data);
    this.panelDataSource.next(data);
  }

  resetPanel() {
    this.panelDataSource.next({ repoName: '', graphData: [], testPlan: '' });
  }
}
