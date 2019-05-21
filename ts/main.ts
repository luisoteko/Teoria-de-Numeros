var resultado = document.getElementById("resultado");

var resultado2 = document.getElementById("resultado2");

var resultado3 = document.getElementById("resultado3");

var resultado4 = document.getElementById("resultado4");

function imprimir(resultados: string) {
  resultado.innerHTML = resultados;
  resultado2.innerHTML = "";
  resultado3.innerHTML = "";
}

function imprimir2(resultados2: string) {
  resultado2.innerHTML = resultados2;
  resultado.innerHTML = "";
  resultado3.innerHTML = "";
}

function imprimir3(resultados3: string) {
  resultado3.innerHTML = resultados3;
  resultado.innerHTML = "";
  resultado2.innerHTML = "";
}

function hallarDivisores(numero: number) {
  numero = numero; //Se recibe el número al cual se le hallaran los divisores
  var resultados = []; //Se crea un arreglo en el que se añadirán los divisores
  for (let i = 0; i <= numero; i++) { //Se hace un ciclo para todos los números menores que el recibido
    if (numero % i == 0) { //Se comprueba si el contador del ciclo es divisor de el numero recibido
      resultados.push(" " + i); //Se agrega el numero al arreglo
    }
  }
  imprimir(numero + " es divisible entre " + resultados); //Se imprime
  return resultados; //Retorna los divisores
}


function hallarPrimos(numero: number) {
  if (numero <= 1) { //Si el numero es menor o igual a uno, por definición, no es primo
    imprimir("Su numero es menor o igual a 1, se requiere un entero positivo mayor a 1.");
  }
  else if(numero > 2){
    var divisores: number[]; //Se crea un arreglo
    divisores = hallarDivisores(numero); //En el arreglo se agregan los elementos obtenidos del método hallarDivisores
    var toPrint: string = ""; // Se crea un string que contendrá el texto a imprimir

    if (divisores.length == 2) { //Si el numero de divisores es exactamente 2
      toPrint = "El numero " + numero + " es primo"; //Significa que es primo
    }
    else if (divisores.length >2){ //El numero de divisores es mayor a 2, es decir que es compuesto
      var x = 2;  // Se inicializa un contador en 2
      var y = numero; // Se almacena el numero en cuestión
      toPrint = "El numero " + y + " es compuesto y se puede expresar como: "; //Se agrega a la variable el texto a imprimir
      while (y > 1) { // Mientras la variable y sea mayor a 1
        if (y % x == 0) { // Si el residuo de la división y/x es 0
          y = y / x; //Se toma el cociente de la división, y se reemplaza por este en la variable y
          toPrint += x + "x"; //Se agrega x y el signo "x" al texto a imprimir
          //Si el mismo numero (x) sigue dividiendo a y se toma el mismo
        }
        else {
          //Si el valor del contador (x) no divide a y se le aumenta uno
          x++; 
        }
      }

      if (toPrint.lastIndexOf("x")) {
        toPrint = toPrint.slice(0, -1); //Se elimina el ultimo símbolo "x"
      }
    }
    imprimir(toPrint); //Se imprime la variable
  }
}

function hallarMCD(numero1: number, numero2: number) {
  var x:number = Math.max(numero1, numero2); //Se le asigna a x el mayor de los dos números ingresados
  var y:number = Math.min(numero1, numero2); //Se le asigna a y el menor de los dos números ingresados
  var x:number = Math.abs(x); //Se toma el valor absoluto del numero
  var y:number = Math.abs(y); //Se toma el valor absoluto del numero
  var residuo:number; //Se crea una variable residuo
  var toPrint:string; //Se crea una variable que contendrá el texto a imprimir
  // Algoritmo de Euclides
  do {
    residuo = y; // Se le asigna a la variable "residuo" el valor de y
    y = x % y; // Se le asigna a y el residuo de la división
    x = residuo; //Se le asigna a x el valor anterior de y, ahora llamado residuo
  } while (y != 0); //Mientras que y sea diferente a 0


  if (x == 1) { //Si el ultimo valor de x (el MCD) es 1 (es decir, cuando y sea 0) quiere decir que los números son primos relativos
    toPrint = "Los números " + numero1 + " y " + numero2 + " son primos relativos"; //Se agrega el texto a imprimir
  }
  else { // El MCD es diferente de 1
    toPrint = "El Máximo común Divisor entre " + numero1 + " y " + numero2 + " es: " + x; //Se agrega el texto a imprimir
  }
  imprimir2(toPrint); //Se imprime
  return x; //Se retorna el MCD
}

function hallarMCM(numero1: number, numero2: number) {
  var q = hallarMCD(numero1, numero2); //Se halla el MCD de los dos números, a través de la función hallarMCD
  var x = Math.max(numero1, numero2); //Se le asigna a x el mayor de los dos números ingresados
  var y = Math.min(numero1, numero2); //Se le asigna a y el menor de los dos números ingresados
  var x = Math.abs(x); //Se toma el valor absoluto de x
  var y = Math.abs(y); //Se toma el valor absoluto de y
  var MCM = (x * y) / q; //El mínimo común múltiplo es equivalente a multiplicar los dos números y dividirlos entre el MCD

  imprimir2("El Mínimo común Múltiplo entre " + x + " y " + y + " es: " + MCM); //Se imprime
}


function isPrimo(numero: number) {
  if (numero <= 1) {
    return false; // Si el numero es menor a uno o igual, por definición, no es primo
  }
  else if (numero > 1) { // Si el numero es mayor a uno 
    var divisores = hallarDivisores(numero); // Utilizando el método hallarDivisores se guardan los divisores
    if (divisores.length == 2) { // Si el arreglo divisores tiene exactamente dos divisores
      return true;               // Es primo
    }
    else { // Si tiene un numero diferente de divisores
      return false; // Significa que es compuesto
    }
  }
}

function Conjetura(i: number) {
  var toPrint = ""; //Se crea una variable con el texto a imprimir
  for (let n = 2; n <= i; n++) {//Se hace un ciclo para todos los números mayores a 2(el primo mas pequeño) y menores al número dado
    var aux = i - n;
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
function CicloConjetura(tamaño: number) {
  var toPrint = ""; //Se crea una variable que contendrá el texto a imprimir
  var sum; //Se crea una variable sum que contendrá cada suma
  for (let i = 0; i <= (tamaño * 2) + 2; i += 2) {//Se hace un ciclo para la cantidad de números digitada
    sum = Conjetura(i); //Se obtiene la suma de cada número y se guarda en la variable sum
    toPrint += sum; //Se agrega cada suma al texto a imprimir
  }
  imprimir3(toPrint); //Se imprime
}

function relaciones(universalS: string, relacionS: string) {
  var relacion: string[];
  var universal: string[];
  relacionS = relacionS.replace(/\s+/g, '');
  universalS = universalS.replace(/\s+/g, '');
  relacion = relacionS.split(";");
  universal = universalS.split(";");
  resultado.innerHTML = "";
  resultado2.innerHTML = "";
  resultado3.innerHTML = "";
  resultado4.innerHTML = "";
  
    for (let j = 0; j < relacion.length; j++) {
      const element = relacion[j].split(',');
      for (let q = 0; q < element.length; q++) {
        const x = element[q];
        if (!universal.includes(x)) {
          resultado4.innerHTML = "<br/>El elemento " + x + " no pertenece al conjunto A";
        }
      }
    }
  
  var PrCruz: string[] = [];
  var Reflexiva: string[] = [];

  for (let i = 0; i < universal.length; i++) {
    const e1 = universal[i];
    for (let j = 0; j < universal.length; j++) {
      const e2 = universal[j];
      if ((e1!="," && e2!=",") && (e1!=";" && e2!=";")) {
        // Halla el producto cruz
        PrCruz.push(e1+","+e2);
        if (e1==e2) {
          //Halla los elementos que debe contener para ser Reflexiva
          Reflexiva.push(e1 + "," + e2);
        }
      }
    }
  }
  var auxRef = 1;
  var faltRef;
  for (let i = 0; i < Reflexiva.length; i++) {
    if (!relacion.includes(Reflexiva[i])) {
      // Determina si contiene todos los elementos necesarios para ser una relacion reflexiva
      auxRef = auxRef * 0;
      faltRef = Reflexiva[i];
    }
    else{
      auxRef = auxRef * 1;
    }
  }
  if (auxRef ==1) {
    resultado4.innerHTML += "<br/>La relacion es reflexiva"
  } else{
    resultado4.innerHTML += "<br/>La relacion no es reflexiva ya el elemento (" + faltRef + ") no pertenece a la relacion"
  }

  //Simétrica
  var auxSim = 1;
  var auxSimAsim = 1;
  var faltSim = "";
  for (let i = 0; i < relacion.length; i++) {
    const element = relacion[i];
    var elementA = element.split(",");
    var simetria = elementA[1] + ',' + elementA[0];
      if(relacion.includes(simetria)){
        auxSim *= 1;
        if (element === simetria) {
          auxSimAsim *= 1;
          debugger;
        } else{
          auxSimAsim *= 0;
        }
      } else{
        auxSim *= 0
        faltSim = simetria;
      }
  }
  if (auxSim == 1 && auxSimAsim == 1){
    resultado4.innerHTML += "<br/>La relacion es simétrica y anti simétrica";
  } else if(auxSim == 1){
    resultado4.innerHTML += "<br/>La relacion es simétrica"
  }
  else{
    resultado4.innerHTML += "<br/> La relacion es Anti simétrica ya que la pareja ("+ faltSim + ") no pertenece a la relacion"
  }


  // Transitiva
  var auxTran = 1;
  var exTr1 = "";
  var exTr2 = "";
  var buscado = "";
  var buscadoNE = ""
  
  for (let i = 0; i < relacion.length; i++) {
    const element1 = relacion[i];
    var element1A = element1.split(",");
    for (let j = 0; j < relacion.length; j++) {
      const element2 = relacion[j];
      var element2A = element2.split(",");
      if (element1A[1] == element2A[0]) {
        buscado = element1A[0] + "," + element2A[1];
        if (relacion.includes(buscado)) {
          auxTran *= 1;
        }
        else{
          auxTran *=0;
          exTr1 = element1;
          exTr2 = element2;
          buscadoNE = element1A[0] + "," + element2A[1];
        }
      }
    }
  }
  if (auxTran ==1) {
    resultado4.innerHTML += "<br/>La relacion es transitiva"
  } else{
    resultado4.innerHTML += "<br/>La relacion no es transitiva ya que las parejas ("+ exTr1 + ") y (" + exTr2 + ") pertenecen a la relacion, pero la pareja " + buscadoNE + " no" ;
  }

// Equivalencia u orden

  if (auxRef ==1 && auxSimAsim==1 && auxTran ==1) {
    resultado4.innerHTML += "<br/> La relacion es de Equivalencia y de Orden"
  } else if (auxRef == 1 && auxSim == 1 && auxTran == 1){
    resultado4.innerHTML += "<br/> La relacion es de Equivalencia";
  } else if (auxRef == 1 && auxSim == 0 && auxTran == 1){
    resultado4.innerHTML += "<br/> La relacion es de Orden";
  } else{
    resultado4.innerHTML += "<br/> La relacion no es de Orden ni de Equivalencia"
  }

}