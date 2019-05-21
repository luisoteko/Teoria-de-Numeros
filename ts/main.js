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
var resultado4 = document.getElementById("resultado4");
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
function hallarDivisores(numero) {
    numero = numero;
    var toPrint;
    resultados = [];
    for (let i = 0; i <= numero; i++) {
        if (numero % i == 0) {
            resultados.push(" " + i);
        }
    }
    toPrint = numero + " es divisible entre " + resultados;
    imprimir(toPrint);
    return resultados;
}
function isPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    else {
        var divisores = hallarDivisores(numero);
        // console.log(divisores);
        if (divisores.length <= 2) {
            return true;
        }
        else {
            return false;
        }
    }
}
function hallarPrimos(numero) {
    if (numero <= 1) {
        imprimir("Su numero es menor o igual a 1, se requiere un entero positivo mayor a 1.");
    }
    else {
        var divisores;
        divisores = hallarDivisores(numero);
        resultados = "";
        console.log(divisores);
        if (divisores.length == 2) {
            resultados = "El numero " + numero + " es primo";
        }
        else {
            var x = 2;
            var y = numero;
            resultados = "El numero " + y + " es compuesto y se puede expresar como: ";
            while (y != 1 && y > 0) {
                if (y % x == 0) {
                    y = Math.floor(y / x);
                    resultados += x + "x";
                }
                else {
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
    var x = Math.max(numero1, numero2);
    var y = Math.min(numero1, numero2);
    var x = Math.abs(x);
    var y = Math.abs(y);
    var residuo = 0;
    var toPrint;
    // Algoritmo de Euclides
    do {
        residuo = y;
        y = x % y;
        x = residuo;
    } while (y != 0);
    if (x == 1) {
        toPrint = "Los numeros " + numero1 + " y " + numero2 + " son primos relativos";
    }
    else {
        toPrint = "El Maximo comun Divisor entre " + numero1 + " y " + numero2 + " es: " + x;
    }
    imprimir2(toPrint);
    return x;
}
function hallarMCM(numero1, numero2) {
    var q = hallarMCD(numero1, numero2);
    var toPrint;
    var x = Math.max(numero1, numero2);
    var y = Math.min(numero1, numero2);
    var x = Math.abs(x);
    var y = Math.abs(y);
    var aux = (x * y) / q;
    console.log(aux);
    toPrint = "El Minimo comun Multiplo entre " + x + " y " + y + " es: " + aux;
    imprimir2(toPrint);
}
function CicloConjetura(tamaño) {
    var toPrint = "";
    var sum;
    console.log(tamaño);
    for (let i = 0; i <= (tamaño * 2) + 2; i += 2) {
        sum = Conjetura(i);
        toPrint += sum;
    }
    imprimir3(toPrint);
}
function Conjetura(i) {
    var toPrint = "";
    for (let n = 2; n <= i; n++) {
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
function relaciones(universalS, relacionS) {
    var relacion;
    var universal;
    relacionS = relacionS.replace(/\s+/g, '');
    universalS = universalS.replace(/\s+/g, '');
    relacion = relacionS.split(";");
    universal = universalS.split(";");
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
    var PrCruz = [];
    var Reflexiva = [];
    for (let i = 0; i < universal.length; i++) {
        const e1 = universal[i];
        for (let j = 0; j < universal.length; j++) {
            const e2 = universal[j];
            if ((e1 != "," && e2 != ",") && (e1 != ";" && e2 != ";")) {
                // Halla el producto cruz
                PrCruz.push(e1 + "," + e2);
                if (e1 == e2) {
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
        else {
            auxRef = auxRef * 1;
        }
    }
    if (auxRef == 1) {
        resultado4.innerHTML += "<br/>La relacion es reflexiva";
    }
    else {
        resultado4.innerHTML += "<br/>La relacion no es reflexiva ya el elemento (" + faltRef + ") no pertenece a la relacion";
    }
    //Simetrica
    var auxSim = 1;
    var auxSimAsim = 1;
    var faltSim = "";
    for (let i = 0; i < relacion.length; i++) {
        const element = relacion[i];
        var elementA = element.split(",");
        var simetria = elementA[1] + ',' + elementA[0];
        if (relacion.includes(simetria)) {
            auxSim *= 1;
            if (element === simetria) {
                auxSimAsim *= 1;
                debugger;
            }
            else {
                auxSimAsim *= 0;
            }
        }
        else {
            auxSim *= 0;
            faltSim = simetria;
        }
    }
    if (auxSim == 1 && auxSimAsim == 1) {
        resultado4.innerHTML += "<br/>La relacion es simetrica y antisimetrica";
    }
    else if (auxSim == 1) {
        resultado4.innerHTML += "<br/>La relacion es simetrica";
    }
    else {
        resultado4.innerHTML += "<br/> La relacion es AntiSimetrica ya que la pareja (" + faltSim + ") no pertenece a la relacion";
    }
    // Transitiva
    var auxTran = 1;
    var exTr1 = "";
    var exTr2 = "";
    var buscado = "";
    var buscadoNE = "";
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
                else {
                    auxTran *= 0;
                    exTr1 = element1;
                    exTr2 = element2;
                    buscadoNE = element1A[0] + "," + element2A[1];
                }
            }
        }
    }
    if (auxTran == 1) {
        resultado4.innerHTML += "<br/>La relacion es transitiva";
    }
    else {
        resultado4.innerHTML += "<br/>La relacion no es transitiva ya que las parejas (" + exTr1 + ") y (" + exTr2 + ") pertenecen a la relacion, pero la pareja " + buscadoNE + " no";
    }
    // Equivalencia u orden
    if (auxRef == 1 && auxSimAsim == 1 && auxTran == 1) {
        resultado4.innerHTML += "<br/> La relacion es de Equivalencia y de Orden";
    }
    else if (auxRef == 1 && auxSim == 1 && auxTran == 1) {
        resultado4.innerHTML += "<br/> La relacion es de Equivalencia";
    }
    else if (auxRef == 1 && auxSim == 0 && auxTran == 1) {
        resultado4.innerHTML += "<br/> La relacion es de Orden";
    }
    else {
        resultado4.innerHTML += "<br/> La relacion no es de Orden ni de Equivalencia";
    }
}
