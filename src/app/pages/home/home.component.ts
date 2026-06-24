import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { TickerComponent } from '../../shared/ticker/ticker.component';
import { RevealDirective } from 'src/app/directives/reveal.directive';
import {
  HomeHeroConfig,
  HomeHeroConfigModel,
  HomePageContent,
  HomeTickerConfig,
} from './home.config';
import {
  HomePageContentModel,
  HomeTickerConfigModel,
} from 'src/app/models/home-config.model';

@Component({
  selector: 'app-home',
  imports: [
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatListModule,
    MatIconModule,
    TickerComponent,
    RevealDirective,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  hero: HomeHeroConfigModel = HomeHeroConfig;
  content: HomePageContentModel = HomePageContent;
  tickerConfig: HomeTickerConfigModel = HomeTickerConfig;
}
