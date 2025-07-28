import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter, fromEvent, mergeMap, of, timer } from 'rxjs';
import { HeaderComponent } from 'src/components/header/header.component';
import { FooterComponent } from 'src/components/footer/footer.component';
import { Config } from './app.config';

declare let goatcounter: any;

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
      .subscribe((event: NavigationEnd) => {
        setTimeout(() => {
          const gc = (window as any).goatcounter;
          if (gc?.count) {
            gc.count({
              path: event.urlAfterRedirects,
            });
            console.log('🐐 GoatCounter tracked:', event.urlAfterRedirects);
          } else {
            console.warn('🐐 GoatCounter not ready yet');
          }
        }, 250); // short delay to let script load
      });
  }
}
