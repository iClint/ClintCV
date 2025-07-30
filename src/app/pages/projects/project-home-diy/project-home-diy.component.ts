import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LightBoxService } from 'src/app/services/light-box/light-box.service';
import { ProjectHomeDiyContentModel } from 'src/app/models/project-home-diy.model';
import { ProjectHomeDiyContent } from './project-home-diy.config';
import { ImageGallery } from 'src/app/models/light-box.model';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-project-home-diy',
  imports: [CommonModule],
  templateUrl: './project-home-diy.component.html',
  styleUrl: './project-home-diy.component.css',
})
export class ProjectHomeDiyComponent {
  projectHomeDiyContent: ProjectHomeDiyContentModel = ProjectHomeDiyContent;

  constructor(private lightBoxService: LightBoxService) {}

  openGallery(imageGallery: ImageGallery[], index: number): void {
    this.lightBoxService.openGallery(imageGallery, index);
  }
}
