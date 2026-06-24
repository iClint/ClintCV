import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NavMenuComponent, NavMenuItem } from '../nav-menu/nav-menu.component';
import { ScrollShadowDirective } from 'src/app/directives/scroll-shadow.directive';
import { ThemeService } from 'src/app/services/theme/theme.service';

@Component({
  selector: 'app-header',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    NavMenuComponent,
    ScrollShadowDirective,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) subtitle!: string;
  @Input({ required: true }) description!: string;
  @Input({ required: true }) navMenuItems!: NavMenuItem[];

  /** Emitted when the mobile menu button is pressed (host opens the sidenav). */
  @Output() readonly menuToggle = new EventEmitter<void>();

  protected readonly theme = inject(ThemeService);
}
