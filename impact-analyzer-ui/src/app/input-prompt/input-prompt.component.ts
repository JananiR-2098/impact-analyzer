import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Msg { role: 'user' | 'assistant'; text: string }

@Component({
  selector: 'app-input-prompt',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-prompt.component.html',
  styleUrls: ['./input-prompt.component.css']
})
export class InputPromptComponent {
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

    // Simulated assistant reply (replace with backend call)
    setTimeout(() => {
      this.messages.push({ role: 'assistant', text: 'This is a sample assistant reply. Replace with your backend.' });
      this.scrollBottom();
    }, 700);
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
