import { Component, Input, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LightBoxService } from 'src/app/services/light-box/light-box.service';
import { LightBoxState } from 'src/app/models/light-box.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-light-box',
  imports: [CommonModule],
  templateUrl: './light-box.component.html',
  styleUrl: './light-box.component.css',
})
export class LightBoxComponent implements OnDestroy {
  state: LightBoxState = {
    isOpen: false,
    imageSrc: '',
    imageAlt: '',
    imageLabel: '',
  };

  private sub: Subscription;

  constructor(private lightBoxService: LightBoxService) {
    this.sub = this.lightBoxService.state.subscribe((state) => {
      this.state = state;
    });
  }

  close(): void {
    this.lightBoxService.close();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.lightBoxService.close();
  }
}
