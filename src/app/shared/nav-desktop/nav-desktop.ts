import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatBadgeModule } from '@angular/material/badge';
import { MatRippleModule } from '@angular/material/core';

@Component({
  selector: 'app-nav-desktop',
  standalone: true,
  imports: [
    MatIconModule,
    MatToolbarModule,
    RouterLink,
    RouterLinkActive,
    MatBadgeModule,
    MatRippleModule
  ],
  templateUrl: './nav-desktop.html',
  styleUrl: './nav-desktop.css',
})
export class NavDesktop {
  cartCount = signal(0);
}
