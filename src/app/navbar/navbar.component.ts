import {
  Component,
  Output,
  EventEmitter,
  OnInit,
  Inject,
  PLATFORM_ID,
  Renderer2
} from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { HRDetails, HRService } from '../services/hr.service';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  @Output() toggleSidebar = new EventEmitter<void>();

  username: string = 'User';
  isDarkMode = false;
  hr!: HRDetails;
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router,
    private authService: AuthService,
    private renderer: Renderer2,
    private hrService: HRService
  ) {}

  ngOnInit(): void {
    this.initializeUser();
    this.initializeTheme();
    this.hrService.getDetails().subscribe(data => {
      this.hr = data;
      console.log(this.hr)
      const image = this.hr.image;
      const isValidImage = image && image !== 'http://localhost:8080/uploads/hr/';
      this.hr.image = `http://localhost:8080/uploads/hr/${image}`;
      console.log(this.hr.image)
    });
  }

  // USER LOGIC
  initializeUser() {
    const publicRoutes = ['/announcements/list', '/login', '/signup'];

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('token');
      const hash = window.location.hash;
      const currentRoute = hash.startsWith('#') ? hash.slice(1) : hash;

      if (!publicRoutes.includes(currentRoute)) {
        if (token) {
          this.authService.getLoggedInUser().subscribe({
            next: (user) => {
              this.username = user.firstName || user.username || 'User';
            },
            error: () => {
              this.router.navigate(['/login']);
            }
          });
        } else {
          this.router.navigate(['/login']);
        }
      }
    }
  }

  // THEME INIT
  initializeTheme() {
    if (isPlatformBrowser(this.platformId)) {
      const theme = localStorage.getItem('theme');
      this.isDarkMode = theme === 'dark';
      this.updateTheme();
    }
  }

  // TOGGLE THEME
  toggleTheme() {
    if (isPlatformBrowser(this.platformId)) {
      this.isDarkMode = !this.isDarkMode;
      localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
      this.updateTheme();
    }
  }

  // APPLY THEME CLASS TO BODY
  updateTheme() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.isDarkMode) {
        this.renderer.addClass(document.body, 'dark-mode');
      } else {
        this.renderer.removeClass(document.body, 'dark-mode');
      }
    }
  }

  // SIDEBAR TOGGLE
  onToggleSidebar() {
    this.toggleSidebar.emit();
  }

  // LOGOUT
  logout() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }
  }
}
