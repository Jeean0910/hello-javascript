/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética

//R1
let a = 3;
let b = 5;
// suma
let suma = console.log(a + b);
//resta
let resta = console.log(a - b);
//multiplicación
let multiplicacion = console.log(a * b);
//división
let division = console.log(a / b);
//modulo
let modulo = console.log(a % b);
//exponente
let exponente = console.log(a ** b);
//incremento
let incrementoA = a++;
console.log(a);
//decrecimiento
let decrecimientoA = a--;
console.log(a);

/* 2. Crea una variable para cada tipo de operación de asignación,
   que haga uso de las variables utilizadas para las operaciones aritméticas*/
//R2
//suma asignada
a += 5;
console.log(a);
//resta asignada
a -= 5;
console.log(a);
//división asignada
a /= 3;
console.log(a);
//multiplicación asignada
a *= 3;
console.log(a);
// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(a != b || b > a);
console.log(a <= b && b >= 5);
console.log(a !== b);
console.log(b >= 5);
console.log(a <= b);

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(a == b);
console.log(a === b);
console.log(a >= b);
console.log(a < 2);
console.log(b <= a);

// 5. Utiliza el operador lógico and
let c = 8;
let d = 2;
console.log(c + d == 10 && c < d);
// 6. Utiliza el operador lógico or
console.log(c + d == 10 || c < d);
// 7. Combina ambos operadores lógicos
console.log((c + d > 8 && d == 2) || c != d);
// 8. Añade alguna negación
console.log(!(c + d == 10));
// 9. Utiliza el operador ternario

// 10. Combina operadores aritméticos, de comparáción y lógicas
let alfa = 8;
let beta = 16;
console.log(alfa + beta >= 3 && beta >= 16);
