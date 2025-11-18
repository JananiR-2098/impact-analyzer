import { Component, signal, ViewChild, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputPromptComponent } from './input-prompt/input-prompt.component';
import { HttpClient, HttpClientModule  } from '@angular/common/http';
import { SidebarComponent } from './sidebar/sidebar';
import { Sidepanel } from './services/sidepanel';
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
  isSidebarOpen = false;
  @ViewChild('rightSidenav') rightSidenav!: MatSidenav;

  constructor(
    private http: HttpClient,
    @Inject(Sidepanel) private panel: Sidepanel,
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

}