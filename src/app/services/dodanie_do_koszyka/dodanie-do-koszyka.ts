import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KoszykService {
  private http = inject(HttpClient);
  private apiUrl = '/api/dodaj_do_koszyka';

  wyslijZamowienie(dane: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, dane);
  }
}
