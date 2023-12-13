console.log('Hola CH35');
/*- Tomar decisiones basadas en condiciones especificas, esto produce un codigo
 * tanto dinamico como adaptable
 * 
 * - Repetir acciones (estructuras de bucle) para iterar operaciones o procesar datos
 * de una forma eficiente sin caer en la redaccion de codigo innecesario y repetitivo
 * 
 * - Facilitar el control de flujo de una operacion, brindandonos la oportunidad de ser
 * especificos en indicar qe instrucciones ejecutar y en que orden
 * 
 * - Optimizan el rendimiento de nuestro codigo, ya que evita oportunamente ejecutar instrucciones
 * en caso de que no se necesite
 * 
 * - Facilitar tanto la escritura de codigo como la claridad de este
 * 
 * Las estructuras de control que vamos a ver durante las sesiones de JS son las siguientes
 * 
 *      - Estructura if-else
 *      - Estructura switch
 *      - Estructuras de bucles (for, do, do while)
 * 
 * Para esta sesion, nos centraremos solo en las primeras 2 señaladas en la lista*/

/* Declaracion de sentencia if-else
-Palabra resevada if para comenzar la declaracion, se coloca un parentesis () donde se debe colocar una expresion logica (true | false), se abre y cierran llaves{} para indicar lo que la sentencia va a ejecutar si la condicion se cumple.
-despues de la llave {} declarada por el bloque de ejecucion if, colocamos la palabra reservada else, para este ejemplo no es necesario colocar mas expresiones dentro de un ()
-simplemente colocamos otras llaves {} para indicar el bloque de codigo que tiene que ser ejecutado en caso de que la condicion no se cumpla (false).*/
let n = 15;
if (n > 10) {
    console.log(true);
}
else {
    console.log(false)
};

/*if-else-if
 * 
 * Se trata de la misma sentencia if-else declarada anteriormente
 * Lo que vamos a hacer diferente es, en este caso, anidar varias veces
 * esta misma sentencia, lo que nos permitira tomar decisiones
 * mas complejas
 * 
 * Usaremos la contatenación.
 * Concatenar es una elegante palabra de la programación que significa: "unir". Para unir cadenas en JavaScript el símbolo de más (+), el mismo operador que usamos para sumar números, pero en este contexto hace algo diferente.
 * 
 * Hay que tener cuidado y no realizar demasiadas anidaciones, ya que va a resultar
 * en codigo poco legible y confuso*/
//if anidados
let edad = 28;

if (edad < 18) {
    console.log('eres menor de edad');
} 
else if (edad >= 18 && edad <65){
    console.log('eres un adulto joven');
}
else{
    console.log('eres un adulto mayor');
};

/*Sentencia switch
es oro tipo de estrucura de control de flujo, que se encuentra en diversos lenguajes de programacion. 
Es parecida a la sentencia if-else, pero diferente en cuanto a comportamiento, ya que no se basa en una bifurcacion, si no que se secciona en multiples casos (case) que dependiendo de la expresion que cumpla con un caso especifico, sera la secuencia que se va a ejecutar dentro de la declaración.

Declaracion: 
se empieza por colocar la palabra reservada switch, seguido de esto, colocamos () donde se debe colocar el valor que va indicar que sentencia/caso a ejecutar.
-Falta indicar el bloque de codigo que se limita a esta sentencia, como lo haciamos en la setencia if o con las funciones.
-Dentro de este bloque de codigo, falta colocar los casos para cada valor que se desee, estrablecer segun sea el valor indicado dentro de el parentesis ().
-Cada uno de estos casos se separa de la siguiente manera:
>>> case valor : intrucciones a ejecutar >>> si el valor empata con este caso. 
-Despues, para indicar que la ejecucion de las sentencias debe cortarse cuando se cumpla, se coloca lainstruccion.
Break
-Cuando terminamos de estrablecer los casos que necesitamos declarar, dentro de nuestra sentneica, debemos colocar un valor por defecto, default.
-Esta ultima sentencia nos permite establecer un valor por defecto, si es que este valor colocado no empara con  ningun otro dentro de la sentencia o en ninguno de los casos.
- default : mensaje no disponbile.
*/

let dia = 'domingo';
switch(dia){
    case 'lunes':
        console.log('Inicio de semana');
        break;
    case 'martes':
        console.log('animo es martes de 2x1 en dominos');
        break;
    case 'miercoles':
        console.log('toca presentar proyecto');
        break;
    case 'jueves':
        console.log ('juebebes casi viernes');
        break;
    case 'viernes':
        console.log('viernes de disfraces');
        break;
    case 'sabado':
        console.log('sabadrink y taquitos');
        break;
    case 'domingo':
        console.log('domingo de misa');
        break;
    default:
        console.log('dia desconocido');
        break;
}


/* Operador ternario
Expresion condicional if-else mas simple y legible
Principalmente se una para simplificar condiciones de una sola expresion. 
Tambien puede anidar sentencias if-else-if, sin embargo, no es recomendado porque el codigo se puede volver confuso y poco legible. 
Su declaracion es la siguiente:
Palabra reservada var, let o const:
Sele asigna un nombre como si se tratara de una varaibale, operador de asignacion '=', segiudo de este operador, hay que colocar una expresión logica, esta va dentro de un parentesis (), despues hay que colocar un caracter ? que indica el camino a seguir, dependiendo de si, se cumplo (o no) la expresion. 
para separar el resultado true de false debemos agregar un caracter de :, del lado izquierdo se coloca la sentencia a ejecutar.
Si se cumple la condicion, del lado derecho se coloca la sentencia a ejecutar.
*/

//ejemplo de operador ternario
let verificacion = n > 5 ? 'sí es mayor' : 'No es mayor'
console.log (verificacion);

/* 
Cuando usar if-else y cuando switch?
if- else: Cuando necesitemos tomar decisiones bajo condiciones más flexibles.
switch: cuando tengamos un conjunto fijo de valores para comparar una expresión 
*/





