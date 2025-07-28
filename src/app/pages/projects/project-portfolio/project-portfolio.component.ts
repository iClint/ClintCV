import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TickerComponent } from 'src/components/ticker/ticker.component';

@Component({
  selector: 'app-project-portfolio',
  imports: [CommonModule, TickerComponent],
  templateUrl: './project-portfolio.component.html',
  styleUrl: './project-portfolio.component.css',
})
export class ProjectPortfolioComponent {
  tickerConfig = {
    items: [
      'Welcome to my portfolio!',
      'Check out my latest projects.',
      'I love building with Angular!',
    ],
  };
}
