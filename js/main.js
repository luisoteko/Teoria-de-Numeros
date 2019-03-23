var resultado = document.getElementById("resultado");
var resultado2 = document.getElementById("resultado2");

var resultados;
var resultados2;

var numero = document.getElementById('numero');

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

function hallarMCM(numero) {
    
}

function hallarMCD(numero) {
  
}

function imprimir(resultados) {
  resultado.innerHTML = resultados;  
}

function imprimir2(resultados2) {
  resultado2.innerHTML = resultados2;
}