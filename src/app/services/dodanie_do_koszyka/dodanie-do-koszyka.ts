import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KoszykService {
  private http = inject(HttpClient);
  private apiUrl = '/api/dodaj_do_koszyka';

  // Przyjmujemy "cokolwiek" (any) i zwracamy strumień "czegokolwiek"
  wyslijZamowienie(dane: any): Observable<any> {
    // <any> mówi Angularowi: "Nie sprawdzaj, co wróci z serwera, ufam ci"
    return this.http.post<any>(this.apiUrl, dane);
  }
}
