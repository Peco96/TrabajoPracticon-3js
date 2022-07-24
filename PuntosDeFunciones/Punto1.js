//Punto 1

let numero = prompt("Introduce un número entero");

let resultado = parImpar(numero);
document.write("El número "+numero+" es "+resultado);

function parImpar(numero) {
  if(numero % 2 == 0) {
    return "par";
  }
  else {
    return "impar";
  }
}