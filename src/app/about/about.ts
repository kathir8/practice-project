import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  template: `
    <div class="about-container">
      <h1>About Us</h1>
      <p>This component is lazy loaded!</p>
      <p>It's only downloaded when the user navigates to /about.</p>
    </div>
  `,
  styles: [`
    .about-container {
      padding: 2rem;
      max-width: 800px;
      margin: 0 auto;
    }

    h1 {
      color: #2c3e50;
      margin-bottom: 1rem;
    }

    p {
      line-height: 1.6;
      color: #555;
    }
  `]
})
export class About {
}
