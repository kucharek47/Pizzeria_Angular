import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-glowne',
  imports: [
    RouterLink
  ],
  templateUrl: './glowne.html',
  styleUrl: './glowne.css',
})
export class Glowne {
  lista_obrazkow_dodatki:string[] = [
    'ananas.png',
    'boczek.png',
    'kukurydza.png',
    'oliwka.png',
    'papryka.png',
    'pieczarka.png',
    'pomidor.png',
    'salami.png',
    'ser.png'
  ];
  lista_obrazkow_pizza:string[] = [
    "4 sery.png",
    "capriciosa.png",
    "cos.png",
    "hawajska.png",
    "pepperoni.png",
    "ser cienka.png",
    "ser grube.png",
    "ser.png"
  ];
  obrazek1:string = "images/dodatki/ser.png"
  obrazek2:string = "images/dodatki/ser.png"
  obrazek3:string = "images/pizza_gotowe/ser.png"
  top_obrazek:number = 0;
  obrazek_zmiany :boolean=false
  ngOnInit(): void {
    this.startDiscoMode();
  }
  private ustawienia_obrazkow: any;
  startDiscoMode() {
    function losowanie_lista(lista:string[]):string {
      return lista[Math.floor(Math.random() * lista.length)]
    }
    function sleep(ms: number): Promise<void> {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    this.ustawienia_obrazkow = setInterval(() => {
      for (let x of [0,2,3,4,2,-2,-1,5,10,20,30]) {
        this.top_obrazek = x
        sleep(100)
      }
      this.obrazek1 = losowanie_lista(this.lista_obrazkow_dodatki)
      this.obrazek2 = losowanie_lista(this.lista_obrazkow_dodatki)
      this.obrazek3 = losowanie_lista(this.lista_obrazkow_pizza)
    }, 5000);
  }
  ngOnDestroy(): void {
    if (this.ustawienia_obrazkow) {
      clearInterval(this.ustawienia_obrazkow);
    }
  }
}
