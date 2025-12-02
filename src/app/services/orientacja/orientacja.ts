import { Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Orientacja {
  private readonly query = window.matchMedia('(orientation: landscape)');

  isLandscape = signal(this.query.matches);

  private readonly listener = (event: MediaQueryListEvent) => {
    this.isLandscape.set(event.matches);
    console.log('Zmiana orientacji:', event.matches ? 'Landscape' : 'Portrait');
  };
  constructor() {
    this.query.addEventListener('change', this.listener);
  }
}
