import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectHomeDiyConfig } from './project-home-diy.config';

@Component({
  selector: 'app-project-home-diy',
  imports: [CommonModule],
  templateUrl: './project-home-diy.component.html',
  styleUrl: './project-home-diy.component.css',
})
export class ProjectHomeDiyComponent {
  projectHomeDiyConfig = ProjectHomeDiyConfig;
}
