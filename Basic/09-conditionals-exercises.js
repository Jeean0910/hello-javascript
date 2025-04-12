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
let edad = 17;
let tipoDePersona = edad >= 18 ? "adulto" : "menor";
console.log(tipoDePersona);
// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = "julio";
if (mes === "diciembre" || mes === "enero" || mes === "febrero") {
  console.log("invierno");
} else if (mes === "marzo" || mes === "abril" || mes === "mayo") {
  console.log("primavera");
} else if (mes === "junio" || mes === "julio" || mes === "agosto") {
  console.log("verano");
} else {
  console.log("otoño");
}
// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
if (mes === "febrero") {
  console.log(28);
} else if (
  mes === "abril" ||
  mes === "junio" ||
  mes === "septiembre" ||
  mes === "noviembre"
) {
  console.log(30);
} else {
  console.log(31);
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let idioma = "español";
let saludo;
switch (idioma) {
  case "italiano":
    saludo = "ciao";
    break;
  case "español":
    saludo = "hola";
    break;
  case "ingles":
    saludo = "hello";
    break;
  case "aleman":
    saludo = "hallo";
    break;
  default:
    saludo = "Idioma no disponible";
}

console.log(saludo);

// 9. Usa un switch para hacer de nuevo el ejercicio 6
let mes="junio"
let estacion 
switch (mes)
{case "diciembre" ||"enero" || "febrero" : estacion="invierno"
  break
  case "marzo" || "abril" || "mayo" : estacion = "primavera"
  break
  case "junio" ||"julio" ||"agosto" : estacion = "verano"
  break
  case "septiembre" || "octubre" || "noviembre" : estacion = "otoño"
  break 
  default estacion = "mes no reconocido"
}
console.log (estacion)
// 10. Usa un switch para hacer de nuevo el ejercicio 7
