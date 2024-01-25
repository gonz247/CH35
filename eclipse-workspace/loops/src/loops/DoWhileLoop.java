package loops;

import java.util.Scanner;

public class DoWhileLoop {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		/*
		 * Ciclo do while ejecuta la expresion en la parte interior del ciclo.
		 * Por tanto lo tanto las delcaraciones dentro del bloque "do" siempre se ejecutan minimo 1 vez
		 */
		int cuenta = 1;
		do {
			System.out.println("El nuemro es" + cuenta);
			cuenta ++;
			
			
		}while (cuenta < 5); 
		
		/*
		 * Crear un programa para un cajero bancario
		 * - El programa me mostrará 4 opciones:
		 * 1. Consultar saldo
		 * 2. Ingresar dineros
		 * 3. Retirar dineros
		 * 4. Salir
		 * - Mostrar mensaje de bienvenida al usuario, darle contexto y solicitar que elija una opción (número)
		 * - Mostrar al usuario la opción que eligió y permitir que elija otra opción
		 * - El usuario puede salir del programa escribiendo 4 (salir)
		 */
		
		System.out.println("banco generation hola, eliga una opcion");
		
		System.out.println("1. consultar saldo");
		System.out.println("2. ingresar dinero");
		System.out.println("3. retirar dinero");
		System.out.println("4. Salir");
		
		Scanner scr = new Scanner(System.in);
		int opcion;
		
		do {
			opcion = scr.nextInt();
			
			switch (opcion) {
			case 1: System.out.println("consultar saldo");
			break;
			case 2: System.out.println("Ingresar dinero");
				break;
			case 3: System.out.println("Retirar dinero");
				break;
			case 4: System.out.println("Salir, hasta luego.");
				break;
			default:
				System.out.println("porfavor elija una opcion valida");
				break;
		}//switch
		}while (opcion !=4); //do
		
		scr.close();
	}//main

}//class
