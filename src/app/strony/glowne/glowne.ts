import {Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import { Orientacja } from '../../services/orientacja/orientacja';
@Component({
  selector: 'app-glowne',
  imports: [
    RouterLink
  ],
  templateUrl: './glowne.html',
  styleUrl: './glowne.css',
})
export class Glowne {
  orientacja = inject(Orientacja);
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
  top_obrazek:string = "0%"; //TODO img umiesc w div aby top dziala wzgledem div a nie img caly sie ruszal
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
    this.ustawienia_obrazkow = setInterval(async () => {
      for (let x of [0,2,3,4,2,-2,-1,5,20,40,60,100]) {
        this.top_obrazek = `${x}%`
        console.log(x)
        await sleep(100)
      }
      this.obrazek1 = `images/dodatki/${losowanie_lista(this.lista_obrazkow_dodatki)}`
      this.obrazek2 = `images/dodatki/${losowanie_lista(this.lista_obrazkow_dodatki)}`
      this.obrazek3 = `images/pizza_gotowe/${losowanie_lista(this.lista_obrazkow_pizza)}`
      this.top_obrazek = "0%"
    }, 3000);
  }
  ngOnDestroy(): void {
    if (this.ustawienia_obrazkow) {
      clearInterval(this.ustawienia_obrazkow);
    }
  }
}
