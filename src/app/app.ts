import { Component, signal, HostListener } from '@angular/core';
import {NavMobil} from './shared/nav-mobile/nav-mobile';
import {NavDesktop} from './shared/nav-desktop/nav-desktop';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavMobil, NavDesktop, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  isLandscape = signal(window.matchMedia('(orientation: landscape)').matches);

  @HostListener('window:resize')
  onResize() {
    this.isLandscape.set(window.matchMedia('(orientation: landscape)').matches);
  }
}
