import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Message {
  text: string;
  sender: 'user' | 'Mia';
  timestamp: Date;
}

@Component({
  selector: 'app-chat-box',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css'],
})

export class ChatBoxComponent implements OnInit, AfterViewChecked {

  @ViewChild('messagesContainer') private messagesContainer!: ElementRef<HTMLDivElement>;

  messages: Message[] = [];
  newMessage = '';
  private shouldScrollToBottom = false;

  constructor() {}

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
      this.messages.push({ text: this.newMessage.trim(), sender: 'user', timestamp: new Date() });
      this.newMessage = '';
      this.shouldScrollToBottom = true;

      setTimeout(() => {
        this.messages.push({ text: 'Analyzing the impacts based on your input... Please wait.', sender: 'Mia', timestamp: new Date() });
        this.shouldScrollToBottom = true;
      }, 800);
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