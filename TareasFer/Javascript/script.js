//comentarios de una sola linea

/*comentario 
multi
linea*/

// alert("hola mundo");


// console.log('Este es un mensaje para mi consola');


// var nombre = prompt('Ingresa tu nombre');
// alert('Hola, ' + nombre + ' Bienvenido a la CH35');


// var numero1= parseInt(prompt('Ingresa el primer numero:'));
// var numero2= parseInt(prompt('Ingresa el segundo numero:'));


// console.log("suma:" + (numero1 + numero2)  );
// console.log('resta:' + (numero1 - numero2));
// console.log('division:' + (numero1/numero2) );
// console.log('multiplicacion:' + (numero1*numero2));

// var edad= parseInt(prompt('Ingresa tu edad:'));
// if(edad <=17) {
//     console.log('estas chavo, joven')
//     alert('estas chavo joven')}
// else if(edad>18 & edad<=64){
//     alert('Ya eres todo un adultx')
//     console.log('Ya eres todo un adultx y te sabes la de chambear')}
// else{
//     alert('Descanse en paz chavo')
//     console.log('Descanse en paz chavo')}
// ;
 

// TIPOS DE DATOS Y VARIABLES

// scope es el alcance de neustra variable
/*var, let, const la diferencia es el alcance:
var tiene un alcance global
let tiene un alcance local
const se mantiene sin ningun cambio*/

/*string:cadena de texto (lleva comillas)
number:numero
bollean: true/false
null:nulo
undefined: noesta asignado o definido*/

let nombre="Daniel";
let invitadosExtra= 2;
let esMayorEdad = true;
let edad= 25;
let invitadoEspecial = null;
let horaSalida = undefined;

// document.write(nombre);

/* Encasillamiento o tipado
nos es util para el mantenimiento del codigo ya que lo hace mas legible y facil de entender
prevencion de errores para reducir la probabilidad de los mismos
mejora el rendimiento de nuestro programa
*/

// let numero = 15;
// let texto = 'hola';

//con encasillamiento (definir el tipo de dato que maneja la variable)

// let numeroEncasillado= Number= 5;
// let textoEncasillado= String= 'hola';

// console.log(typeof(nombre));

/* 
conversion de string a number
let funcionNumber = console.log(typeof Number (nombre));

metodoParseInt = console.log(typeof parseInt(nombre));
metodoParseFloat = console.log(typeof parseFloat(nombre));

parseInt y parseFloat son funciones que se utilizan para convertir cadenas
de texto en numero, ambas nos ayudan en este cambio*/

//conversion de nombre a string

/*console.log(typeof String (edad));
console.log(typeof edad.toString());*/

//convertir de boolean a number

/*let numero = Number (esMayorEdad);
console.log(numero);*/

//convertir boolean a string
/*let texto = String(esMayorEdad);
console.log(typeof(texto));
console.log(typeof esMayorEdad.toString());*/

//invertir boolean
/*let negacion = !esMayorEdad;
console.log(negacion);*/

//concatenar

let saludo = 'Hola humano ';
let frase = 'el futuro es hoy, oiste viejo?';

texto = saludo + frase;

console.log(texto);