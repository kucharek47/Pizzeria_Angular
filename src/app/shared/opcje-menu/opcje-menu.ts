import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';


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
    MatOptionModule
  ]
})
export class OpcjeMenu {

  options = ['Cienkie Włoskie', 'Tradycyjne', 'Grube'];
  selected: string | null = null;
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
