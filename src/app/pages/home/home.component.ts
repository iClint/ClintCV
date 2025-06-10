import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TickerComponent } from '../../../components/ticker/ticker.component';
import { HomePageConfig, HomeTickerConfig } from './home.config';

@Component({
  selector: 'app-home',
  imports: [CommonModule, TickerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  config = HomePageConfig;
  tickerConfig = HomeTickerConfig;
}
