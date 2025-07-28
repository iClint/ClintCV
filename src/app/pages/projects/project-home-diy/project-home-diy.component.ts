import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectHomeDiyConfig } from './project-home-diy.config';
import { LightBoxService } from 'src/app/services/light-box/light-box.service';

@Component({
  selector: 'app-project-home-diy',
  imports: [CommonModule],
  templateUrl: './project-home-diy.component.html',
  styleUrl: './project-home-diy.component.css',
})
export class ProjectHomeDiyComponent {
  projectHomeDiyConfig = ProjectHomeDiyConfig;
  ContentType: any;

  constructor(private lightBoxService: LightBoxService) {}

  openImage(imageSrc: string, imageAlt: string, imageLabel: string): void {
    this.lightBoxService.open(imageSrc, imageAlt, imageLabel);
  }
}
