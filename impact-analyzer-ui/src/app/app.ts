import { Component, signal, ViewChild  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputPromptComponent } from './input-prompt/input-prompt.component';
import { HttpClient, HttpClientModule  } from '@angular/common/http';
import { SidebarComponent } from './sidebar/sidebar';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { Sharedservice } from './services/sharedservice';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InputPromptComponent, SidebarComponent , HttpClientModule , MatSidenavModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  chatBoxWidth : number = 300;
  minChatBoxWidth : number = 200;
  maxChatBoxWidth : number = 600;
  autoShrinkWidth : number = 250;
  

  isSidebarOpen = false;
  @ViewChild('rightSidenav') rightSidenav!: MatSidenav;

  constructor(
    private http: HttpClient,
    private shared: Sharedservice
  ) {}

  ngOnInit() {
    this.shared.panelData$.subscribe(msg => {
      this.isSidebarOpen = true;
      if (this.rightSidenav) {
        this.rightSidenav.open();
      }
    });
  }

  protected readonly title = signal('impact-analyzer-ui');
 
  sidebarToggle(isOpen: boolean) {
    this.isSidebarOpen = isOpen;
  }

   openSidebar(data: any) {
    console.log("Sidebar open event:", data);
    this.isSidebarOpen = true;
  }

  //Resize chatbox
  onChatBoxMessageSent() {
    if(this.chatBoxWidth > this.autoShrinkWidth) {
      this.chatBoxWidth = this.autoShrinkWidth;
      console.log('Chatbox resized after message sent');
    }
  }
}