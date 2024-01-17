//Programacion sincronica
function two() {
    console.log("dos");
};

function one() {
    console.log("uno");
    two();
    console.log("tres");
}

one();

//Programacion asincrona. 
//setTimeout recib euna funcion anonima y establece un tiempo de ejecucion para cumplir
//con la condicion de asincronismo (en milisegundo - 1000ms = 1s)

/*const twoAsync = () => {
    setTimeout(() => {
        console.log("dos Async");
    }, 5000);
}

const oneAsync = () => {
    setTimeout(function () {
        console.log("uno Async");
    }, 2000)
    twoAsync();
    console.log("tres Async");
}

oneAsync();*/


const url = "https://jsonplaceholder.typicode.com/users"

fetch(url)
    //si se cumple la promesa, vamos a traer los datos de la API y se convertiran en tipo json para poder mostrarlos en consola
    .then(data => data.json())
    .then(data => {
        console.log(data); //mostrando en consola todos los usuario de la API
        console.log(data[0].name); //mostrando en consola el usuario con el indice 0 y trayendo solamente su nombre
    })
    .catch(error => console.error("ups, algo salio mal", error)); //mensaje de error





//usando fetch para mostrar en navegador
const botonInfo = document.querySelector("#btn-mensaje");
const info = document.querySelector("#mensaje");
//variable para guardar la informacion que se va a traer desde la API: Debe ser de tipo null
let post = null

//Consumiendo API con fetch (promesas)
botonInfo.addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/users/6")
        .then(response => response.json())
        .then(response => {
            post = response;//guardo los datos de response en la variable de tipo null, para que modifique el dato})
            //mandamos a llamar la variable desde la funcion
            mostrarDatos(post);
        })
        .catch(error => console.error("problemas", error))
});

//funcion que me permita manipular la variable de tipo null
//quiero traer name, usarname, email, phone del user de la API
const mostrarDatos = (post) => {
    //creando nodos (elementos) mediante DOM manipulation
    const name = document.createElement("h2");
    const userName = document.createElement("h3");
    const email = document.createElement("p");
    const phone = document.createElement("p");

    //Ponerlos en el HTML (innerHTML)
    name.innerHTML = post.name;
    userName.innerHTML = post.username;
    email.innerHTML = post.email;
    phone.innerHTML = post.phone;

    //Hacer que aparezcan en el navegador
    info.appendChild(name);
    info.appendChild(userName);
    info.appendChild(email);
    info.appendChild(phone);
}

//Usando fetch para mostrar en navegador (MOSTAR PRODUCTOS)
const botonProductos = document.querySelector("#btn-store");
const tienda = document.querySelector("#store");
let productos = null

botonProductos.addEventListener("click", () => {
    fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(response => {
            productos = response
            //Funcion 
            mostrarProductos(productos);
        })
        .catch(error => console.error("cuidado", error))

})

console.log(productos);
//Funcion para crear, agregar y mostrar elementos desde el DOM
const mostrarProductos = (productos) => {
    productos.map((productos) => {
        //El método map toma el array (objeto en JS) y crea nuevos arreglos que se pueden manipular de manera individual. Así, evitamos el uso de un ciclo forEach https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map
        //mando a llamar las llaves de title, price, description, category, image desde la API 
        const imagen = document.createElement("img");
        const titulo = document.createElement("h2");
        const precio = document.createElement("h2");
        const descripcion = document.createElement("h2");
        const categoria = document.createElement("h2");
        const separador = document.createElement("hr");

        //enviar a HTML con innerHTML
        imagen.src = productos.image
        imagen.width = 200;
        titulo.innerHTML = productos.title
        precio.innerHTML = productos.price
        descripcion.innerHTML = productos.description
        categoria.innerHTML = productos.category

        tienda.appendChild(imagen);
        tienda.appendChild(titulo);
        tienda.appendChild(precio);
        tienda.appendChild(descripcion);
        tienda.appendChild(categoria);
        tienda.appendChild(separador);
    })
}
// Método POST utilizando fetch. Me permite crear recursos en la API. 
fetch("https://jsonplaceholder.typicode.com/posts", {
    //indicar que es un metodo de tipo POST
    method: "POST",
    //Creo el body de mi nuevo objeto, sieguiendo las mismas llaves de la API existente (userId, title, body)
    body: JSON.stringify({
        userId: 1986,
        title: "Sueñan los androides con ovejas electricas?",
        body: "Author: Phillipe K. Dick"
    }),
    //Definir headers
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})//Fin del fetch
//inicio de promesas
    .then(response => response.json())
    .then(response => {
        console.log(response)
    })

/* >> programacion asincrona (promise) << */
//Funcion flecha de tipo async-await
//indico que es una funcion asincrona con la palabra reservada async antes de los parametros
const getUser = async () => {
    //Para que se cumpla la promesa no utilizamos then, usamos try. para errores se sigue utilizando catch.
    try{
        //Retardo para que se ejecute de manera asincrona. Tengo que crear una nueva promesa, que recibe un setTimeout
        await new Promise(resolve => setTimeout(resolve, 3000));
        const response = await fetch("https://jsonplaceholder.typicode.com/users/4")
        const data = await response.json();
        console.log(data);
    } catch (error){
        console.error("Error inexplicable", error);
    }
}


//invocar funcion, porfavor, no olvidar xd
getUser();

// >> LocalStorage <<
//Nos permite crear, modificar, eliminar, guardar objetos de JavaScript de manera local (en el equipo)
//Crear un objeto de JS con sus llaves y valores
const user = [
    {
        id: 2,
        name: "diana",
        apellido: "alv",
        email:"dianAlv@gmail.com",
        posicion: "esudiante",
        empresa: "cofepris"
    }
    ,{
    id: 1,
    name: "gonz",
    apellido: "piña",
    email:"pina@gmail.com",
    posicion: "esudiante",
    empresa: "tcs"
}]

//Convertir el objeto creado a notacion JSON y almacenarlo en el localStorage
localStorage.setItem("usuario", JSON.stringify(user));

//Traer el objeto desde el localStorage
const users = JSON.parse(localStorage.getItem("usuario"));
console.log(users);
console.log(users[1].posicion)

//sessionStorage
sessionStorage.setItem("sesionUsuario", JSON.stringify(user));
const sesionUs = JSON.parse(sessionStorage.getItem("sesionUsuario"));
console.log(`usuario de session ${sesionUs[1].name}`);