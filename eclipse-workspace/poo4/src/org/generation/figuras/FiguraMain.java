package org.generation.figuras;

import org.generation.figuras.Figura.Rectangulo;

public class FiguraMain {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Figura.Rectangulo rectangulo = new Rectangulo(5,3);
		System.out.println("El area del rectangulo es " + rectangulo.calcularArea()+ " metros");
	}

	//cambiar cada clase a su archivo individual para evitar este error
	
}
