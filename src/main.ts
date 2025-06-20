import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

const redirectPath = sessionStorage.getItem('redirectPath');
if (redirectPath) {
  sessionStorage.removeItem('redirectPath');
  history.replaceState(null, '', redirectPath);
}

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
