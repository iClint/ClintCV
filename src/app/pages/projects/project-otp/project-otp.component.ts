import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectOtpConfig } from './project-otp.config';
import { ProjectOtpConfigModel } from 'src/app/models/project-otp.model';

@Component({
  selector: 'app-project-otp',
  imports: [CommonModule],
  templateUrl: './project-otp.component.html',
  styleUrl: './project-otp.component.css',
})
export class ProjectOtpComponent {
  config: ProjectOtpConfigModel = ProjectOtpConfig;
}
