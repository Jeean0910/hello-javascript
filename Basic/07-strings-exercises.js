/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto
let clima = "lluvioso.";
let whatIsTheWeather = "Hoy el clima está ";

console.log(whatIsTheWeather + clima);

// 2. Muestra la longitud de una cadena de texto
console.log(whatIsTheWeather.length);
// 3. Muestra el primer y último carácter de un string
console.log(whatIsTheWeather[0]);
console.log(whatIsTheWeather[17]);

// 4. Convierte a mayúsculas y minúsculas un string
let weather = "What Is the Weather Like?";
console.log(weather.toUpperCase());
console.log(weather.toLowerCase());

// 5. Crea una cadena de texto en varias líneas
let letter = `esto es una prueba
para ver la validez 
de 
las comillas invertidas`;
console.log(letter);
// 6. Interpola el valor de una variable en un string
let color = "café";
console.log(`Mi color favorito es ${color}. y el tuyo?`);
// 7. Reemplaza todos los espacios en blanco de un string por guiones

// 8. Comprueba si una cadena de texto contiene una palabra concreta

// 9. Comprueba si dos strings son iguales

// 10. Comprueba si dos strings tienen la misma longitud
