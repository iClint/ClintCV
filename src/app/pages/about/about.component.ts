import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TickerComponent } from 'src/components/ticker/ticker.component';
import { AnoutTickerConfig } from './About.config';

@Component({
  selector: 'app-about',
  imports: [CommonModule, TickerComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  tickerConfig = AnoutTickerConfig;
}
