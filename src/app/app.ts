import { TuiRoot } from "@taiga-ui/core";
import { Component, signal, HostListener, OnInit, inject } from '@angular/core';
import { NavMobil } from './shared/nav-mobile/nav-mobile';
import { NavDesktop } from './shared/nav-desktop/nav-desktop';
import { RouterOutlet } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavMobil, NavDesktop, RouterOutlet, TuiRoot, TuiRoot],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  // Wstrzykiwanie
  private http = inject(HttpClient);
  private cookieService = inject(CookieService);

  // Konfiguracja
  private readonly COOKIE_NAME = 'session_token';
  private readonly API_URL_START = 'http://192.168.10.149:5000/api/start';
  private readonly API_URL_CHECK = 'http://192.168.10.149:5000/api/check_cookiess';

  // Sygnał układu (Desktop/Mobile)
  isLandscape = signal(window.matchMedia('(orientation: landscape)').matches);

  @HostListener('window:resize')
  onResize() {
    this.isLandscape.set(window.matchMedia('(orientation: landscape)').matches);
  }

  ngOnInit() {
    this.zarzadzajSesja();
  }

  private zarzadzajSesja() {
    const lokalneCiastko = this.cookieService.get(this.COOKIE_NAME);

    if (!lokalneCiastko) {
      console.log('❌ Brak lokalnego ciastka. Tworzę nowe...');
      this.utworzNowaSesje();
    } else {
      console.log('⚠️ Mam ciastko, sprawdzam jego ważność na serwerze...');
      this.sprawdzWaznoscSesji();
    }
  }

  // Funkcja 1: Sprawdza czy ciastko jest w bazie
  private sprawdzWaznoscSesji() {
    // Ważne: withCredentials: true jest tu kluczowe, żeby backend dostał ciastko!
    this.http.post<any>(this.API_URL_CHECK, {}, { withCredentials: true }).subscribe({
      next: (response) => {
        if (response.error_cookies === false) {
          console.log('✅ Sesja jest ważna i aktywna.');
        } else {
          console.warn('🚨 Sesja nieważna (błąd backendu):', response.powod);
          // Skoro stare ciastko jest złe, pobieramy nowe
          this.utworzNowaSesje();
        }
      },
      error: (err) => {
        console.error('Błąd połączenia przy sprawdzaniu sesji. Może serwer leży?', err);
      }
    });
  }

  // Funkcja 2: Tworzy zupełnie nową sesję
  private utworzNowaSesje() {
    this.http.post<{ cookies: string }>(this.API_URL_START, {}).subscribe({
      next: (response) => {
        const nowyToken = response.cookies;
        this.cookieService.set(this.COOKIE_NAME, nowyToken, 365, '/');
        console.log('✅ Utworzono i zapisano nową sesję:', nowyToken);
      },
      error: (err) => {
        console.error('🚨 Krytyczny błąd: Nie udało się utworzyć sesji!', err);
      }
    });
  }
}
