import { Component } from '@angular/core';
import { CommonModule, NgComponentOutlet } from '@angular/common';
import { LightBoxService } from 'src/app/services/light-box/light-box.service';
import { ImageGallery } from 'src/app/models/light-box.model';
import { ActivatedRoute } from '@angular/router';
import { ProjectContentModel } from 'src/app/models/project-config.model';
import { ContentType } from 'src/app/enums/light-box.enums';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, NgComponentOutlet],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent {
  config: ProjectContentModel | undefined;
  contentType = ContentType;
  constructor(
    private route: ActivatedRoute,
    private lightBoxService: LightBoxService,
  ) {
    this.route.data.subscribe(({ config }) => (this.config = config));
  }

  openGallery(imageGallery: ImageGallery[], index: number): void {
    this.lightBoxService.openGallery(imageGallery, index);
  }
}
