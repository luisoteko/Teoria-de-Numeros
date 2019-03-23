var resultado = document.getElementById("resultado")
var resultados;
function hallarDivisores(numero) {
  resultados = [];
  for (let i = 0; i <= numero; i++) {
    if (numero%i==0) {
      resultados.push(i);
    }
  }
  imprimir(resultados)
  return resultados;
}
function hallarPrimos(numero) {
  divisores = hallarDivisores(numero);
  if (divisores.length <3) {
    resultados = "El numero " + numero + " es primo";
    imprimir(resultados);
    return resultados;
  }
  else{
    resultados = "El numero "+ numero +" es compuesto y sus divisores son "+ divisores;
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