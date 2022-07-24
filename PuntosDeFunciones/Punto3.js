// Punto 3

let lado1 = (lado2 = 0);
let perimetro = 0;

lado1 = preguntarDato();
lado2 = preguntarDato();

escribePerimetro(lado1, lado2);

function preguntarDato() {
  return parseFloat(window.prompt("escribe tu medida"));
}

function escribePerimetro(a, b) {
  var perimetro = 2 * (a + b);
  document.write(
    "el perimetro de un rectángulo de lados " +
      a +
      " y " +
      b +
      " es " +
      perimetro
  );
}
