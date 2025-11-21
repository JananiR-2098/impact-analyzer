import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Chatservice } from '../services/chatservice';
import { Sharedservice } from '../services/sharedservice';
import { GraphResponse } from '../models/graph-response';
import { Testplan } from '../models/testplan';

import { Message } from '../models/msg';

@Component({
  selector: 'app-input-prompt',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule],
  templateUrl: './input-prompt.component.html',
  styleUrls: ['./input-prompt.component.css'],
})

export class InputPromptComponent implements OnInit, AfterViewChecked {

  @Output() messageSent = new EventEmitter<void>();

  constructor(private chatService: Chatservice, private sharedservice: Sharedservice) {}

  @ViewChild('messagesContainer') private messagesContainer!: ElementRef<HTMLDivElement>;

  messages: Message[] = [];
  newMessage = '';
  private shouldScrollToBottom = false;

  ngOnInit(): void {
      this.messages = [
          { text: 'Hello! I am Mia, your AI assistant. How can I help you today?', sender: 'Mia', timestamp: new Date() }
      ];
      this.shouldScrollToBottom = true;
  }

  ngAfterViewChecked(): void {
    if (this.shouldScrollToBottom) {
      this.scrollToBottom();
      this.shouldScrollToBottom = false;
    }
  }

  sendMessage(): void {
    if (this.newMessage.trim()) {
      const v = this.newMessage.trim();
      if (!v) return;
      
      this.messages.push({ text: this.newMessage.trim(), sender: 'user', timestamp: new Date() });
      this.newMessage = '';
      this.shouldScrollToBottom = true;

      this.messageSent.emit();

      this.messages.push({ text: 'Analyzing your requirement and evaluating impacted files. The impacted files and test plan are currently being generated. Please wait…', sender: 'Mia', timestamp: new Date() });
      this.shouldScrollToBottom = true;
    
       this.chatService.getPromptResponse(v)
      .subscribe(response => {
        console.log ("Received response from backend:", response);
        const graphData = response.graphs; 
        const testPlan  = response.testPlan;
        this.sharedservice.openPanel({ 
          graphData: graphData as GraphResponse[],
          testPlan: testPlan.testPlan});
      });
    }    
  }

  private scrollToBottom(): void {
    try {
      this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
    } catch (err) {
      console.error('Error scrolling to bottom:', err);
    }
  }

  formatTimestamp(date: Date): string {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
}
