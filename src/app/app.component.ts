import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { HeaderComponent } from 'src/components/header/header.component';
import { FooterComponent } from 'src/components/footer/footer.component';
import { Config } from './app.config';
import { filter } from 'rxjs';

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
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        console.log('Router navigation event detected:', event);

        // Delay to ensure Cloudflare script has loaded
        setTimeout(() => {
          const cf = (window as any).cf_beacon;

          if (cf?.ping) {
            cf.ping();
            console.log('Cloudflare analytics beacon pinged');
          } else {
            console.warn('Cloudflare beacon not ready on route change');
          }
        }, 250);
      });
  }
}
