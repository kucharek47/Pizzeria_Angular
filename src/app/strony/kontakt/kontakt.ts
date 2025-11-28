import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-kontakt',
  imports: [
    MatIconModule,
    MatExpansionModule,
  ],
  templateUrl: './kontakt.html',
  styleUrl: './kontakt.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Kontakt {
  readonly panelOpenState = signal(false);
}
