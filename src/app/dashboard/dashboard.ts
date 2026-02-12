import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  template: `
    <div class="dashboard-container">
      <h1>Dashboard</h1>
      <div class="cards">
        <div class="card" *ngFor="let item of dashboardItems">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
          <span class="value">{{ item.value }}</span>
        </div>
      </div>
      <p class="lazy-info">✨ This component is lazy loaded - loaded on demand!</p>
    </div>
  `,
  styles: [`
    .dashboard-container {
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    h1 {
      color: #2c3e50;
      margin-bottom: 2rem;
    }

    .cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
      margin-bottom: 2rem;
    }

    .card {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .card h3 {
      margin: 0 0 0.5rem 0;
      font-size: 1.2rem;
    }

    .card p {
      margin: 0 0 1rem 0;
      font-size: 0.9rem;
      opacity: 0.9;
    }

    .value {
      display: block;
      font-size: 2rem;
      font-weight: bold;
    }

    .lazy-info {
      text-align: center;
      color: #667eea;
      font-style: italic;
    }
  `]
})
export class Dashboard {
  dashboardItems = [
    { title: 'Total Users', description: 'Active users in the system', value: '1,234' },
    { title: 'Revenue', description: 'Monthly revenue', value: '$45,678' },
    { title: 'Orders', description: 'Orders this month', value: '567' },
    { title: 'Products', description: 'Total products', value: '89' }
  ];
}
