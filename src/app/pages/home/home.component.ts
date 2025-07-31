import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TickerComponent } from '../../shared/ticker/ticker.component';
import { HomePageContent, HomeTickerConfig } from './home.config';
import {
  HomePageContentModel,
  HomeTickerConfigModel,
} from 'src/app/models/home-config.model';

@Component({
  selector: 'app-home',
  imports: [CommonModule, TickerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  content: HomePageContentModel = HomePageContent;
  tickerConfig: HomeTickerConfigModel = HomeTickerConfig;
}
