import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KoszykService {
  private http = inject(HttpClient);

  wyslijZamowienie(dane: any): Observable<any> {
    return this.http.post<any>('/api/dodaj_do_koszyka', dane, { withCredentials: true });
  }

  pobierz_zawartosc_koszyka(): Observable<any> {
    return this.http.get<any>('/api/pobierz_koszyk', { withCredentials: true });
  }

  usun_pozycje_z_koszyka(id_pozycji: string): Observable<any> {
    return this.http.post<any>('/api/usun_z_koszyka', { id_pozycji: id_pozycji }, { withCredentials: true });
  }
}
