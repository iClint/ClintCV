import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TickerComponent } from 'src/components/ticker/ticker.component';
import { AboutPageContent, AboutTickerConfig } from './About.config';
import { AboutConfigModel } from 'src/app/models/about-config.model';

@Component({
  selector: 'app-about',
  imports: [CommonModule, TickerComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  content: AboutConfigModel = AboutPageContent;
  tickerConfig = AboutTickerConfig;
}
