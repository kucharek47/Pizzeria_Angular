import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TuiButton, TuiTextfield } from '@taiga-ui/core';
import { TuiTable } from '@taiga-ui/addon-table';
import { KoszykService } from '../../services/dodanie_do_koszyka/dodanie-do-koszyka';

export interface PozycjaKoszyka {
  id_pozycji: string;
  ciasto: number;
  rozmiar: number;
  skladniki: string[];
  sos: string;
  wartosc: number;
}

@Component({
  selector: 'app-koszyk',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    TuiTextfield,
    TuiButton,
    TuiTable
  ],
  templateUrl: './koszyk.html',
  styleUrl: './koszyk.scss',
})
export class Koszyk implements OnInit {
  private koszyk_serwis = inject(KoszykService);
  private router = inject(Router);

  formularz_dostawy = new FormGroup({
    imie: new FormControl(''),
    nazwisko: new FormControl(''),
    telefon: new FormControl(''),
    adres: new FormControl('')
  });

  lista_w_koszyku: PozycjaKoszyka[] = [];
  calkowita_wartosc: number = 0;

  ngOnInit(): void {
    this.ladowanie_koszyka();
  }

  ladowanie_koszyka(): void {
    this.koszyk_serwis.pobierz_zawartosc_koszyka().subscribe({
      next: (odpowiedz) => {
        if (!odpowiedz.error_cookies && odpowiedz.koszyk) {
          this.przetworz_dane_koszyka(odpowiedz.koszyk);
        }
      },
      error: (blad) => {
        console.error('Błąd pobierania koszyka', blad);
      }
    });
  }

  przetworz_dane_koszyka(surowe_dane: Record<string, any>): void {
    this.lista_w_koszyku = [];
    this.calkowita_wartosc = 0;

    for (const klucz of Object.keys(surowe_dane)) {
      const element = surowe_dane[klucz];
      this.lista_w_koszyku.push({
        id_pozycji: klucz,
        ciasto: element.ciasto,
        rozmiar: element.rozmiar,
        skladniki: element.skladnikiD || [],
        sos: element.sos || 'Brak',
        wartosc: element.wartosc
      });
      this.calkowita_wartosc += element.wartosc;
    }
  }

  usun_z_koszyka(id_pozycji: string): void {
    this.koszyk_serwis.usun_pozycje_z_koszyka(id_pozycji).subscribe({
      next: (odpowiedz) => {
        if (!odpowiedz.error_cookies) {
          this.lista_w_koszyku = this.lista_w_koszyku.filter(pozycja => pozycja.id_pozycji !== id_pozycji);
          this.przelicz_wartosc_koszyka();
        }
      },
      error: (blad) => {
        console.error('Błąd usuwania pozycji', blad);
      }
    });
  }

  przelicz_wartosc_koszyka(): void {
    this.calkowita_wartosc = 0;
    for (const pozycja of this.lista_w_koszyku) {
      this.calkowita_wartosc += pozycja.wartosc;
    }
  }

  zamow_i_zaplac(): void {
    const dane_klienta = this.formularz_dostawy.value;

    this.koszyk_serwis.zloz_zamowienie(dane_klienta).subscribe({
      next: (odpowiedz) => {
        if (!odpowiedz.error_cookies) {
          this.router.navigate(['/zamowione']);
        }
      },
      error: (blad) => {
        console.error('Błąd przy składaniu zamówienia', blad);
      }
    });
  }
}
