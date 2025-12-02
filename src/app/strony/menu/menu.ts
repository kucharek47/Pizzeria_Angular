import { Component } from '@angular/core';
import { MenuService, MenuItem } from '../../services/menu_api/menu-api';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-menu',
  imports: [MatTableModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  menu: MenuItem[] = [];
  loading = true;

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    // 👇 Wywołujemy serwis i pobieramy dane
    this.menuService.getMenu().subscribe({
      next: (items) => {
        this.menu = items;
        this.loading = false;
      },
      error: (err) => {
        console.error('Błąd pobierania menu:', err);
        this.loading = false;
      }
    });
  }
}
