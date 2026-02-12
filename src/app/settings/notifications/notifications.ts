import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notifications-settings',
  imports: [CommonModule],
  template: `
    <div class="notifications-settings">
      <h2>Notification Preferences</h2>
      <div class="notification-section">
        <div class="notification-item" *ngFor="let item of notifications">
          <div class="notification-info">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
          <div class="notification-channels">
            <label>
              <input type="checkbox" [checked]="item.email">
              <span>Email</span>
            </label>
            <label>
              <input type="checkbox" [checked]="item.push">
              <span>Push</span>
            </label>
            <label>
              <input type="checkbox" [checked]="item.sms">
              <span>SMS</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .notifications-settings h2 {
      color: #2c3e50;
      margin-bottom: 1.5rem;
    }

    .notification-section {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .notification-item {
      padding: 1.5rem;
      background: #f8f8f8;
      border-radius: 8px;
    }

    .notification-info h3 {
      margin: 0 0 0.5rem 0;
      color: #2c3e50;
      font-size: 1.1rem;
    }

    .notification-info p {
      margin: 0 0 1rem 0;
      color: #666;
      font-size: 0.9rem;
    }

    .notification-channels {
      display: flex;
      gap: 2rem;
    }

    .notification-channels label {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      cursor: pointer;
      color: #666;
    }

    .notification-channels input[type="checkbox"] {
      width: 18px;
      height: 18px;
      cursor: pointer;
    }

    .notification-channels input[type="checkbox"]:checked {
      accent-color: #667eea;
    }
  `]
})
export class Notifications {
  notifications = [
    {
      title: 'New Messages',
      description: 'Get notified when you receive a new message',
      email: true,
      push: true,
      sms: false
    },
    {
      title: 'Updates',
      description: 'Receive notifications about system updates',
      email: true,
      push: false,
      sms: false
    },
    {
      title: 'Promotions',
      description: 'Get notified about special offers and promotions',
      email: false,
      push: false,
      sms: false
    }
  ];
}
