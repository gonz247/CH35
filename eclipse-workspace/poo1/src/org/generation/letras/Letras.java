package org.generation.letras;

import java.util.Scanner;

public class Letras {


	//Para que nuestro usuario interactue, definimos un Scanner
	Scanner scanner = new Scanner(System.in);
	
	//Metemos el Scanner dentro de un metodo
	public String leerEntrada() {
		return scanner.nextLine();
	}
	
	//Metodo para propporcionar contexto al usuario
	public void mostrarMensajes(String mensaje) {
		System.out.println(mensaje);
	}
}

