import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chatservice } from '../services/chatservice';
import { Sharedservice } from '../services/sharedservice';
import { Msg } from '../models/msg';

@Component({
  selector: 'app-input-prompt',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-prompt.component.html',
  styleUrls: ['./input-prompt.component.css']
})
export class InputPromptComponent {
  constructor(private chatService: Chatservice, private sharedservice: Sharedservice) {}

  messages: Msg[] = [{ role: 'assistant', text: 'Hi — how can I help you today?' }];
  visible = true;
  @ViewChild('input') input!: ElementRef<HTMLTextAreaElement>;
  @ViewChild('messagesContainer') messagesContainer!: ElementRef<HTMLDivElement>;

  send() {
    const v = this.input?.nativeElement.value?.trim();
    if (!v) return;
    this.messages.push({ role: 'user', text: v });
    this.input.nativeElement.value = '';
    this.scrollBottom();

      // Call backend
    this.chatService.getPromptResponse(v)
      .subscribe(response => {
        console.log ("Received response from backend:", response);
        const graphData = response.graphData; 
        const promptMessage = response.promptMessage;
        const testPlan  = response.testPlan;
        this.sharedservice.openPanel({ 
          promptMessage: promptMessage,
          graphData: graphData,
          testPlan: testPlan});
      });
  }

  onKeydown(ev: KeyboardEvent) {
    if (ev.key === 'Enter' && !ev.shiftKey) {
      ev.preventDefault();
      this.send();
    }
  }

  
  close() { this.visible = false; }

  private scrollBottom() {
    setTimeout(() => {
      try { this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight; } catch (e) {}
    });
  }
}
