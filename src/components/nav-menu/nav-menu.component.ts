import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-nav-menu',
  imports: [CommonModule, RouterModule, MatIconModule],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.css',
})
export class NavMenuComponent {
  @Input({ required: true }) items!: {
    icon: any;
    label: string;
    path: string;
  }[];

  private _isNavMenuVisible = false;

  get isNavMenuVisible() {
    return this._isNavMenuVisible;
  }

  onMenuClick() {
    this._isNavMenuVisible = !this._isNavMenuVisible;
  }
}
