import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  AboutContentModel,
  AboutTickerConfigModel,
} from 'src/app/models/about-config.model';
import { TickerComponent } from 'src/app/shared/ticker/ticker.component';
import { AboutPageContent, AboutTickerConfig } from './about.config';

@Component({
  selector: 'app-about',
  imports: [CommonModule, TickerComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  content: AboutContentModel = AboutPageContent;
  tickerConfig: AboutTickerConfigModel = AboutTickerConfig;
}
