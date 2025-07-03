import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectOtpConfig } from './project-otp.config';

@Component({
  selector: 'app-project-otp',
  imports: [CommonModule],
  templateUrl: './project-otp.component.html',
  styleUrl: './project-otp.component.css',
})
export class ProjectOtpComponent {
  config = ProjectOtpConfig;
}
