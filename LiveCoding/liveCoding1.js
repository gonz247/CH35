//Gonzalo Piña
/*
Me falto atencion al detalle ya que escribi mal length y mi funcion no estaba imprimiendo
Me falto comentar mas mi codigo para hacerlo mas legible

*/



//Construye una función que reciba por parámetros un string y un array de strings. La función debe retornar un arreglo de strings con los strings que sean de mayor longitud que el string recibido por parámetros.
let arrayPalabras = ["quesadilla", "galletas", "cafe", "Fruta"]
const palabra = "yogur"

const resultArray= [];

function imprimePalabras(word, wordArray){
    
    resultArray.push(word);
    console.log(word);
    wordArray.forEach(w =>{
        if(word.length < w.length){
            resultArray.push(w);
        }
    })

    console.log(resultArray.toString());
}

imprimePalabras(palabra, arrayPalabras);

const container = document.querySelector(".container");


const imprimirArray = (stringArray) =>{
    stringArray.forEach(string =>{
        const li = document.createElement("li");
        li.innerText = string;
        container.appendChild(li)
    })
}

imprimirArray(resultArray);






