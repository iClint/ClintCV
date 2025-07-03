import { Route } from '@angular/router';
import { HeaderComponent } from 'src/components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectOtpComponent } from './pages/projects/project-otp/project-otp.component';
import { ProjectPortfolioComponent } from './pages/projects/project-portfolio/project-portfolio.component';

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/project-otp', component: ProjectOtpComponent },
  { path: 'projects/project-portfolio', component: ProjectPortfolioComponent },
  { path: 'contact', component: ContactComponent },
];
