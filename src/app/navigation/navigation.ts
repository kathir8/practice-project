import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <nav class="navbar">
      <div class="nav-brand">
        <h2>My App</h2>
      </div>
      <ul class="nav-links">
        <li *ngFor="let link of navLinks">
          <a 
            [routerLink]="link.path" 
            routerLinkActive="active"
            [routerLinkActiveOptions]="{exact: link.exact}">
            {{ link.label }}
          </a>
        </li>
      </ul>
    </nav>
  `,
  styles: [`
    .navbar {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 0 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .nav-brand h2 {
      color: white;
      margin: 0;
      font-size: 1.5rem;
    }

    .nav-links {
      display: flex;
      list-style: none;
      gap: 0.5rem;
      margin: 0;
      padding: 0;
    }

    .nav-links li a {
      display: block;
      padding: 1rem 1.5rem;
      color: white;
      text-decoration: none;
      transition: all 0.3s ease;
      border-radius: 4px;
      font-weight: 500;
    }

    .nav-links li a:hover {
      background: rgba(255, 255, 255, 0.1);
    }

    .nav-links li a.active {
      background: rgba(255, 255, 255, 0.2);
      font-weight: 600;
    }

    @media (max-width: 768px) {
      .navbar {
        flex-direction: column;
        padding: 1rem;
      }

      .nav-links {
        flex-direction: column;
        width: 100%;
        gap: 0;
      }

      .nav-links li a {
        text-align: center;
      }
    }
  `]
})
export class Navigation {
  navLinks = [
    { path: '/home', label: 'Home', exact: false },
    { path: '/dashboard', label: 'Dashboard', exact: true },
    { path: '/profile', label: 'Profile', exact: true },
    { path: '/about', label: 'About', exact: true },
    { path: '/settings', label: 'Settings', exact: false }
  ];
}
