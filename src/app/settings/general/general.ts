import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-general-settings',
  imports: [CommonModule],
  template: `
    <div class="general-settings">
      <h2>General Settings</h2>
      <form class="settings-form">
        <div class="form-group" *ngFor="let setting of generalSettings">
          <label>{{ setting.label }}</label>
          <input 
            [type]="setting.type" 
            [placeholder]="setting.placeholder"
            [value]="setting.value">
        </div>
        <button type="submit" class="btn-primary">Save Changes</button>
      </form>
    </div>
  `,
  styles: [`
    .general-settings h2 {
      color: #2c3e50;
      margin-bottom: 1.5rem;
    }

    .settings-form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .form-group label {
      font-weight: 600;
      color: #666;
    }

    .form-group input {
      padding: 0.75rem;
      border: 1px solid #ddd;
      border-radius: 6px;
      font-size: 1rem;
    }

    .form-group input:focus {
      outline: none;
      border-color: #667eea;
    }

    .btn-primary {
      padding: 0.75rem 2rem;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
      border-radius: 6px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      align-self: flex-start;
    }

    .btn-primary:hover {
      opacity: 0.9;
    }
  `]
})
export class General {
  generalSettings = [
    { label: 'Application Name', type: 'text', placeholder: 'My App', value: 'My App' },
    { label: 'Language', type: 'text', placeholder: 'English', value: 'English' },
    { label: 'Timezone', type: 'text', placeholder: 'UTC', value: 'UTC' }
  ];
}
