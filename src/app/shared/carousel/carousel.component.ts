import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  images = [
    { id: 1, label: 'Spaghetti al sugo' },
    { id: 2, label: 'Tagliata di manzo' },
    { id: 3, label: 'Tiramisù' },
  ];

  percorsoFoto = '../assets/images/imageBg-';
}
