import { Component, OnInit } from '@angular/core';
import { TuiButton, TuiTextfield } from '@taiga-ui/core';
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { TuiSearch } from '@taiga-ui/layout';
import {TuiTable} from '@taiga-ui/addon-table';
import {TuiInputNumberModule} from '@taiga-ui/legacy';

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

  protected readonly filters = new FormArray([
    new FormControl('')
  ]);
  protected readonly form = new FormGroup({ filters: this.filters });

  ngOnInit() {
    this.ladowanie_obrazkow();

    this.filters.controls[0].valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(() => {
      this.ladowanie_obrazkow();
    });
  }
  ladowanie_obrazkow() {
    let lista: string[] = [];
    const szukanaFraza = this.filters.at(0).value;

    if (szukanaFraza) {
      for (let x of Object.keys(this.slownik)) {
        if (x.includes(szukanaFraza)) {
          lista.push(x);
        }
      }
    } else {
      lista = Object.keys(this.slownik);
    }

    if (lista.length === 0) {
      this.lewy_obrazek = "";
      this.srodkowy_obrazek = "";
      this.prawy_obrazek = "";
      return;
    }

    const random_index: number = Math.floor(Math.random() * lista.length);
    this.lewy_obrazek = this.slownik[lista[random_index]];

    let random_index2: number = Math.floor(Math.random() * lista.length);
    if (random_index == random_index2 && lista.length > 1) {
      random_index2 = Math.floor(Math.random() * lista.length);
    }
    this.srodkowy_obrazek = this.slownik[lista[random_index2]];
    this.aktualnie_wybrany = lista[random_index2];

    let random_index3: number = Math.floor(Math.random() * lista.length);
    if ((random_index3 == random_index2 || random_index3 == random_index) && lista.length > 1) {
      random_index3 = Math.floor(Math.random() * lista.length);
    }
    this.prawy_obrazek = this.slownik[lista[random_index3]];
  }

  dodaie_skladnika(skladnik: string): void {
    if (this.skladniki_dodane[skladnik]) {
      this.skladniki_dodane[skladnik] += 1
    } else {
      this.skladniki_dodane[skladnik] = 1
    }
  }

  protected readonly Object = Object;
}
