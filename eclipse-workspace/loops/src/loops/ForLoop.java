package loops;

public class ForLoop {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		/*
		 * el ciclo for, nos proporciona una forma compacta de iterar sobre valores.
		 * for(inicializacion; condicion; contador)
		 * 
		 * (incremento/decremento){
		 * bloque de codigo
		 * }
		 */
		
		//for cno variable local
		for (int numero = 0; numero <= 10; numero++) {
			System.out.println("numero " + numero);
		}
		
		//for con variable global
		int contador;
		for(contador = 1; contador <= 5; contador++) {
			System.out.println("numero "+ contador);
		}
		
		//Bucles anidados - Bucle dentro de otro bucle.
		//imprimir un tirangulo con astericos
		int filas = 5;
		for (int i = 0; i < filas; i++) {
			for (int j = 0; j <= i; j++) {
				System.out.print("*");
			}
			System.out.println();
		}
	}

}
