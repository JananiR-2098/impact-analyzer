import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PromptResponse } from '../models/prompt-response';
import { WindowIdService } from '../services/window-id.service';

@Injectable({ providedIn: 'root' })
export class Chatservice {
  private API_URL = 'http://localhost:8081/promptAnalyzer/impactedModules'; // your backend endpoint


  constructor(private http: HttpClient, private windowIdService: WindowIdService) {}

  sendToBackend(msg: string): Observable<any> {
    return this.http.post(this.API_URL, { text: msg });
  }

  getPromptResponse(msg: string): Observable<PromptResponse> {
    const sessionID = this.windowIdService.getWindowId();
    return this.http.post<PromptResponse>(this.API_URL + '?sessionId=' + sessionID, { text: msg });
  }
}
