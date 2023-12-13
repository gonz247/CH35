// Ejercicios para esta sesion
// Ejercicio 1
let edad = 28;

if (edad < 18) {
    console.log('eres menor de edad');
}
else{
    console.log('Puedes votar')
};

/*Ejercicio 2
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 7 y 8
 * 
 * Debe recibir como parametro un numero, cual sea
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso*/

let n = 224;
if(n%8 == 0 && n%7 == 0){
    console.log(true)
}
else{
    console.log(false)
};

/* Ejercicio 3
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 4 o 9
 * 
 * Debe recibir como parametro un numero aleatorio
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 */
if (n%4 == 0 || n%9 == 0){
    console.log(true)
}
else{
    console.log(false)
};

/* Ejercicio 4
 * 
 * Realizar un programa que reciba como parametro una categoria de peliculas
 * 
 * -accion
 * -drama
 * -comedia
 * -romance
 * -suspenso
 * -terror
 * 
 * Segun sea la categoria que se reciba, imprimir una recomendacion de pelicula
 * de acuerdo al parametro recibido
 */
let categoriaPelicula = 'terror';
switch(categoriaPelicula){
    case 'accion':
        console.log('Duro de matar');
        break;
    case 'drama':
        console.log('orgullo y prejuicio');
        break;
    case 'comedia':
        console.log('todo poderoso');
        break;
    case 'romance':
        console.log ('About time');
        break;
    case 'suspenso':
        console.log('seven');
        break;
    case 'terror':
        console.log('babadook');
        break;
    default:
        console.log('categoria desconocida');
        break;
}


/** Ejercicio 5
> Crear una interfaz de un cajero ATM
> Debe recibirse como parametro alguna de las siguientes opciones
    1. Retirar dinero
    2. Transferencia
    3. Deposito
    4. Pago de servicios
 > Segun sea la opcion indicada, imprimir en pantalla la accion a realizar
 Utilizar if/else
 */

 function cajeroATM() {
    opcion = parseInt(prompt(`Cajero automatico CH35:
    
    Elige un numero de acuerdo a la opcion deseada:
    1 - Retirar dinero
    2 - Transferencia
    3 - Deposito
    4 - Pago de servicios`));
    if (opcion == 1) {
        prompt('Ingresa la cantidad que deseas retirar:');
    } else if (opcion == 2) {
        prompt( 'Ingresa cantidad a transferir seguido de numero de cuenta destino (de la misma institucion bancaria)');
    } else if (opcion == 3) {
        prompt( "Ingresa cantidad a depositar seguido de numero de cuenta destino (cualquier institucion bancaria)");
    } else if (opcion == 4) {
        prompt(`Escoge el numero del servicio que deseas pagar:
        1 - Telcel
        2 - Telmex
        3 - CFE`);
    } else {
        return "Opcion incorrecta";
    }
}




/** Ejercicio 6
 > Escribir en codigo un programa conversor de divisas
 > Debe recibir como parametro una cantidad en pesos mexicanos y
 > Segun sea la opcion que se indique, realizar la conversion correspondiente
    1. A dolares estadounidenses
    2. A euros 
    3. A yenes japoneses
    4. A libra esterlina
    5. A franco suizo

 > Consideracion: estructura switch
 */

function convertirDivisas() {
    let pesos = parseFloat(prompt(`Convertidor de divisas CH35:

    Ingresa cantidad en pesos MXN`));
    let divisa = parseInt(prompt(`Convertidor de divisas CH35:
    
    Ingresa el numero relacionado con la divisa a convertir:
    1 - Dolar USD
    2 - Euros
    3 - Yen
    4 - Libra esterlina
    5 - Franco Suizo`));
    let conversion = 0
    switch (divisa) {
        case 1:
            conversion= pesos * 0.058;
            alert((`Tus ${pesos} MXN equivalen a ${conversion.toFixed(2)} USD`));
            break
        case 2:
            conversion = pesos * 0.054;
            alert((`Tus ${pesos} MXN equivalen a ${conversion.toFixed(2)} EUR`));
            break
        case 3:
            conversion = pesos * 8.4;
            alert((`Tus ${pesos} MXN equivalen a ${conversion.toFixed(2)} JPY`));
            break
        case 4:
            conversion = pesos * 0.046;
            alert((`Tus ${pesos} MXN equivalen a ${conversion.toFixed(2)} GBP`));
            break
        case 5:
            conversion = pesos * 0.051;
            alert((`Tus ${pesos} MXN equivalen a ${conversion.toFixed(2)} CHF`));
            break
        default:
            return "Opcion incorrecta";
    }
}

cajeroATM();
convertirDivisas();
