import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Sidepanel {
  private _open = new BehaviorSubject<boolean>(false);
  open$ = this._open.asObservable();

  open() { this._open.next(true); }
  close() { this._open.next(false); }
  toggle() { this._open.next(!this._open.getValue()); }
}
