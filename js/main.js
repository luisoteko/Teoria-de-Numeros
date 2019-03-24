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


function hallarMCD(numero1, numero2) {
  x = Math.max(numero1.value, numero2.value);
  y = Math.min(numero1.value, numero2.value);
  x = Math.abs(x);
  y = Math.abs(y);
  var residuo = 0;
  // Algoritmo de Euclides
  do {
    residuo = y;
    y = x%y;
    x = residuo;
  } while (y != 0);
  if (x==1) {
    toPrint = "Los numeros " + numero1.value + " y " + numero2.value + " son primos relativos";
  }
  else{
    toPrint = "El Maximo comun Divisor entre " + numero1.value +" y " + numero2.value + " es: " + x;
  }
  imprimir2(toPrint);
  return x;
}

function hallarMCM(numero1, numero2) {
  var q = hallarMCD(numero1, numero2);
  x = Math.max(numero1.value, numero2.value);
  y = Math.min(numero1.value, numero2.value);
  x = Math.abs(x);
  y = Math.abs(y);
  var aux = (x*y)/q;
  console.log(aux);

  toPrint = "El Minimo comun Multiplo entre " + x + " y " + y + " es: " + aux;
  imprimir2(toPrint);
}
function imprimir(resultados) {
  resultado.innerHTML = resultados;  
}

function imprimir2(resultados2) {
  resultado2.innerHTML = resultados2;
}