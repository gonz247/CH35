package tipodeDatosyVariables;

public class EjerciciosJava {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
				System.out.println("Hola Mundo");
				/*Comentarios 
				 * multilinea*/
				//comentarios de una sola línea
				//Tipos de datos enteros 

				byte edad = 15; //Sirve para representar un numero entero 8bits (-128 al 127)
				
				System.out.println("Edad del participante"+edad);
				
				short usuariosNuevos = 200; //Sirve para representar un numero entero 
				
				System.out.println("Usuarios nuevos "+usuariosNuevos);
				
				int usuariosTotales = 8752; //sirve para representar un numero entero 32 bits (-2147483648 al 2147483647
				System.out.println("Usuarios Totales " + usuariosTotales);
				long usuariosPremium = 9512; //Sirve para representar un numero entero con valores mucho mayores
				System.out.println("Usuarios premium"+usuariosPremium);
				
				//Tipos de datos con numero decimales
				float altura = 1.70f;//Sirve para representar un valor numerico con numeros decimales, cuyo valor es de 23 bits, puede tener 8 caracteres despues del punto decimal y que tiene que llevar una f al final
				
				System.out.println("Altura del usuarix "+altura);
				
				double peso = 56;//Sirve para representar valores numericos con decimales, cuyo valor es de 64 bits y puede tener hasta quince caracteres despues del punto decimal
				
				//String siempre se inicia con mayúscula.
				String nombreUsuario = "Paulina"; //Es una clase para tener cadenas de texto
				System.out.println("Usuaria "+nombreUsuario);
				char seccion = 'f'; //Sirve para representar valores con un solo caracter.
				String zonaBoleto = "52";
				String costoBoleto = "500";
				
				
				System.out.println("Seccion" +seccion);
				boolean clienteFrecuente = true; //Sirve para obtener true o false utilizando condicionales
				
				System.out.println("Es un cliente frecuente " + clienteFrecuente);
				//Conversion de tipos
				
				//Casteo a entero
				
				int pesoCambio = (int)peso;
				
				//casteo entero
				
				long pesoCambio1 = (long) peso;
				
				System.out.println("double "+peso);
				System.out.println("int " + pesoCambio);
				System.out.println("long "+ pesoCambio1);
				
				int precioCambio = Integer.parseInt(costoBoleto);
				double zonaCambio = Double.parseDouble(zonaBoleto);
				
				/*Operadores aritmeticos 
				+ suma
				- resta
				* multiplicacion
				/ division
				 % Residuo*/
				
				
				/*Operadores de compararcion 
				 == compara si un opernado es igual a otro 
				 != compara si es diferente 
				 <  mayor que 
				 >  menor que 
				 <= mayor o igual que 
				 >= menor o igual que */
				
				
				
				
			
				
				

		
		
		
	}

}
