import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PromptResponse } from '../models/prompt-response';
import { WindowIdService } from '../services/window-id.service';

@Injectable({ providedIn: 'root' })
export class Chatservice {
  private readonly API_URL = 'http://localhost:8080/api/chat/impactanalyser';
  constructor(private readonly http: HttpClient, private readonly windowIdService: WindowIdService) {}

  sendToBackend(msg: string): Observable<any> {
    return this.http.post(this.API_URL, { text: msg });
  }

  getPromptResponse(msg: string): Observable<PromptResponse> {
    const sessionID = this.windowIdService.getWindowId();
    return this.http.post<PromptResponse>(this.API_URL + '?sessionId=' + sessionID, { text: msg });
  }
}
