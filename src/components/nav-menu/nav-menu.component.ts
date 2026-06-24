import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

export interface NavMenuItem {
  icon: string;
  label: string;
  path: string;
}

/** Where the nav is rendered: inline in the toolbar, or stacked in the sidenav. */
export type NavMenuLayout = 'horizontal' | 'vertical';

@Component({
  selector: 'app-nav-menu',
  imports: [RouterModule, MatButtonModule, MatListModule, MatIconModule],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.css',
})
export class NavMenuComponent {
  @Input({ required: true }) items!: NavMenuItem[];

  /** Horizontal = desktop toolbar buttons; vertical = mobile sidenav list. */
  @Input() layout: NavMenuLayout = 'horizontal';

  /** Emitted when a link is activated, so the host can close the sidenav. */
  @Output() readonly navigate = new EventEmitter<void>();
}
