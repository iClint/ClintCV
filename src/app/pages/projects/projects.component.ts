import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProjectsPageContent } from './projects.config';
import { ProjectsPageContentModel } from 'src/app/models/projects-config.model';
import { RevealDirective } from 'src/app/directives/reveal.directive';

@Component({
  selector: 'app-projects',
  imports: [
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    RevealDirective,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  content: ProjectsPageContentModel = ProjectsPageContent;
}
