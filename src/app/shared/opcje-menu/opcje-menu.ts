import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import {TuiChevron, TuiChip, TuiDataListWrapper, TuiSelect} from '@taiga-ui/kit';
import {TuiAlertService, TuiTextfield} from '@taiga-ui/core';
import { KoszykService } from '../../services/dodanie_do_koszyka/dodanie-do-koszyka'


@Component({
  selector: 'OpcjeMenu',
  templateUrl: './opcje-menu.html',
  styleUrls: ['./opcje-menu.css'],
  imports: [
    FormsModule,
    MatDialogModule,
    MatRadioModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    TuiChip
  ]
})
export class OpcjeMenu {
  ciasta:string[] = ["Cienkie Włoskie","Tradycyjne","Grube"];
  ciasto:number = 1;
  rozmiary:number[] = [24,32,42,60];
  rozmiar:number = 1;
  lista_sosow:string[] = ["czosnkow","pomidorowy","lagodny"]
  wybrany_sos_index:number = 1;
  data = inject(MAT_DIALOG_DATA);
  dialogRef = inject(MatDialogRef);

  close() {
    this.dialogRef.close();
  }

  confirm() {
    this.dodaj_do_koszyka()
    this.dialogRef.close({
      confirmed: true,
      itemId: this.data.id,
    });
  }
  private koszykService = inject(KoszykService);

  // Zmienna, która przyjmie wszystko (odpowiedź z Flask)
  odpowiedz: any = null;

  dodaj_do_koszyka() {
    this.koszykService.wyslijZamowienie({"ciasto":this.ciasto,"rozmiar":this.rozmiar,"sos":this.wybrany_sos_index, "skladniki":this.data.skladniki}).subscribe({
      next: (data) => {
        this.showNotification(data["wartosc_koszyka"])
      },
      error: (err) => console.error('Błąd:', err)
    });
  }
  private readonly alerts = inject(TuiAlertService);

  protected showNotification(wartosc_koszyka:string): void {
    this.alerts
      .open('Wartosc korzyka: ' + wartosc_koszyka + ',00 zl', {label: 'Twoje zamownie trafilo do koszyka!'})
      .subscribe();
  }
}
