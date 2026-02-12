import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-settings',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  template: `
    <div class="settings-container">
      <h1>Settings</h1>
      
      <div class="settings-layout">
        <aside class="settings-sidebar">
          <nav>
            <a 
              *ngFor="let link of settingsLinks" 
              [routerLink]="link.path" 
              routerLinkActive="active">
              {{ link.label }}
            </a>
          </nav>
        </aside>
        
        <div class="settings-content">
          <router-outlet />
        </div>
      </div>
      
      <p class="lazy-info">⚡ Settings module with child routes - all lazy loaded!</p>
    </div>
  `,
  styles: [`
    .settings-container {
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    h1 {
      color: #2c3e50;
      margin-bottom: 2rem;
    }

    .settings-layout {
      display: grid;
      grid-template-columns: 250px 1fr;
      gap: 2rem;
      min-height: 400px;
    }

    .settings-sidebar {
      background: white;
      border-radius: 8px;
      padding: 1rem;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .settings-sidebar nav {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .settings-sidebar a {
      padding: 0.75rem 1rem;
      color: #666;
      text-decoration: none;
      border-radius: 6px;
      transition: all 0.3s ease;
    }

    .settings-sidebar a:hover {
      background: #f5f5f5;
      color: #667eea;
    }

    .settings-sidebar a.active {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      font-weight: 600;
    }

    .settings-content {
      background: white;
      border-radius: 8px;
      padding: 2rem;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .lazy-info {
      text-align: center;
      color: #667eea;
      font-style: italic;
      margin-top: 2rem;
    }

    @media (max-width: 768px) {
      .settings-layout {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class Settings {
  settingsLinks = [
    { path: 'general', label: 'General' },
    { path: 'account', label: 'Account' },
    { path: 'privacy', label: 'Privacy' },
    { path: 'notifications', label: 'Notifications' }
  ];
}
