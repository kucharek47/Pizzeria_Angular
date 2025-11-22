import {Component, signal} from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-mobile',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterModule, MatBadgeModule],
  templateUrl: './nav-mobile.html',
  styleUrl: './nav-mobile.css',
})
export class NavMobil {
  cartCount = signal(3);
}
