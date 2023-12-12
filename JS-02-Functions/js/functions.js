/*Funciones.
Son bloques de codigo con instrucciones que se pueden reutilizar las veces que sean necesarias.
algunas funciones reciben parametros y otras no reciben parametros.
Nota: las funciones tradicionales son funciones por declaracion.
*/

//Funcion que permita saludar
function saludar(){
    console.log('Hola desde una funcion');
}

//Ejecutar la funcion con el nombre de la función y los parámetros
saludar();

//Hoisting. caracteristica de una función que nos permite invocarla desde antes de su inicializacion, es dcir se puede invocar antes del bloque de código o después.

function saludar(){
    console.log('Hola invocando la funcion con hoisting')
}

saludar();

//funciones que retornan algo. Para que una funcion retorne algo (un String, una operacion, una variable, tc.), necesitamos indicarle al código de la función que vamos a retornar mediante la palabra return.

function greeting(){
    return 'Hola desde una funcion que retorna';
}

console.log(greeting());

//Funcion que retorna y recibe parametros
function sumar(x, y){
    return x + y;
}

let resultado = sumar(255, 245);
console.log(`El resultado de sumar x + y es ${resultado}`);

//Calcular el cuadrado de un número
function calcCuadrado(numero){
    return numero*numero
}

let resultCuadrado = calcCuadrado(5);
console.log(resultCuadrado);

//Funciones flecha (Arrow funtion). Es unamanera de declarar una función por declaración, sintetizando código y haciéndolo más legible.
//Funcion flecha para calcular el cubo de un número
const calcCubo = (number) => {
    return number ** 3  // los ** significan exponencial
}
let resultCubo = calcCubo(3);
console.log(resultCubo);

//Funciones anónimas. Son un tipo de funciones que se declaran si nnombre de función y se alojan en el interior de una variable. se hace referencia a ellas cada vez que la utilicemos.
//Las funciones anónimas no permiten el hoisting (no se puede invocar antes de inicializarlas)
const mensaje = function(){
    return 'Este es un mensaje desde una funcion anonima';
}

console.log(mensaje());

//Callbacks. Es pasar una funcion B por parámetro a una función A, de modo que la funcion A pueda ejecutar esa funcion de fomra genérica desde su código.
const funcionB = function() {
    console.log('ejecutando funcionB');
}
funcionB();
//funcionA que mandará a llamar a la funcionB
const funcionA = function (callback) {
    callback();
}
funcionA(funcionB);
//async-await


