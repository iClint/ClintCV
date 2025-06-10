import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
  ],
};

export const Config = {
  header: {
    title: 'Clint Kingston',
    subtitle: 'Fullstack Software Engineer',
    description: 'Building innovative solutions with .Net, Angular and beyond,',
  },
  navMenu: {
    items: [
      { icon: 'home', label: 'Home', path: '/home' },
      { icon: 'person', label: 'About', path: '/about' },
      { icon: 'work', label: 'Projects', path: '/projects' },
      { icon: 'mail', label: 'Contact', path: '/contact' },
    ],
  },
};
