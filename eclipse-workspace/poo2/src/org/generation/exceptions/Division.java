package org.generation.exceptions;


public class Division {
	public static void main(String[]args) {
		public static int dividir( int num1, int num2){
			return num1 / num2;
		}
		

		/*
		 * La clase Exception nos permite manejar cualquier caso excepcional con nuestro código, es el equivalente a los erroes.
		 * Utiliza una estructura de control try-catch que permite manejar las excepciones.
		 *  - try : Envuelve el código que puede generar una excepción y lo evalúa.
		 *  - catch : Contiene el código que se ejecuta cuando se lanza la excepción.
		 *  	Sintaxis:
		 *  		try {
		 *  			//Código protegido
		 *  		} catch (ExceptionName e){
		 *  			//Bloque de excepción
		 *  		}
		 *  - finally : Siempre se ejecuta. Se utiliza para mostrar un mensaje en caso de ser invocado. Podemos prescindir de finally
		 * 
		 */
		
		//Exception que se arroja si un numero se divide entre 0
		
		try {
			int resultado = dividir(10,2);
			System.out.println("El resultado de la division es "+resultado);
		}catch(ArithmeticException e) {
			System.out.println("Error: no puedes dividr entre 0");
		}finally {
			System.out.println("Programa finalizado");
		}
	}//main
}//class
