import { Route } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectHomeDiyContent } from './configs/project-home-diy.config';
import { ProjectComponent } from './shared/project/project.component';
import { ProjectOtpContent } from './configs/project-otp.config';
import { ProjectPortfolioContent } from './configs/project-portfolio.config';
import { ModelObjectBuilderComponent } from './pages/model-object-builder/model-object-builder.component';
import { ProjectOtpCustomToolContent } from './configs/project-otp-custom-tool.config';

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  {
    path: 'projects/project-otp',
    component: ProjectComponent,
    data: { config: ProjectOtpContent },
  },
  {
    path: 'projects/project-otp-custom-tool',
    component: ProjectComponent,
    data: { config: ProjectOtpCustomToolContent },
  },
  {
    path: 'projects/project-portfolio',
    component: ProjectComponent,
    data: { config: ProjectPortfolioContent },
  },
  {
    path: 'projects/project-home-diy',
    component: ProjectComponent,
    data: { config: ProjectHomeDiyContent },
  },
  { path: 'contact', component: ContactComponent },
  { path: 'model-object-builder', component: ModelObjectBuilderComponent },
];
