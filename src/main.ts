import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function bootstrap() {
  await delay(2000); //sztuczne opoznienie aby pokaza ekran ladowania
  bootstrapApplication(App, appConfig)
    .then(() => {
      // Angular już w pełni wystartował
      document.querySelectorAll(".ekran_ladowania").forEach(el => el.remove());
    })
    .catch((err) => console.error(err));
}

bootstrap();

