const boton = document.getElementById("btn");
const botonReset = document.getElementById("reset");
const colorFondo = document.body.style.backgroundColor;

//Vamos a declarar una funcion que genere un numero random tomando un parametro number
const random = (number) => {
    return Math.floor(Math.random()*(number+1)); //¿como aplicar funciones matematicas en JS? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
};

//Crear eventos de click para que al presionar un botón pase algo
boton.addEventListener("click", () => {
    const randomColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.background = randomColor;
});


// -- Boton de reset
botonReset.addEventListener("click", () => {
    document.body.style.background = colorFondo;
});