import { Component } from '@angular/core';
import {
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    MatExpansionModule
} from "@angular/material/expansion";
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-narzedzia',
    imports: [
        MatAccordion,
        MatExpansionPanel,
        MatExpansionPanelHeader,
        MatExpansionPanelTitle,
        MatExpansionModule,
        MatDividerModule
    ],
  templateUrl: './narzedzia.html',
  styleUrl: './narzedzia.css',
})
export class Narzedzia {

}
