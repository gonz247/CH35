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

/*
let nombre="Daniel";
let invitadosExtra= 2;
let esMayorEdad = true;
let edad= 25;
let invitadoEspecial = null;
let horaSalida = undefined;
*/
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
/*
let saludo = 'Hola humano ';
let frase = 'el futuro es hoy, oiste viejo?';

texto = saludo + frase;

console.log(texto); */

/* console.log(); nos permite visualizar en consola del navegador el codigo de JS
console.warn(); muestra un mensaje de advertencia
console.table;
*/

let firstName;
firstName = 'Daniel';
let lastName = 'Maldonado';

console.log(firstName + ' ' + lastName);
console.log('Mi nombre es ' + firstName + ' y mi apellido es ' + lastName);

/* ECMAScript 6 (ES6). Interpolacion de cadenas
> - backticks ``
> - para variables las invocamos ${variable}
> - Texto para string
ejemplo:
*/

let age = 37;
console.log(`Mi nombre es ${firstName} y mi apellido es ${lastName} y tengo ${age} años`);

// con la interpolacion de cadenas igual pueden leerse los saltos de linea sin escribir \n o utilizar mas de un console.log()
// ejemplo:

console.log(`Mi nombre es ${firstName} 
y mi apellido es ${lastName} 
y tengo ${age} años`);


//console.warn();
console.warn(`Precaucion, no es buena práctica dejar sin punto y coma`);
//console.error();
console.error(`Status 404: Failed`);

/* Array. Se traduce como matriz o arreglo.
Es un tipo de dato, en el cual se almacena una coleccion de elementos de manera ordenada. 
Los arrays se pueden manipular mediante metodos especificos. 
Los elementos de un array se contabilizan como indices empezando por el indice 0, por lo cual el primer elemento del array posee el indice 0
Se declaran como variables, seguido del signo igual y corchetes. Dentro de cada corchete vive un elemento con un tipo de dato
*/

let arreglo1= []; //Array vacio
console.log(`array vacio ${arreglo1}`);
//los elementos de un aray se separan mediante comas
let cars = ['Ford', 'BMW', 'KIA', 'Mazda']; //array de strings
console.log(cars);
console.log(typeof(cars));
//la longitud corresponde al numero de elementos a partir del indice 0
console.log(cars.length);

//Array de numbers

let salariesMxn = [8000, 10000,12000,14000,16000,18000,20000,22000,24000,26000,28000,30000];
console.log(salariesMxn.length);//output: 12
console.log(salariesMxn);

/*
Objetos. Los objetos son tipos de datos en JS, con una estrucura definida que nos permite almacenar informacion mediante llaves (claves) y valores.
Su sintaxis es la siguiente;
const object {
    clave1: valor1 (dato1),
    clave2: valor2 (dato2)
    }
Los objetos pueden almacenar diferentes tipos de valores.
*/

const employee = {
    firstName: 'Rey David',
    lastName: 'Martínez',
    age: 29,
    country: 'Mexico'
}

console.log(employee);
//mostrando mi objeto como tabla
console.table(employee);
//mostrando mi array como tabla
console.table(cars);