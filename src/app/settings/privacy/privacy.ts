import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-privacy-settings',
  imports: [CommonModule],
  template: `
    <div class="privacy-settings">
      <h2>Privacy Settings</h2>
      <div class="toggle-section">
        <div class="toggle-item" *ngFor="let item of privacySettings">
          <div class="toggle-info">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
          <label class="toggle-switch">
            <input type="checkbox" [checked]="item.enabled">
            <span class="slider"></span>
          </label>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .privacy-settings h2 {
      color: #2c3e50;
      margin-bottom: 1.5rem;
    }

    .toggle-section {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .toggle-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1.5rem;
      background: #f8f8f8;
      border-radius: 8px;
    }

    .toggle-info h3 {
      margin: 0 0 0.5rem 0;
      color: #2c3e50;
      font-size: 1.1rem;
    }

    .toggle-info p {
      margin: 0;
      color: #666;
      font-size: 0.9rem;
    }

    .toggle-switch {
      position: relative;
      display: inline-block;
      width: 60px;
      height: 34px;
    }

    .toggle-switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      transition: 0.4s;
      border-radius: 34px;
    }

    .slider:before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      transition: 0.4s;
      border-radius: 50%;
    }

    input:checked + .slider {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }

    input:checked + .slider:before {
      transform: translateX(26px);
    }
  `]
})
export class Privacy {
  privacySettings = [
    {
      title: 'Profile Visibility',
      description: 'Make your profile visible to other users',
      enabled: true
    },
    {
      title: 'Activity Status',
      description: 'Show when you are online',
      enabled: false
    },
    {
      title: 'Data Collection',
      description: 'Allow anonymous data collection for improvement',
      enabled: true
    }
  ];
}
