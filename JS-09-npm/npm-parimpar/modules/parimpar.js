//Creadno funcion para determinar si un numero es par o impar


export default function determinarpParImpar(numero){
    (numero % 2 === 0) ? console.log(`El numero ${numero} es par`) : console.log(`El numero ${numero} es impar`);
}