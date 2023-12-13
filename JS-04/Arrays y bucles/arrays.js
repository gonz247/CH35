/*
Arrays
Es una coleccion o agrupacion de elementos en una misma variable, cada uno de ellos ubicado por la posicion que ocupa el array. 
Los arryas se utilizan para almacenar y organizar datos de manera mas eficiente. 
*/

//Crear un Array
const numeros = [1,2,3,4,5];

//arrays de strings
const comida = ['tacos', 'sopita', 'pan', 'jugo'];

console.log(numeros);

//array misto
const mixto = [
    'pluma',
    8,
    true,
    {nombre:'mar'}
];
console.log(mixto);

//Array vacio
const lista =[];
console.log(lista);
//Agregar elemento a un array
lista[0]='leche';
lista[1]='carne';
lista[2]='Fruta';
console.log(lista);

//Otra manera de crear Arrays
const frutas = new Array('manzana', 'naranja', 'peras', 'mandarinas','uvas');
//Esta sintaxis se puede emplear en un Arrays porque son Objects, es una manera de mandar a llamar un nuevo Objeto de tipo Array. 
console.log(frutas);
// longitud de un array
console.log(frutas.length);
//acceder a los elementos del array, acorde a su indice
console.log(frutas[3]); //mandarinas

//Modificar un elemento del array por el indice
const cremeria = ['jamon', 'salchicha', 'queso','leche', 'yogurt'];
console.log(cremeria);
//cambiamos un elemento por otro
cremeria[2] ='quesillo';
cremeria[2] = 'danonino';
console.log(cremeria);
//notese que cambiaron los elementos

//arreglo de arreglos multidimentsionales

const estados = ['edomx', 'jalisco','yucatan','sonora','oaxaca','cmx'];
const platillos = ['guajolomo combo', 'torta ahogada', 'panucho','dogo','tlayuda','taco'];
const menu = [estados, platillos];

//En el primer corchete se establece el índice del array y en el segundo corchete se establece el índice del elemento de dicho array.
console.log(menu[0][2] + ' ' + menu[1][2]);
console.log(`El/la ${menu [1][3]} se come en ${menu[0][3]}`)

/*
metodos de arrays
Metodo de cola(queue. Los metodos de cola implican agregar elementos al final del array y eliminar elementos al inicio del array. Sigue el principio de FIFO(fisrst-infrist-out) lo que significa el primer elemento añadido es el primer elemento eliminado)

push
shift
unshift

Metodo de pila (stack). Implica agregar elementos al final del array y eliminar elementos del final del array. Sigue el princio LIFO (last-in-first-out), que significa el ultimo elemento añadido es el pirmero en ser eliminado.

push
pop
*/

console.log('metodos de Arrays');

const ch35 = ['dani', 'fer','maara','gaby','mar','paola','enrique'];
console.log(ch35);
//pop() eliminar el ultimo elemento del array
let popch35 = ch35.pop();
console.log(popch35); //aqui mostramos el elemento eliminado del array
console.log(ch35); // array nuevo sin el elemento eliminado

//push() agregar al final del array
ch35.push('mony');
console.log(ch35);

//shift() quitar primer elemento el array
let shiftch35 = ch35.shift();
console.log(shiftch35); //aqui mostramos el elemento que fue eliminado
console.log(ch35); //array nuevo donde el primer elemento fue eliminado

//unshift() agrega un elemento al inicio del array
ch35.unshift('dany');
console.log(ch35);

//reverse() cambia el sentido del ordenamiento del array
ch35.reverse();
console.log(ch35);//aqui mostramos el arreglo con el nuevo orden(al reves)

//investigar: sort, forEach, slice, splice