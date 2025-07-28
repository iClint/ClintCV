import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { HeaderComponent } from 'src/components/header/header.component';
import { Config } from './app.config';
import { FooterComponent } from 'src/components/footer/footer.component';
import { filter } from 'rxjs';

@Component({
  imports: [RouterModule, HeaderComponent, FooterComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  config = Config;
  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        if ('cf_beacon' in window) {
          // Force Cloudflare to re-send analytics beacon
          (window as any).cf_beacon &&
            (window as any).cf_beacon.ping &&
            (window as any).cf_beacon.ping();
          console.log('Cloudflare analytics beacon pinged');
        }
      });
  }
}
