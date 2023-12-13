/* 
*===== BUCLES =====
* Iteración. Proceso de repetir una secuencia de instrucciones o acciones en un programa. Es decir, ejecutar un bloque de código muchas veces, basado en una condición o una colección de elementos.

* -- Operadores de incremento (++) y operadores de decremento (--)
*${} se utiliza en el contexto de plantillas de cadena (template literals). Las plantillas de cadena son una forma más conveniente y legible de concatenar cadenas y expresiones en comparación con las cadenas tradicionales con el operador +.
* Los operadores ++ y -- son conocidos como operadores de incremento y decremento respectivamente. 
*- El operador ++ se utiliza para aumentar el valor de una variable en uno.
*- El operador -- se utiliza para disminuir el valor de una variable en uno.
* (i)  : comúnmente utilizada como variable en bucles, es simplemente una convención de nomenclatura y puede ser cualquier nombre válido de variable que elijas. La "i" a menudo se utiliza como abreviatura de "índice" en el contexto de bucles, especialmente en situaciones donde se está iterando sobre índices de arrays o en situaciones similares.
*/



//Crear un programa para saber cuantos boletos vendemos para una rifa

for (let boleto = 1; boleto <= 15; boleto++) {
    console.log(`Boleto # ${boleto}`)
}

//programa para vender bolos con una variable global
let bolos = 1;

for (bolos; bolos <=20; bolos++){
    console.log(`Vendi ${bolos}`);
}

const ch35= ['rodrigo', 'diego','ania','rey','arturo','eunice'];

for(let i = 0; i< ch35.length; i++){
    console.log(ch35[i]);
}

/* Variaciones del ciclo for
-- for--- of nos permite recorrer el objeto (array) y devuelve el valor
--for...in nos permite recorrer el objeto (array) y devuelve su posicion (indices)
*/

let frutas = ['manzana', 'naranja', 'peras', 'mandarinas','uvas'];
for(let fruta of frutas){
    console.log(fruta + ' es del grupo frutas');
}

//sumar numeros del 1 al 20

let suma = 0
for (let i = 1; i <=20; i++){
    suma += i;
}
console.log(suma);

//tabla del 5
const tabla = 5;
for (let i=1; i<=10; i++){
    let resultado = tabla *i;
console.log(`${tabla} x ${i} = ${resultado}`)
}

/* 
Ciclo while:
Recorre un bloque de codigo siempre que una condicion especifica sea verdadera.
Sirve para realizar una tarea repetitiva mientras una condicion sea TRUE.
*/

//ciclo que va disminuyendo hasta el 1 (--)
let productos = 5;
while (productos > 0){
    console.log(productos + ' productos vendidos');
    productos--;
}

//imprimir numeros
let num1=0;
while(num1 <10){
    num1++
    console.log(`el numero es ${num1}`);
}

// mas informacion sobre los ciclos: https://dcodingames.com/el-ciclo-while/