import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LightBoxService } from 'src/app/services/light-box/light-box.service';
import { ProjectHomeDiyContentModel } from 'src/app/models/project-home-diy.model';
import { ProjectHomeDiyContent } from './project-home-diy.config';

@Component({
  selector: 'app-project-home-diy',
  imports: [CommonModule],
  templateUrl: './project-home-diy.component.html',
  styleUrl: './project-home-diy.component.css',
})
export class ProjectHomeDiyComponent {
  projectHomeDiyContent: ProjectHomeDiyContentModel = ProjectHomeDiyContent;

  constructor(private lightBoxService: LightBoxService) {}

  openImage(imageSrc: string, imageAlt: string, imageLabel: string): void {
    this.lightBoxService.open(imageSrc, imageAlt, imageLabel);
  }
}
