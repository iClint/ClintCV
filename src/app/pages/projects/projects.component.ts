import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ProjectsPageContent } from './projects.config';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, RouterModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  content = ProjectsPageContent;

  constructor(private router: Router) {}

  navigate(url: string) {
    this.router.navigate([url]);
  }
}
