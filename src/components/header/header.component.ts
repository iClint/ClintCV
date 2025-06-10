import { Component, Input, input } from '@angular/core';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  imports: [NavMenuComponent, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) subtitle!: string;
  @Input({ required: true }) description!: string;
  @Input({ required: true }) navMenuItems!: {
    icon: string;
    label: string;
    path: string;
  }[];
}
