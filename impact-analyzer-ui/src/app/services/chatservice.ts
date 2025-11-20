import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PromptResponse } from '../models/prompt-response';

@Injectable({ providedIn: 'root' })
export class Chatservice {

  private API_URL = 'http://localhost:8080/api/chat/impactanalyser'; // your backend endpoint

  constructor(private http: HttpClient) {}

  sendToBackend(msg: string): Observable<any> {
    return this.http.post(this.API_URL, { text: msg });
  }

  getPromptResponse(msg: string): Observable<PromptResponse> {
    return this.http.post<PromptResponse>(this.API_URL, { text: msg });
  }
}
