// Chicos me tome unos minutos para hacer un mini resumen sobre condicionales por si lo necesitan.  Saludos :)

//Declaraciones lógicas y condicionales (if / else)
//Vale aclarar que el ejemplo que van a ver mas abajo, esta escrito en JavaScript. (No es el mismo lenguaje que Java)

//Teoria y definición: 
//Van a empezar a ver como se conecta el tema que estamos viendo en algebra con las condicionales u operadores booleanos (Verdadero o falso).

//Podemos hacer cosas condicionalmente en nuestros programas al usar declaraciones if y declaraciones if/else combinadas.
//Una declaración if le dice al programa que ejecute un bloque de código, si una condición es verdadera.
//Cuando un valor es true (verdadero) o false (falso), lo llamamos valor booleano. Es aca cuando se utiliza if/else.

//ejemplo: true

var nombre = "Tomás";

if (nombre == "Tomás") {
    console.log("Bienvenido"+ " " + nombre)
} else {
    console.log("Su nombre es incorrecto")
}; 

//En este ejemplo se declaro una variable llamada "Nombre" y se le otorgo el valor de "Tomás".
//el if declara que si "Nombre" es igual a "Tomás" se ejecute esa condicion :  console.log("Bienvenido"+ " " + nombre)
// y si no se ejecuta el else: console.log("Su nombre es incorrecto") 

//False 
var nombre2 = "Martin";

if (nombre2 === "Tomás") {
    console.log("Bienvenido"+ " " + nombre)
} else {
    console.log("Su nombre es incorrecto")
}; 

//Tambien se puede combianar: if / else if / else = si / o / entonces. 


//Agrego operadores logicos para que los vayan viendo: 
// === | Igualdad estricta  (son tres =)
// !== | Desigualdad estricta
//>	Mayor que	
// >=	Mayor o igual que	
// <	Menor que	
// <=	Menor o igual que