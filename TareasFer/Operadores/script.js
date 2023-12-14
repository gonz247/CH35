/* Operador
es un signo que especifica que debe efectuar una determinada operacion
*/

/*Operadores aritmeticos (+,-,*,/,%,++,--)
Operadores de asignacion (0)
Operadores logicos ( &&,||, !)
Operadores de comparacion (==, ===, !=, !==, <,>,>=,<=)
Operadores de cadena (toLowerCase, toUpperCase, trim, toString, concat, +)

Operadores artimeticos
+: sumar
-: restar
*: multiplicar
/: division
%: nos devuelve el residuo de una division.
*/

numero1= 10
numero2=8
suma = numero1 + numero2;
resta = numero1 - numero2;
multiplicacion = numero1*numero2;
division = numero1/numero2;
residuo= numero1%numero2;
incremento= numero1;
incremento ++;
decremento = numero2;
decremento --;

console.log(suma,resta,multiplicacion,division,residuo,incremento,decremento);

let precioReal = 1000;
let porcentajeDescuento = 20;

let descuento = (precioReal*porcentajeDescuento/100)
let nuevoPrecio = (precioReal-descuento)

console.log(precioReal,porcentajeDescuento,descuento,nuevoPrecio);


// (==): igualdad compara si nuestros valroes son iguales
let numero3 = 10;
let texto ='10';

console.log(numero3 == texto);

/*(===): Igualdad estricta, compara si los valores so niguales y el tipo de dato*/

let numero4 = 10;
let texto1 ='10';

console.log(numero4 === texto1);

/*(!=) Desigualdad o destino. Este verifica si dos valores no son iguales y de ser necesario realiza la conversión*/

let precioCaja = 1499;
let precioMax = 1500;

if (precioCaja != precioMax) {
    console.log("El precio del producto no es igual al precio máximo");
} else {
    console.log("El precio del producto es igual al precio máximo permitido");
}

let número5 = 10;
let número6 = "10";

if (número5 != Number(número6)) {
    console.log("Son diferentes");
} else {
    console.log("Los valores son iguales");
}

/* (!==) Desigualdad Estricta. Verifica si dos valores no son iguales, pero a diferencia de (!=) en este caso ambos valores deben tener el mmismo tipo y valor*/

let número7 = 41;
let número8 = "50";

if (número7 !== número8) {
    console.log("Los valores son diferentes");
} else {
    console.log("Los valores son iguales");
}


//ejercicio 1 un programas que solicite al usuario dos números y en consola nos va a decir si esos números son iguales o ay alguno que sea mayor que otro
// function comparaNum(x , y){
//     x = parseInt(prompt('ingresa un numero'));
//     y = parseInt(prompt('ingresa otro numero'));
//     if(x>y){
//         console.log(`${x} es mayor a ${y}`);
//     }else if(x<y){
//         console.log(`${x} es menor a ${y}`)    
//     }else console.log(`${x} y ${y} son iguales`)
// }
//  comparaNum();

 //ejercicio 2 un programa que pida al usuarios dos palabras y determine si son iguales o no
//  function comparaStrings(){
//     texto = prompt('Ingresa texto');
//     texto2= prompt('ingresa texto una vez mas')
//     if (texto === texto2){
//         console.log('los textos son iguales');
//     }
//     else console.log('los textos son distintos');
//  }

//  comparaStrings();


 //operadores logicos
 //(&&) operador AND se utilizan cuando las dos condiciones deber cumplirse

 let mayoriaDeEdad = 18;
 let tieneIdentificacion = true;
 let edad = 29

 if(mayoriaDeEdad >= edad && tieneIdentificacion){
    console.log('Puedes rentar el salón');
 } else{
    console.log('No lo puede rentar');
 }

 // (||) operador OR 

 let esUsuarioPrime = false;
 let registrado = true;

 if(esUsuarioPrime || registrado){
    console.log('califica para descuento');
 }else { 
    console.log('no califica para descuento');
 }

 // (!) orperador NOT se utilza para negar el valor de una condicion

 let esDiaLibre = false;

 if(!esDiaLibre){
    console.log('a chambear mijo')
 }else{
    console.log('Descansito');
 }

 //Operadores de cadena
 //toLowerCase hace el cambio de nuestro string a minusculas

 let mensajeUsuario = 'Bienvenidx a la tierra';
 let cambioMinusculas = mensajeUsuario.toLowerCase();
 console.log(cambioMinusculas);


//toUpperCase hace el cambio de nuestro string a mayusculas

let cambioMayusculas = mensajeUsuario.toUpperCase();
console.log(cambioMayusculas);

//trim quita los espacios

let aviso = '           ch35          ';
let avisoSinEspacios = aviso.trim();
console.log(avisoSinEspacios);

//toString convierte ciertos tipos de dato en string

let numero10 = 31;
let cadenas = numero10.toString();

console.log(cadenas);

//concat

let nombre = 'fernanda' 
let apellido = 'ramos'
let nombreCompleto = nombre.concat(' ', apellido);
console.log(nombreCompleto);


/* Expresiones

Expresion aritmetica
let operacion = 14 + 25 * 12; combina la suma con la multiplicacion

expresion de cadena
let notificacion = 'casi ' + 'año nuevo'; expresion cancatenando

expresion logica
let esMayrDeEdad = (23 > 18) && (23 < 65);

expresiones de asignacion
let frasco = chocolate; asigna el valor
*/


let tieneHarina = true;
let tieneHuevos = true;
let tieneMantequilla = true;
let tieneNutella = true;
let tieneLeche = true;
let siHay = false;

if (tieneHarina && tieneHuevos && tieneMantequilla && tieneNutella && tieneLeche) {
  alert("¡Puedes hacer Hotcakes!");
  siHay = true;
  // Puedes agregar más condiciones o lógica aquí según sea necesario
} else {
  alert("No puedes hacer Hotcakes. Necesitas todos los ingredientes.");
}


if (siHay == true) {
    alert("¡Genial! Tienes todos los ingredientes para hacer hotcakes.");
    alert("Comienza mezclando la harina, los huevos y la leche, luego añade la mantequilla derretida.");
    alert("Calienta un sartén y vierte un poco de la mezcla para hacer los hotcakes.");
    alert("Hotcakes listos, ¡a disfrutar!");
  } else {
        alert("Tssss, t faltan ingredientes para hacer hotcakes.");
        alert("No es posible hacer hotcakes sin todos los ingredientes.");
        alert("Ve a conseguirlos, CORREEEE");
  }