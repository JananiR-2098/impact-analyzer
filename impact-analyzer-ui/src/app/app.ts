import { Component, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputPromptComponent } from './input-prompt/input-prompt.component';
import { SidebarComponent } from './sidebar/sidebar';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { Sharedservice } from './services/sharedservice';
import { LoaderComponent } from './loader/loader';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    InputPromptComponent,
    SidebarComponent,
    MatSidenavModule,
    LoaderComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  chatBoxWidth: number = 300;
  minChatBoxWidth: number = 200;
  maxChatBoxWidth: number = 600;
  autoShrinkWidth: number = 250;

  isSidebarOpen = false;
  @ViewChild('rightSidenav') rightSidenav!: MatSidenav;

  constructor(private readonly shared: Sharedservice) {}

  protected readonly title = signal('impact-analyzer-ui');

  sidebarToggle(isOpen: boolean) {
    this.isSidebarOpen = isOpen;
  }

  openSidebar(data: any) {
    console.log('Sidebar open event:', data);
    this.isSidebarOpen = true;
  }

  //Resize chatbox
  onChatBoxMessageSent() {
    if (this.chatBoxWidth > this.autoShrinkWidth) {
      this.chatBoxWidth = this.autoShrinkWidth;
      console.log('Chatbox resized after message sent');
    }
  }
}