const slices = document.querySelectorAll('#ekran_ladowania .kawalek_pizzy img');
let index = 0;
let filling = true;

setInterval(() => {
  if (filling) {
    slices[index].src = 'images/pizza/pizza_pionowo_mix.png';
    index++;
    if (index >= slices.length) {
      filling = false; // wszystkie pełne, zaczynamy opróżnianie
      index = 0;
    }
  } else {
    slices[index].src = 'images/pizza/pizza_pionowo_pusta.png';
    index++;
    if (index >= slices.length) {
      filling = true; // wracamy do wypełniania
      index = 0;
    }
  }
}, 250);
