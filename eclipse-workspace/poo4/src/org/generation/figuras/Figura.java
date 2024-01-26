package org.generation.figuras;

/*
 * Figura sera una clase abstracta que contiene un metodo abstracto, el cual sera implementado por sus subclases
 * Rectangulo y circulo son cubclases que reciben el metodo de Figura
 * Mala practica: vamos a instanciar los objetos aqui en la misma clase
 */

//con abstract le digo a Java que mi clase es abstracta
public abstract class Figura {
//Metodo abstracto para calcular el area
	public abstract double calcularArea();
	
	//metodo "concreto" para imprimir informacion sobre la figura
	public void infoFigura() {
		System.out.println("Esta es una figura");
	}
	
	public class Rectangulo extends Figura{
//Atributos que se definen para rectangulo y que podemos crear gracias a la abstraccion
		private double altura;
		private double base;
		
		
		
		
		public Rectangulo(double altura, double base) {
			super();
			this.altura = altura;
			this.base = base;
		}



		//Implementando el metodo abstracto de Figura. Una buena practica es indicar que el metodo es heredado utilizando la anotacion @Override
		@Override
		public double calcularArea() {
			return base * altura;
		}
		
	}//Rectangulo
	
	public class Circulo extends Figura{
		private double radio;
		
		public Circulo(double radio) {
			this.radio = radio;
			
		}

		@Override
		public double calcularArea() {
			return Math.PI * (radio * radio);
		}
	}//Circulo

	
}//Figura


