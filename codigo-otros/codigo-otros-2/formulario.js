var formulario = document.querySelector(".form")

formulario.onsubmit = function (e) {

  e.preventDefault();//se corrigio la funcion

    //se renombraron las variables para ser mejorar la legibilidad
  var nameInput = formulario.elements[0] 
  var ageInput = formulario.elements[1]
  var nationalitySelect = formulario.elements[2]

  var nombre = nameInput.value
  var edad = ageInput.value

  var i = nationalitySelect.selectedIndex
  var nacionalidad = nationalitySelect.options[i].value
  console.log(nombre, edad)
  console.log(nacionalidad)

  if (nombre.length === 0) {
    nameInput.classList.add("error")
  }
  if (edad < 18 || edad > 120) {
    ageInput.classList.add("error")
  }

  if (nombre.length > 0 && (edad > 18 && edad < 120)) {
    agregarInvitado(nombre, edad, nacionalidad)
  }
}

//las variables se buscan y se modifica el DOM dentro de la funcion agregarInvitado()
function agregarInvitado(nombre, edad, nacionalidad) {
  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  } else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  } else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  } else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

  var lista = document.getElementById("lista-de-invitados")

  var elementoLista = document.createElement("div")
  elementoLista.classList.add("elemento-lista")
  lista.appendChild(elementoLista)

  crearElemento(elementoLista, "Nombre", nombre) //se pasan los valores acordes con la funcion modificada
  crearElemento(elementoLista, "Edad", edad)
  crearElemento(elementoLista, "Nacionalidad", nacionalidad)

  var botonBorrar = document.createElement("button")
  botonBorrar.textContent = "Eliminar invitado"
  botonBorrar.id = "boton-borrar"
  var corteLinea = document.createElement("br")
  elementoLista.appendChild(corteLinea)
  elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function () {
    botonBorrar.parentNode.remove(); //se corrigio la funcion para eliminar al elemento padre y asi eliminar al invitado
  }
}

//la funcion crearElemento se encontraba dentro de agregarInvitado
//se simplifico la funcion 
function crearElemento(elementoLista, descripcion, valor) { //se modifico la funcion para recibir al elemento de la lista donde se insertara la informacion
  var spanNombre = document.createElement("span")
  var inputNombre = document.createElement("input")
  var espacio = document.createElement("br")
  spanNombre.textContent = descripcion + ": "
  inputNombre.value = valor
  elementoLista.appendChild(spanNombre)
  elementoLista.appendChild(inputNombre)
  elementoLista.appendChild(espacio)
}