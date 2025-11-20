import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { GraphResponse } from '../models/graph-response';
interface Msg { role: 'user' | 'assistant'; text: string }

@Injectable({ providedIn: 'root' })

export class Sharedservice {
  private panelDataSource = new Subject<any>();
  panelData$ = this.panelDataSource.asObservable();

  private panelOutputSource = new Subject<any>();
  panelOutput$ = this.panelOutputSource.asObservable();

  openPanelold(msg : Msg[]) {
    this.panelDataSource.next(msg);
  }

  openPanel(data: { graphData: GraphResponse[] , testPlan: string}) {
    console.log("Shared Service - Opening panel with data:", data);
    this.panelDataSource.next(data);
  }
}
