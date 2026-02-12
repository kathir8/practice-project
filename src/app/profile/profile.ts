import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  template: `
    <div class="profile-container">
      <h1>User Profile</h1>
      <div class="profile-card">
        <div class="profile-header">
          <div class="avatar">{{ user.name.charAt(0) }}</div>
          <div class="user-info">
            <h2>{{ user.name }}</h2>
            <p>{{ user.email }}</p>
          </div>
        </div>
        <div class="profile-details">
          <div class="detail-item">
            <label>Role:</label>
            <span>{{ user.role }}</span>
          </div>
          <div class="detail-item">
            <label>Joined:</label>
            <span>{{ user.joinedDate }}</span>
          </div>
          <div class="detail-item">
            <label>Location:</label>
            <span>{{ user.location }}</span>
          </div>
        </div>
      </div>
      <p class="lazy-info">🚀 Profile component is lazy loaded!</p>
    </div>
  `,
  styles: [`
    .profile-container {
      padding: 2rem;
      max-width: 600px;
      margin: 0 auto;
    }

    h1 {
      color: #2c3e50;
      margin-bottom: 2rem;
    }

    .profile-card {
      background: white;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      padding: 2rem;
    }

    .profile-header {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      margin-bottom: 2rem;
      padding-bottom: 2rem;
      border-bottom: 1px solid #e0e0e0;
    }

    .avatar {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      font-weight: bold;
    }

    .user-info h2 {
      margin: 0 0 0.5rem 0;
      color: #2c3e50;
    }

    .user-info p {
      margin: 0;
      color: #666;
    }

    .profile-details {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .detail-item {
      display: flex;
      justify-content: space-between;
      padding: 0.5rem 0;
    }

    .detail-item label {
      font-weight: 600;
      color: #666;
    }

    .detail-item span {
      color: #2c3e50;
    }

    .lazy-info {
      text-align: center;
      color: #667eea;
      font-style: italic;
      margin-top: 2rem;
    }
  `]
})
export class Profile {
  user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Administrator',
    joinedDate: 'January 15, 2024',
    location: 'New York, USA'
  };
}
