// Variables necesarias
var numeros = [];

// Funciones esenciales del proceso a simular
function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

function concatenacion(a, b) {
  return a.toString() + b.toString();
}

function division(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    return "No se puede dividir entre cero";
  }
}

function porcentaje(a, b) {
  return (a * b) / 100;
}

// Capturar entradas mediante prompt()
var num1 = parseFloat(prompt("Ingrese el primer número:"));
var num2 = parseFloat(prompt("Ingrese el segundo número:"));

// Almacenar los números ingresados en el array
numeros.push(num1);
numeros.push(num2);

// Ejecutar las operaciones
var resultadoSuma = suma(num1, num2);
var resultadoResta = resta(num1, num2);
var resultadoConcatenacion = concatenacion(num1, num2);
var resultadoDivision = division(num1, num2);
var resultadoPorcentaje = porcentaje(num1, num2);

// Notificación de resultados en forma de salida
var resultadoDiv = document.getElementById("resultado");
resultadoDiv.innerHTML = `
  <h3>Resultados:</h3>
  <p>Suma: ${resultadoSuma}</p>
  <p>Resta: ${resultadoResta}</p>
  <p>Concatenación: ${resultadoConcatenacion}</p>
  <p>División: ${resultadoDivision}</p>
  <p>Porcentaje: ${resultadoPorcentaje}</p>
`;

console.log("Array de números ingresados:", numeros);

// Métodos de búsqueda y filtrado sobre Array
var numMayor = Math.max.apply(null, numeros);
var numMenor = Math.min.apply(null, numeros);

console.log("Número mayor:", numMayor);
console.log("Número menor:", numMenor);
