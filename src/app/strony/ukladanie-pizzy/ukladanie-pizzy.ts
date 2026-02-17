import {Component, inject, OnInit} from '@angular/core';
import { TuiButton, TuiTextfield } from '@taiga-ui/core';
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { TuiSearch } from '@taiga-ui/layout';
import { TuiTable } from '@taiga-ui/addon-table';
import { TuiInputNumberModule } from '@taiga-ui/legacy';
import {MatDialog} from '@angular/material/dialog';
import { OpcjeMenu } from '../../shared/opcje-menu/opcje-menu';

export interface PozycjaSkladnika {
  nazwa: string;
  porcja: number;
  url: string;
  x_procent: number;
  y_procent: number;
  z_start: number;
  rotacja: number;
  z_indeks: number;
}

@Component({
  selector: 'app-ukladanie-pizzy',
  standalone: true,
  imports: [
    TuiTextfield,
    FormsModule,
    ReactiveFormsModule,
    TuiSearch,
    TuiButton,
    TuiTable,
    TuiInputNumberModule
  ],
  templateUrl: './ukladanie-pizzy.html',
  styleUrl: './ukladanie-pizzy.scss',
})
export class UkladaniePizzy implements OnInit {
  slownik: Record<string, string> = {
    "ananas": "/images/dodatki/ananas.png",
    "boczek": "/images/dodatki/boczek.png",
    "kukurydza": "/images/dodatki/kukurydza.png",
    "oliwka": "/images/dodatki/oliwka.png",
    "papryka": "/images/dodatki/papryka.png",
    "pieczarka": "/images/dodatki/pieczarka.png",
    "pomidor": "/images/dodatki/pomidor.png",
    "salami": "/images/dodatki/salami.png",
    "sera": "/images/dodatki/ser.png",
    "szynka": "/images/dodatki/szynka.png",
  }
  lewy_obrazek: string = "";
  srodkowy_obrazek: string = "";
  prawy_obrazek: string = "";
  aktualnie_wybrany: string = "";
  skladniki_dodane: Record<string, number> = {}

  obecna_lista: string[] = [];
  obecny_indeks: number = 0;

  wygenerowane_skladniki: PozycjaSkladnika[] = [];

  private dialog = inject(MatDialog);

  protected readonly filters = new FormArray([
    new FormControl('')
  ]);
  protected readonly form = new FormGroup({ filters: this.filters });

  ngOnInit() {
    this.przygotuj_liste();

    this.filters.controls[0].valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(() => {
      this.przygotuj_liste();
    });
  }

  tasowanie_listy(lista: string[]): string[] {
    let przetasowana = [...lista];
    for (let i = przetasowana.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [przetasowana[i], przetasowana[j]] = [przetasowana[j], przetasowana[i]];
    }
    return przetasowana;
  }

  przygotuj_liste() {
    let lista: string[] = [];
    const szukana_fraza = this.filters.at(0).value?.toLowerCase() || '';

    if (szukana_fraza) {
      for (let k of Object.keys(this.slownik)) {
        if (k.toLowerCase().includes(szukana_fraza)) {
          lista.push(k);
        }
      }
    } else {
      lista = Object.keys(this.slownik);
    }

    this.obecna_lista = this.tasowanie_listy(lista);
    this.obecny_indeks = 0;
    this.aktualizuj_widok();
  }

  aktualizuj_widok() {
    const dlugosc = this.obecna_lista.length;

    if (dlugosc === 0) {
      this.lewy_obrazek = "";
      this.srodkowy_obrazek = "";
      this.prawy_obrazek = "";
      this.aktualnie_wybrany = "";
      return;
    }

    if (dlugosc === 1) {
      this.srodkowy_obrazek = this.slownik[this.obecna_lista[0]];
      this.aktualnie_wybrany = this.obecna_lista[0];
      this.lewy_obrazek = "";
      this.prawy_obrazek = "";
      return;
    }

    const indeks_srodek = this.obecny_indeks;
    const indeks_lewo = (this.obecny_indeks - 1 + dlugosc) % dlugosc;
    const indeks_prawo = (this.obecny_indeks + 1) % dlugosc;

    this.srodkowy_obrazek = this.slownik[this.obecna_lista[indeks_srodek]];
    this.aktualnie_wybrany = this.obecna_lista[indeks_srodek];
    this.lewy_obrazek = this.slownik[this.obecna_lista[indeks_lewo]];
    this.prawy_obrazek = this.slownik[this.obecna_lista[indeks_prawo]];
  }

  przesun_lewo(): void {
    if (this.obecna_lista.length > 1) {
      this.obecny_indeks = (this.obecny_indeks - 1 + this.obecna_lista.length) % this.obecna_lista.length;
      this.aktualizuj_widok();
    }
  }

  przesun_prawo(): void {
    if (this.obecna_lista.length > 1) {
      this.obecny_indeks = (this.obecny_indeks + 1) % this.obecna_lista.length;
      this.aktualizuj_widok();
    }
  }

  zmiana_ilosci(skladnik: string, nowa_wartosc: number | null): void {
    const docelowa_wartosc = nowa_wartosc ?? 0;
    const stara_wartosc = this.skladniki_dodane[skladnik] || 0;

    if (docelowa_wartosc > stara_wartosc) {
      const roznica = docelowa_wartosc - stara_wartosc;
      for (let i = 0; i < roznica; i++) {
        const nowa_porcja = stara_wartosc + i + 1;
        this.skladniki_dodane[skladnik] = nowa_porcja;
        const ilosc_dodatkow = Math.floor(Math.random() * 6) + 5;
        for (let j = 0; j < ilosc_dodatkow; j++) {
          this.wygeneruj_pozycje(skladnik, nowa_porcja);
        }
      }
    } else if (docelowa_wartosc < stara_wartosc) {
      const roznica = stara_wartosc - docelowa_wartosc;
      for (let i = 0; i < roznica; i++) {
        const usuwana_porcja = stara_wartosc - i;
        this.wygenerowane_skladniki = this.wygenerowane_skladniki.filter(
          s => !(s.nazwa === skladnik && s.porcja === usuwana_porcja)
        );
      }
      this.skladniki_dodane[skladnik] = docelowa_wartosc;
      if (docelowa_wartosc === 0) {
        delete this.skladniki_dodane[skladnik];
      }
    }
  }

  dodaie_skladnika(skladnik: string): void {
    if (!skladnik) return;
    const aktualna_wartosc = this.skladniki_dodane[skladnik] || 0;
    this.zmiana_ilosci(skladnik, aktualna_wartosc + 1);
  }

  wygeneruj_pozycje(skladnik: string, porcja: number): void {
    const w = 40;
    const h = 29;
    const x_srodek = 50;
    const y_srodek = 43;

    const u = Math.random();
    const kat = Math.random() * 2 * Math.PI;
    const r = Math.sqrt(u);

    const x_docelowe = x_srodek + (r * Math.cos(kat) * w);
    const y_docelowe = y_srodek + (r * Math.sin(kat) * h);

    const z_start = Math.floor(Math.random() * 50);
    const rotacja = Math.floor(Math.random() * 360);
    const z_indeks = Math.floor(y_docelowe * 10);

    this.wygenerowane_skladniki.push({
      nazwa: skladnik,
      porcja: porcja,
      url: this.slownik[skladnik],
      x_procent: x_docelowe,
      y_procent: y_docelowe,
      z_start: z_start,
      rotacja: rotacja,
      z_indeks: z_indeks
    });
  }
  zamow_kompozycje(): void {
    const wybrane_skladniki: string[] = [];

    for (const klucz of Object.keys(this.skladniki_dodane)) {
      const ilosc = this.skladniki_dodane[klucz];
      for (let i = 0; i < ilosc; i++) {
        wybrane_skladniki.push(klucz);
      }
    }

    const wlasna_pizza = {
      id: 'Własna',
      nazwa: 'Własna kompozycja',
      skladniki: wybrane_skladniki,
      obrazek_path: 'images/pizza_gotowe/ser grube.png'
    };

    this.dialog.open(OpcjeMenu, {
      data: wlasna_pizza,
      width: '400px',
      enterAnimationDuration: '200ms',
      exitAnimationDuration: '150ms'
    });
  }

  protected readonly Object = Object;
}
