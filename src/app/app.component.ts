import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';
import { HeaderComponent } from 'src/components/header/header.component';
import { FooterComponent } from 'src/components/footer/footer.component';
import { Config } from './app.config';
import { LightBoxComponent } from 'src/app/shared/light-box/light-box.component';

declare let goatcounter: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent, LightBoxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  config = Config;
  goatcounterReady = false;

  constructor(private router: Router) {
    this.waitForGoatCounter().then(() => {
      // console.log('🐐 GoatCounter is ready');
      this.goatcounterReady = true;

      this.router.events
        .pipe(filter((event) => event instanceof NavigationEnd))
        .subscribe((event: NavigationEnd) => {
          const gc = (window as any).goatcounter;
          /* istanbul ignore next */
          if (gc?.count) {
            gc.count({ path: event.urlAfterRedirects });
            // console.log('🐐 GoatCounter tracked:', event.urlAfterRedirects);
          }
        });
    });
  }

  private waitForGoatCounter(): Promise<void> {
    return new Promise((resolve) => {
      const existing = (window as any).goatcounter;
      if (existing?.count) return resolve();

      const script = document.querySelector(
        'script[src*="goatcounter.com/count.js"]',
      );
      if (script) {
        script.addEventListener('load', () => resolve());
        script.addEventListener('error', () => {
          // console.warn('🐐 GoatCounter script failed to load');
          resolve(); // fail silently
        });
      } else {
        // fallback in case it's already loaded and not found in DOM
        const check = () => {
          if ((window as any).goatcounter?.count) {
            resolve();
          } else {
            setTimeout(check, 100);
          }
        };
        check();
      }
    });
  }
}
