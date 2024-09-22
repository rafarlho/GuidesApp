import { Component, inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { BreadcrumbComponent } from './shared/features/breadcrumb/breadcrumb.component';
import { SideOptionsComponent } from './shared/features/side-options/side-options.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatIconModule,
    MatToolbarModule, 
    MatButtonModule,
    MatSidenavModule, 
    MatFormFieldModule, 
    MatSelectModule, 
    MatDividerModule,
    FontAwesomeModule,
    RouterOutlet,
    BreadcrumbComponent,
    SideOptionsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'GuidesApp';
  theme = 'light-theme' //localStorage.getItem('theme') || 'light-theme'
  faGitHub = faGithub
  faLinkedIn = faLinkedin
;


  constructor() {
    //Detects the browser theme 
    if(window.matchMedia("(prefers-color-scheme: dark)").matches) this.toggleTheme()
  }

  toggleTheme() {
    this.theme = this.theme === 'light-theme' ? 'dark-theme':'light-theme'
    //localStorage.setItem('theme', this.theme);
  }
}
