
/* paradigmas de programacion

programacion imperativa: se basa en instrucciones detalladas ejecutando un flujo o una secuencia determinada
Programacion basada en eventos: se basa en la gestion y respuesta de eventos
Programacion declarativa: explicar lo que queremos obtener
Programacion orientada a objetos: Toma cierta informacion o estructura del mundo real (objetos) para poder explicar ciertas cosas
sus caracteristicas (propiedades o atributos) y sus comportamientos o acciones (metodos).

Clases: planitllas para crear objetos. Nos ayudan a definir un tipo de objeto y crear instancias de este tipo de objeto. 
*/

//Clases: Plantillas para crear objetos. Nos ayudan a definir un tipo de onjeto y crear instancias de este tipo de objeto.

class persona {

    nombre = "";
    apellido = "";
    edad = 0;
    email = "";
    telefono = "";

    //objetos
    //El constructor es una funcion especial, cuya finalidad es la de construir o instanciar objetos
    //para inicializar un objeto es necesario definir un constructor que tomara a los atributos 
    // clases= molde Objeto = gomita constructor= chefsitx atributos= ingredientes metodos=comportamientos 

    constructor(nombre, apellido, edad, email, telefono) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email = email;
        this.telefono = telefono;
    }

    comer() {
        console.log(this.nombre + " bon apetit");
    }//metodo comer

    bailar() {
        console.log(this.nombre + " dale hasta el suelo");
    }//metodo bailar 

    mostrarInfo() {
        console.log("Nombre: " + this.nombre);
        console.log("Apellido: " + this.apellido);
        console.log("Edad: " + this.edad);
        console.log("Email: " + this.email);
        console.log("Telefono: " + this.telefono);
    }
}

let usuario1 = new persona("gonzalo", "piña", 28, "pina@gmail", "991073107");
let usuario2 = new persona("aldo", "beltran", 25, "aldo@gmail", "5543244");
let usuario3 = new persona("paulina", "bernal", 25, "pau@gmail.com", "991829389")
let usuario4 = new persona("diana", "laura", 27, "diani@gmail.com", "554342")

usuario1.mostrarInfo();
console.log(usuario2);
console.log(usuario4.email);
usuario3.bailar();
usuario4.comer();

//*4 pilares de la programacion orientada a objetos

//*Herencia
//*Polimorfismo
//*Encapsulamiento
//*Abstraccion

//*=====Herencia nos permite heredar a clases inferiores para poder optimizar el programa, se declaran en orden de arriba a abajo, padre,hijo,etc
class arrendador extends persona {//subclase

    capacidad = 0;
    costo = 0;
    nombreLugar = "";

    constructor(nombre, apellido, edad, email, telefono, capacidad, costo, nombreLugar) {
        super(nombre, apellido, edad, email, telefono);
        this.capacidad = capacidad;
        this.costo = costo;
        this.nombreLugar = nombreLugar;
    }

    mostrarInfo() {
        console.log("capacidad", this.capacidad);
        console.log("Costo", this.costo);
        console.log("Nombre del lugar", this.nombreLugar);
    }
}

//otro ejemplo
class Animal {
    sonido() {
        console.log('Hace un sonido genérico');
    }
}

class Perro extends Animal {
    sonido() {
        console.log('Guau guau');
    }
}

class Gato extends Animal {
    sonido() {
        console.log('Miau');
    }
}

const perro = new Perro();
const gato = new Gato();

perro.sonido();
gato.sonido();
// class arrendadorGuadalajara extends arrendador{

// }

//instanciar
let arrendador1 = new arrendador("rocio", "hdz", 29, "rocio@gmail", "99999", 300, 10000, "la casita")

arrendador1.mostrarInfo();
console.log(arrendador1);



/*Polimorfismo
permite que objetos de diferentes clases respondan a la misma clase o metodo.
//tener objetos de diferentes tipos que pueden ser manipulados en comun. 
*/

class producto {
    nombre = "";
    precio = 0;
    marca = "";

    constructor(nombre, precio, marca) {
        this.nombre = nombre;
        this.precio = precio;
        this.marca = marca;
    }

    mostrarDescripcion() {
        console.log(`${this.nombre} marca ${this.marca} tiene un precio de ${this.precio} pesos`);
    }
}

let producto1 = new producto("cartera", 500, "levis");

producto1.mostrarDescripcion();

//*==========Encapsulamiento: Ocultar la implementacion de un objeto y solo mostrar los datos necesarios

class usuario {
    #contraseña;

    constructor(userName, correo, contraseña) {
        this.userName = userName
        this.correo = correo;
        this.contraseña = contraseña;
    }

    verificarContraseña(contraseña) {
        return this.#contraseña === contraseña;
    }
}


//*=======Abstraccion no es nada mas que traer objetos del mundo real y poder aplicarlos a la programacion mediante clases, metodos, constructores y objetos.
//*Los objetos de tipo Json es un formato de intercambio de datos ligero, accesible, estructurado, manipulable (DOM) y que nos brindan una mejor comunicacion entre el cliente y el servidor. Esto gracias a que son mas flexibles y generalmente se ejecutan con fetch

let objetoJson = {
    "nombre": "juanin",
    "apellido": "juan Harry",
    "edad": 31,
}

console.log(objetoJson);

let objetoLiteral = {
    nombre: "juanin",
    apellido: "juan Harry",
    edad: 31,
    email: "juanin@gmail.com",
    telefono: "999999"
}

console.log(objetoLiteral);

/*Principios solid
1. Principio de responsabilidad unica (single responsability):
Una clase debe tener asignada una tarea o responsabiliidad especifica y esta no deberia de cambiar

2. Principio abierto/cerrado (Open/Close Principle - OCP):
Una clase puede estar abierta a extensiones y agregar nuevas funcionalidades, pero sin generar cambios en la misma

3. Principio de sustitucion de Liskov (Liskov Sustitution Principle LSP)

4. Principio de segregacion de interfaces (Interface Segregation Principle ISP)
Delimitar los metodos que necesito y dejar fuera los innecearios

5. Principio de inversion de dependencias (Dependency Inversion Principle DIP)

*/

/*Programa que conste de una clase llamada alumno que tenga como atributos nombre y calificacion. 
    - Definir los metodos para inicializar sus atributos, imprimirlos y mostrar un mensaje con el resultado de si la calificacion es aprobatoria o no

    Atributos
    nombre
    calificacion

    Metodos
    imprimirCalificacion
    evaluacion

    calificacion aprobatoria es 6

    usar condicional IF para evaluar la calificacion. */


class alumno{
    nombre = "";
    calificacion = 0;
    aprobado = false;

    constructor(nombre, calificacion){
        this.nombre = nombre;
        this.calificacion = calificacion
    }

metodoEvaluar(){
    const calificacionApobatoria = 6
    if (this.calificacion >= calificacionApobatoria){
        this.aprobado = true
    } else this.aprobado = false
}
imprimirResultados(){
    this.metodoEvaluar();
    if (this.aprobado == true){
        console.log(`Felicidades ${this.nombre} aprobaste con calificacion de ${this.calificacion}`);
    }else console.log(`Lo siento ${this.nombre} reporbaste con calificacion de ${this.calificacion}`);
}
}

let alumno1 = new alumno("gonzalo", 7);

alumno1.metodoEvaluar();
console.log(alumno1.aprobado)

alumno1.imprimirResultados();