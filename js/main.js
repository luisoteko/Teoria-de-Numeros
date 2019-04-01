var resultado = document.getElementById("resultado");
var resultados;
var numero = document.getElementById('numero');

var resultado2 = document.getElementById("resultado2");
var resultados2;
var numero1 = document.getElementById("numero1");
var numero2 = document.getElementById("numero2");

var resultado3 = document.getElementById("resultado3");
var resultados3;
var numero3 = document.getElementById("numero3");


function hallarDivisores(numero) {
  numero = numero;
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

function isPrimo(numero) {
  if (numero<=1) {
    return false;
  }
  else{
    divisores = hallarDivisores(numero);
    // console.log(divisores);
    if (divisores.length <=2) {
      return true;
    }
    else{
      return false;
    }
  }
}

function hallarPrimos(numero) {
  if (numero <=1) {
    imprimir("Su numero es menor o igual a 1, se requiere un entero positivo mayor a 1.");
  }
  else{
    divisores = hallarDivisores(numero);
    resultados = "";
    console.log(divisores);
    
    if (divisores.length ==2) {
      resultados = "El numero " + numero + " es primo";
    }
    else{
      var x=2;
      var y = numero;
      
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
  x = Math.max(numero1, numero2);
  y = Math.min(numero1, numero2);
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
    toPrint = "Los numeros " + numero1 + " y " + numero2 + " son primos relativos";
  }
  else{
    toPrint = "El Maximo comun Divisor entre " + numero1 +" y " + numero2 + " es: " + x;
  }
  imprimir2(toPrint);
  return x;
}

function hallarMCM(numero1, numero2) {
  var q = hallarMCD(numero1, numero2);
  x = Math.max(numero1, numero2);
  y = Math.min(numero1, numero2);
  x = Math.abs(x);
  y = Math.abs(y);
  var aux = (x*y)/q;
  console.log(aux);

  toPrint = "El Minimo comun Multiplo entre " + x + " y " + y + " es: " + aux;
  imprimir2(toPrint);
}

function CicloConjetura(tamaño) {
  var toPrint = "";
  console.log(tamaño);
  for (let i = 0; i <= (tamaño*2)+2; i+=2) {
    sum = Conjetura(i);
    toPrint += sum;
  }

  imprimir3(toPrint);
}
function Conjetura(i) {
  var toPrint = "";
  for (let n = 2; n <= i; n++) {
    aux = i - n;
    console.log(aux);
    console.log(n);

    console.log(isPrimo(n));
    console.log(isPrimo(aux));
    if (isPrimo(n) && isPrimo(aux)) {
      
      toPrint = "El numero " + i + " es igual a " + n + " + " + aux + "<br>";
      console.log(toPrint);
      
      return toPrint;
    }
  }
  return toPrint;
}

function imprimir(resultados) {
  resultado.innerHTML = resultados;
  resultado2.innerHTML = "";
  resultado3.innerHTML = "";
}

function imprimir2(resultados2) {
  resultado2.innerHTML = resultados2;
  resultado.innerHTML = "";
  resultado3.innerHTML = "";
}

function imprimir3(resultados3) {
  resultado3.innerHTML = resultados3;
  resultado.innerHTML = "";
  resultado2.innerHTML = "";
}