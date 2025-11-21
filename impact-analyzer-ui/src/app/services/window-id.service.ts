import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WindowIdService {
  private readonly KEY = 'browser_window_id';
  private windowId!: string;

  constructor() {
    this.initializeId();
  }

  private initializeId() {
    if (typeof window === 'undefined') return;
    const saved = sessionStorage.getItem(this.KEY);

    if (saved) {
      this.windowId = saved;
    } else {
      this.windowId = this.generateId();
      sessionStorage.setItem(this.KEY, this.windowId);
    }
  }

  private generateId(): string {
    return 'win-' + Math.random().toString(36).substring(2) + Date.now();
  }

  getWindowId(): string {
    return this.windowId;
  }
}
