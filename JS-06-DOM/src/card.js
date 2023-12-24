/*
para manipular la informacion de un usuario, necesito crear un perfil
mediante un objeto de JS.
*/
const user = {
    username: 'gonz247',
    age: 28,
    email: 'pinamendozag@gmail.com',
    favfilms: ['Vije de chihiro', 'Shrek', 'Harry Potter','Mean Girls','Lord of the rings']
}

//crear una funcion que me permita ingrear el objeto del perfil en el nodo padre
const createUser = (user) => {
    document.getElementById("username").textContent = user.username;
    document.getElementById("userAge").textContent = user.age;
    document.getElementById("email").textContent = user.email;
/*Mostrando elementos de lista en forma de lista.
para mostrar el array en forma de lista utilizamos un ciclo forEach, para recorrer todo el array y traer cada elemento a la lista */
const ul = document.getElementById("fav-films");
user.favfilms.forEach(film => {
    const li = document.createElement("li");
    li.textContent = film;
    ul.appendChild (li);
});

//modifiacando estilos de la ul para quitar viñetas
ul.style.listStyleType = "none";
ul.style.padding = "0";
ul.style.color = "#D9B70D";
}

//invocando la funcion
createUser(user);

/* Eventos para actualizar el usarname mediante el input y el boton*/
const inputName = document.getElementById("name");
const userName = document.getElementById("username");
const inputAge = document.getElementById("age");
const userAge = document.getElementById("userAge");

const profileBtn = document.getElementById("btn-main");

profileBtn.addEventListener("click", () => {
    userName.textContent = inputName.value;
    userAge.textContent = inputAge.value;
})

