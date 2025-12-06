import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import {TuiChevron, TuiChip, TuiDataListWrapper, TuiSelect} from '@taiga-ui/kit';
import {TuiTextfield} from '@taiga-ui/core';


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
    TuiChip,
    TuiDataListWrapper,
    TuiTextfield,
    TuiChevron,
    TuiSelect
  ]
})
export class OpcjeMenu {
  rozmiary:number[] = [24,32,42,60];
  rozmiar:number = 0;
  lista_sosow:string[] = ["czosnkow","pomidorowy","lagodny"]
  selectedValue:string = "";
  wybrany_sos_index:number = 0;
  data = inject(MAT_DIALOG_DATA);
  dialogRef = inject(MatDialogRef);

  close() {
    console.log("OpcjeMenu.close");
    this.dialogRef.close();
  }

  confirm() {
    console.log("OpcjeMenu.confirm");
    this.dialogRef.close({
      confirmed: true,
      itemId: this.data.id,
    });
  }
}
