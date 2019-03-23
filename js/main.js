var resultado = document.getElementById("resultado");
var resultados;
var numero = document.getElementById('numero');

var resultado2 = document.getElementById("resultado2");
var resultados2;
var numero1 = document.getElementById("numero1");
var numero2 = document.getElementById("numero2");


function hallarDivisores(numero) {
  numero = numero.value;
  resultados = [];
  for (let i = 0; i <= numero; i++) {
    if (numero%i==0) {
      resultados.push(" "+ i);
    }
  }
  toPrint = numero + " es divisible entre " + resultados;
  imprimir(toPrint);
  return resultados;
}

function hallarPrimos(numero) {
  if (numero.value <=1) {
    imprimir("Su numero es menor o igual a 1, se requiere un entero positivo mayor a 1.")
  }
  else{
    divisores = hallarDivisores(numero);
    resultados = "";
    if (divisores.length <3) {
      resultados = "El numero " + numero.value + " es primo";
    }
    else{
      var x=2
      var y = numero.value
      resultados = "El numero " + y + " es compuesto y se puede expresar como: ";
      while (y != 1 && y >0) {
        if (y % x == 0) {
          y = Math.floor(y/x);
          resultados += x + "x";
        }
        else{
          x++;
        }
      }
      if (resultados.lastIndexOf("x")) {
        resultados = resultados.slice(0, -1);
      }
    }
    imprimir(resultados);
    return resultados;
  }
}

function hallarMCM(numero1, numero2) {

}

function hallarMCD(numero1, numero2) {
  x = numero1;
  y = numero2;
  var residuo = 0;
  while (x % y != 0) {
    resto = x % y;
    x = y;
    y = residuo;
  }
  toPrint = "El Maximo comun Divisor entre " + numero1 +" y " + numero2 + "es: " + y;
  imprimir2(toPrint)
  return y;
}

function imprimir(resultados) {
  resultado.innerHTML = resultados;  
}

function imprimir2(resultados2) {
  resultado2.innerHTML = resultados2;
}