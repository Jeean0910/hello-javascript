/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let names = "Jean";
if (names === "Jean") {
  console.log("Jean");
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let user = "jean.franco.posso";
let password = "RataBlanca_123";
if (User === "jean.franco.posso" && password === "RataBlanca_123") {
  console.log("Ingreso exitoso");
} else {
  console.log("Usuario o contraseña incorrectos");
}
// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let number = -1;
if (number >= 1) {
  console.log("El numero es positivo");
} else if (number === 0) {
  console.log("El nùmero es cero");
} else {
  console.log("el numero es negativo");
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let userage = 17;
if (userage >= 18) {
  console.log("puede votar");
} else {
  let yearsToVote = 18 - userage;
  console.log(`no puede votar y le falta(n) ${yearsToVote} año(s)`);
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

// 9. Usa un switch para hacer de nuevo el ejercicio 6

// 10. Usa un switch para hacer de nuevo el ejercicio 7
