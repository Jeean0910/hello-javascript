let edadPersonal = 11;
let añosParaVotar = 18 - edadPersonal;
if (edadPersonal >= 18) {
  console.log("puede votar");
} else if (edadPersonal < 18) {
  console.log(`no puede votar y le quedan ${añosParaVotar} años para votar.`);
} else {
  console.log("Incorrecto: El valor ingresado debe ser un número");
}
//-----------------------------------------------------------------------------------------------
let disponibilidad
switch(edadPersonal)
{case >=18: disponibilidad= 
console.log("puede votar")
break
case <18:
 disponibilidad= console.log (`no puede votar y le quedan ${añosParaVotar} años para votar.`)
 break
 default: disponibilidad=console.log("Incorrecto, el valor debe ser un número")   

}

let a = 10;
let b = 5;
console.log(a + b);
console.log(!(a == b));

let c = "6";
let d = 6;
console.log(c === d);

console.log(0 === "");

const IsSnowing = false;
IsSnowing ? console.log("Está nevando") : console.log("No está nevando");
//----------------------------------------------------------------------------------------
let miNombre = "Jean";
let saludos = "Hola, ";
let avion = saludos + miNombre + "!";
let correo = "jeean0910@gmail.com";
console.log(avion);
console.log(avion.length);
console.log(avion[10]);
console.log(`hola ${miNombre} tu correo es ${correo}.`);
//===============================================================||
arrays;
//===============================================================||
let myarray = [];
//------agregar elementos al final-------//
myarray.push(1);
myarray.push(2);
myarray.push(3);
console.log(myarray);
//-------eliminar ultimo elemento------//
myarray.pop();
console.log(myarray);
//-------eliminar primer elemento-------//
myarray.shift();
console.log(myarray);
//agregar elementos al inicio
myarray.unshift(1);
console.log(myarray);
//length (ver longitud del conjunto)
console.log(myarray.length);
//borrar contenido de conjunto
myarray = [];
my array.length=0 //alternativa
//seleccionar rango del conjunto
let myarray =[1,2,3,4,5,6,7,8,9,10]
let mynewarray=myarray.slice(0,8) //del elemento 0 al 8 sin tener en cuenta elment 8
console.log(mynewarray)
// eliminar rango del conjunto
let myarray2=["uno","dos","tres","cuatro",5]
myarray2.splice(0,2,"nuevo elemento")
console.log(myarray2)

