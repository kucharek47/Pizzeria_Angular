import { Component } from '@angular/core';
import {TuiButton, TuiDataList, TuiTextfield} from '@taiga-ui/core';
import {FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {debounceTime, distinctUntilChanged, map, Observable, startWith} from 'rxjs';
import {TuiSearch} from '@taiga-ui/layout';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-ukladanie-pizzy',
  imports: [
    TuiTextfield,
    FormsModule,
    TuiDataList,
    ReactiveFormsModule,
    TuiSearch,
    TuiButton,
    JsonPipe
  ],
  templateUrl: './ukladanie-pizzy.html',
  styleUrl: './ukladanie-pizzy.css',
})
export class UkladaniePizzy {
  slownik:{} = {
    "ananas":"/images/dodatki/ananas.png",
    "boczek":"/images/dodatki/boczek.png",
    "kukurydza":"/images/dodatki/kukurydza.png",
    "oliwka":"/images/dodatki/oliwka.png",
    "papryka":"/images/dodatki/papryka.png",
    "pieczarka":"/images/dodatki/pieczarka.png",
    "pomidor":"/images/dodatki/pomidor.png",
    "salami":"/images/dodatki/salami.png",
    "sera":"/images/dodatki/sera.png",
    "szynka":"/images/dodatki/szynka.png",
  }
  lewy_obrazek:string = "";
  srodkowy_obrazek:string = "";
  prawy_obrazek:string = "";
  private searchControl: any;

  ladowanie_obrazkow(){

  }

  dodaie_skladnika(){

  }
  protected readonly filters = new FormArray(
    Array.from({length: 1}, () => new FormControl()),
  );
  protected readonly form = new FormGroup({filters: this.filters});
  ngOnInit() {
    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(() => {
      this.ladowanie_obrazkow();
    });
  }

}
