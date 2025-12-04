import { Component } from '@angular/core';
import {
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle
} from "@angular/material/expansion";
import {MatDivider} from "@angular/material/divider";

@Component({
  selector: 'app-micro-python',
    imports: [
        MatAccordion,
        MatExpansionPanel,
        MatExpansionPanelHeader,
        MatExpansionPanelTitle
    ],
  templateUrl: './micro-python.html',
  styleUrl: './micro-python.css',
})
export class MicroPython {

}
