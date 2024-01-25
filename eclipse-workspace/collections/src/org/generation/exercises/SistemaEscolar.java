package org.generation.exercises;

import java.util.ArrayList;
import java.util.Scanner;

/*
 * Programa que permite que un usuario agregue nombre y apellido de estudiantes matriculados en una universidad. Posteriomente, muestra la lista de los estudiantes agregados.
 * -- Requerimientos:
 * 		> Utilizar ArrayList para guardar a los estudiantes
 * 		> Scanner para interactuar con el usuario y permitir que agregue estudiantes
 * 		> Loop para permitir que se agreguen varios estudiantes (do-while)
 * 		> Opción para salir del loop con la palabra 'Salir' (if-else, try-catch, !=, switch son posibles opciones)
 * 		> Mostrar lista de estudiantes (for-each) 
 * 		> Agregar la opción que permite que el usuario elimine un estudiante después de haberlo agregado y muestre la lista actualizada después de la eliminación (.remove);).
 */
public class SistemaEscolar {
	public static void main(String[] args) {
		//Inicializar un ArrayList para guardar a los estudiantes
		ArrayList<String> estudiantes = new ArrayList<String>();
		
		//Scanner para el usuario
		Scanner scanner = new Scanner(System.in);
		
		//loop para permitir agregar usuarios
		String nombreEstudiante; //Inicializado de manera global
		
		do {
			System.out.println("Ingresa el nombre del estudiante. \n Escribe 'Salir' para finalizar.");
			nombreEstudiante = scanner.nextLine(); //invocado de manera local
			estudiantes.add(nombreEstudiante);
		} while(!(nombreEstudiante.equals("Salir") || nombreEstudiante.equals("salir"))); //Siempre que NO se escriba Salir, la funcion seguira pidiendo nombre con escanner
		
		//mostrar lista de estudiantes (for-each)
		System.out.println("**Lista de estudiantes: ");
		for (String estudiante : estudiantes) {
			if(!(estudiante.equals("Salir") || estudiante.equals("salir"))) {
				System.out.println(estudiante);
			}
		}
		
		//Funcion para eliminar un nombre
		String nombreEliminar;
		do {
			System.out.println("quieres elminar un nombre de la lista? \nEscribe el nombre a eliminar o 'Salir' para salir del programa");
			nombreEliminar = scanner.nextLine();
			for( String estudiante : estudiantes) {
				if( nombreEliminar.equals(estudiante)) {
					estudiantes.remove(estudiante);
				}
			}
			
		}while(!(nombreEliminar.equals("Salir") || nombreEliminar.equals("salir")));
		
		
		scanner.close();
		
		
		
		
	}//main
}
