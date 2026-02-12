import { Component } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  imports: [],
  template: `
    <div class="account-settings">
      <h2>Account Settings</h2>
      <div class="info-section">
        <div class="info-item">
          <span class="label">Email:</span>
          <span class="value">user@example.com</span>
        </div>
        <div class="info-item">
          <span class="label">Username:</span>
          <span class="value">johndoe</span>
        </div>
        <div class="info-item">
          <span class="label">Member Since:</span>
          <span class="value">January 2024</span>
        </div>
      </div>
      <button class="btn-danger">Delete Account</button>
    </div>
  `,
  styles: [`
    .account-settings h2 {
      color: #2c3e50;
      margin-bottom: 1.5rem;
    }

    .info-section {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-bottom: 2rem;
    }

    .info-item {
      display: flex;
      justify-content: space-between;
      padding: 1rem;
      background: #f8f8f8;
      border-radius: 6px;
    }

    .info-item .label {
      font-weight: 600;
      color: #666;
    }

    .info-item .value {
      color: #2c3e50;
    }

    .btn-danger {
      padding: 0.75rem 2rem;
      background: #e74c3c;
      color: white;
      border: none;
      border-radius: 6px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
    }

    .btn-danger:hover {
      background: #c0392b;
    }
  `]
})
export class Account {
}
