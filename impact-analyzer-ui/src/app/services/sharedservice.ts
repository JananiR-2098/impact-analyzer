import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
interface Msg { role: 'user' | 'assistant'; text: string }

@Injectable({ providedIn: 'root' })

export class Sharedservice {
  private panelDataSource = new Subject<any>();
  panelData$ = this.panelDataSource.asObservable();

  openPanel(msg : Msg[]) {
    this.panelDataSource.next(msg);
  }
}
