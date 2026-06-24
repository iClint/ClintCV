import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import {
  AboutContentModel,
  AboutTickerConfigModel,
} from 'src/app/models/about-config.model';
import { TickerComponent } from 'src/app/shared/ticker/ticker.component';
import { RevealDirective } from 'src/app/directives/reveal.directive';
import { AboutPageContent, AboutTickerConfig } from './about.config';

@Component({
  selector: 'app-about',
  imports: [
    MatCardModule,
    MatListModule,
    MatIconModule,
    TickerComponent,
    RevealDirective,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  content: AboutContentModel = AboutPageContent;
  tickerConfig: AboutTickerConfigModel = AboutTickerConfig;
}
