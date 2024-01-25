package controlFlujo;

import java.io.InputStream;
import java.util.Scanner;

public class FlujoControl { //debe coincidir la clase con el nombre del documento/proyecto

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//Recuerda que para que algo se ejecute, siiempre debe de ir en el metodo principal
		
		
		//Primero defino una variable del tipo String donde se almacena un dato
		 // Dejo en null y despues agrego fecha 
		// Variable declarada e inicializada, en null a proposito, para tener un "espacio" de memoria ya asignado, y solo reemplazarlo con un nuevo dato
		
		//Para validar si podemos viajar en cierta fecha
		
		
		/*
		String viaje = "16-01-2024";
		
		if (viaje != null) { //variable vacia
			System.out.println("Ya no tenemos fechas disponibles, una disculpa.");
			
		} else {
			System.out.println("Puede reservar su viaje");
		}
		*/
		
/////////Validacion de contraseña
		/*
				Scanner scanner = new Scanner(System.in);//System In mete informacion de fuera a la funcion

		        // Solicitar la primera contraseña
		        System.out.print("Ingrese la contraseña: ");
		        String contraseña1 = scanner.nextLine();

		        // Solicitar la segunda contraseña
		        System.out.print("Ingrese la contraseña nuevamente: ");
		        String contraseña2 = scanner.nextLine();

		        // Verificar si las contraseñas coinciden
		        if (contraseña1.equals(contraseña2)) {
		            System.out.println("Las contraseñas coinciden. Acceso permitido.");
		        } else {
		            System.out.println("Las contraseñas no coinciden. Acceso denegado.");
		        }

		        // Cerrar el scanner
		         
		         scanner.close();

*/
		
		//switch: para seleccionar comida dela dulceria del cine
		
		//seleccion de opciones, variable que almacena dicha opcion
		
		Scanner scanner = new Scanner(System.in);

        System.out.println("Bienvenido a la dulcería, ¿qué desea ordenar?");
        System.out.println("1. Palomitas");
        System.out.println("2. Refresco");
        System.out.println("3. Nachos");
        System.out.println("4. HotDog");
        System.out.println("5. Pagar");
        System.out.print("Seleccione una opción del menú (1-5): ");

        int menu = scanner.nextInt(); // Leemos la opción ingresada por el usuario

        switch (menu) {
            case 1:
                System.out.println("Elegiste palomitas para tu combo");
                break;
            case 2:
                System.out.println("Elegiste refresco para tu combo");
                break;
            case 3:
                System.out.println("Elegiste nachos para tu combo");
                break;
            case 4:
                System.out.println("Elegiste HotDog para tu combo");
                break;
            case 5:
                System.out.println("Usted ha seleccionado pagar su combo");
                break;
            default:
                System.out.println("Opción inválida. Por favor, seleccione una opción válida del menú (1-5).");
                break;
        }

        // Cerrar el scanner para liberar recursos
        scanner.close();


		
		
		
	}//main

}//class
