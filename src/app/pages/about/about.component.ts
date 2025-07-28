import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TickerComponent } from 'src/components/ticker/ticker.component';

import {
  AboutContentModel as AboutContentModel,
  AboutTickerConfigModel,
} from 'src/app/models/about-config.model';
import { AboutPageContent, AboutTickerConfig } from './About.config';

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
