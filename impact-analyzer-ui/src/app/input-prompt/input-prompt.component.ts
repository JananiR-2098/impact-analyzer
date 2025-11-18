import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chatservice } from '../services/chatservice';
import { Sharedservice } from '../services/sharedservice';

interface Msg { role: 'user' | 'assistant'; text: string }

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
    this.chatService.sendToBackend(v)
      .subscribe(response => {
        // Response mapping depends on backend shape
        this.messages.push({
          role: 'assistant',
          text: response.reply  
        });
      });
    this.sharedservice.openPanel(this.messages);
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
