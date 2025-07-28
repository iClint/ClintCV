import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter, fromEvent, mergeMap, of, timer } from 'rxjs';
import { HeaderComponent } from 'src/components/header/header.component';
import { FooterComponent } from 'src/components/footer/footer.component';
import { Config } from './app.config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  config = Config;

  constructor(private router: Router) {
    // Wait until Cloudflare beacon script is loaded
    const waitForCfBeacon = () => {
      return new Promise<void>((resolve) => {
        const check = () => {
          if ((window as any).cf_beacon?.ping) {
            resolve();
          } else {
            setTimeout(check, 100); // retry until available
          }
        };
        check();
      });
    };

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(async (event) => {
        console.log('Router navigation event detected:', event);

        await waitForCfBeacon();

        try {
          (window as any).cf_beacon.ping();
          console.log('✅ Cloudflare analytics beacon pinged');
        } catch (e) {
          console.warn('⚠️ Failed to ping Cloudflare beacon:', e);
        }
      });
  }
}
