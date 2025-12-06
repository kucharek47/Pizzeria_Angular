import {Component, inject} from '@angular/core';
import { MenuService, MenuItem } from '../../services/menu_api/menu-api';
import { MatTableModule } from '@angular/material/table';
import {Orientacja} from '../../services/orientacja/orientacja';
import { trigger, style, animate, transition } from '@angular/animations'
import { OpcjeMenu } from '../../shared/opcje-menu/opcje-menu'
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-menu',
  imports: [
    MatTableModule
  ],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
  animations: [
    trigger('fadeSlide', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-6px)' }),
        animate('260ms cubic-bezier(.2,.8,.2,1)',
          style({ opacity: 1, transform: 'translateY(0)' })
        )
      ]),
      transition(':leave', [
        animate('180ms ease-in',
          style({ opacity: 0, transform: 'translateY(6px)' })
        )
      ])
    ])
  ]
})
export class Menu {
  menu: MenuItem[] = [];
  loading:boolean = true;
  nazwa_czy_obrazek:boolean = true;
  private intervalId:any
  private dialog = inject(MatDialog);
  orientacja = inject(Orientacja);

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
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

    this.startLoop()
  }
  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
  startLoop() {
    this.intervalId = setInterval(() => {
      console.log(this.orientacja.isLandscape(),this.nazwa_czy_obrazek)
      if (!this.orientacja.isLandscape()) {
        this.nazwa_czy_obrazek = !this.nazwa_czy_obrazek;
      } else {
        this.nazwa_czy_obrazek = true;
      }
    }, 3000);
  }
  openAddDialog(item: any) {
    this.dialog.open(OpcjeMenu, {
      data: item,
      width: '400px',
      enterAnimationDuration: '200ms',
      exitAnimationDuration: '150ms'
    });
  }
  protected readonly console = console;
}
