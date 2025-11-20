import { Component } from '@angular/core';
import {RouterLink, Router} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  constructor(private router: Router) {}
  logo_routerLink():string {
    return this.router.url === "/" ? "/kontakt" : "/"
  }
}
