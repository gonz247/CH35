/*
Manipulacon del DOM.
- Leer y traer nodos del arbol del DOM.
    document.getElementById (trae elemenots por ID)
    document.getElementsByClassName (trae elemento por Clase)
    document.getElementsByTagName (trae elemento por Etiquetas)
*/

//getElementById
const titulo = document.getElementById("title1");
console.log(titulo);
console.log(titulo.innerText); //innerText trae el texto que vive dentro del elemento

//getElementsByClassName
const titulos = document.getElementsByClassName("title");
console.log(titulos);
console.log(titulos.length); //devuelve la longitud del array (elementos de la clase)
console.log(typeof titulos); //muestra que es un tipo objeto, ya que es una collecion de arrays. 

//getElementsByTag
const tituloH3 = document.getElementsByTagName("h3");
console.log(tituloH3);
console.log(tituloH3[0].innerText);

/* Metodos para llamar elementos mediante slectores de CSS
Se usa para procesos mas especificos y la sintaxis querySelector
    - document.querySelector("selector"); //#, ., <>
    - document.querySelectorAll(). Seleccionar cualquier elemento que se especifiquen.
*/

//querySelector
const query = document.querySelector("#title4");
console.log(query.innerText);

//querySelector
const queryClass = document.querySelector(".title"); //esta funcion solo devuelve el primer elemento de la clase indicada.
console.log(queryClass);

//querySelectorAll
const queryClassAll = document.querySelectorAll(".title");
console.log(queryClassAll);

//Manipular elementos del DOM (styles) con JS
titulo.style.textAlign = "center";
titulo.style.color = "#5058F2";

//Manipular el texto de un elemento
const titulo2 = document.querySelector("#title2");
titulo2.innerText = 'Sesion de manipulacion del DOM. CH35'
titulo2.style.color = "#F23D3D";

/*Metodos para crear y agregar elementos en el DOM. Este proceso se divide en dos: "crear el nodo y agregar el nodo"
    -Crear nodos:
        * document.createElement("element") --> crea el elemento a partir de etiquetas
        * document.createTextNode("text") --> crea texto dentro de las etiquetas. 
*/

const nodo1 = document.createElement("h4");
const imgNodo= document.createElement("img");

/*
    - Agregar nodos: mandamos a llamar al elemento padre y le pasamos la propiedad con la constante que guara al nodo creado. 
        * parentElement.appendChild(const);
        * parentElement.append(const)
        * parentElement.insertBefore(const);
        * parentElement.insertAdjacentElement(const);
    utilizaremos mayormente appendChild
*/

const parentElement = document.getElementById("dif");
//Agregar texto al nodo1
const textNodo1 = document.createTextNode('Imagen agreagada desde el DOM');
//insertar texto en el nodo1
nodo1.appendChild(textNodo1);
//Insertar nodos en el elemento padre
parentElement.appendChild(nodo1);
parentElement.style.fontFamily = "'Karla', sans-serif";
parentElement.style.color = "#A62F03";


/* Agregando Imagen*/
//Inserto el imgNodo en el elemento padre para definirlo posteriormente
parentElement.appendChild(imgNodo);
//Accedo a las propiedades en la imagen
imgNodo.src="../src/assets/octocat.jpg";
imgNodo.alt = 'Octocat-gitHub';
imgNodo.width = "300";

/*otra forma de leer y modificar nodos
 document.outerHTML (leer) y 
 node.innerHTML (escribir sobre el nodo)
*/
const elementOuter= titulo2.outerHTML;
console.log(elementOuter);
// titulo2