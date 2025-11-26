import { Routes } from '@angular/router';

import { Glowne } from './strony/glowne/glowne';
import { Menu } from './strony/menu/menu';
import { Koszyk } from './strony/koszyk/koszyk';
import { UkladaniePizzy } from './strony/ukladanie-pizzy/ukladanie-pizzy';
import { Zamowienia } from './strony/zamowienia/zamowienia';
import { OLokalu } from './strony/o-lokalu/o-lokalu';
import { Kontakt } from './strony/kontakt/kontakt';
import { OMnie } from './strony/o-mnie/o-mnie';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Glowne },

  { path: 'menu', component: Menu },

  { path: 'koszyk', component: Koszyk },

  { path: 'skladanie_pizzy', component: UkladaniePizzy },

  { path: 'zamowione', component: Zamowienia },

  { path: 'lokal', component: OLokalu },

  { path: 'kontakt', component: Kontakt },

  { path: 'o-mnie', component: OMnie },
];
