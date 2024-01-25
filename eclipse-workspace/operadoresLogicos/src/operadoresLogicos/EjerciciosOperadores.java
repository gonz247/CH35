package operadoresLogicos;

public class EjerciciosOperadores {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		/*&& operador And  devuelve true si ambas expresiones son verdaderas 
		 || operador or devuelve true si almenos una de las dos condiciones se cumple
		 ! operador not si la expresion booleana es flase devuelve true y viceversa */
		
		// && AND
		
int anios = 5;
		
		boolean esInfante = true; 
		
		boolean costoInfante = anios <= 12 && esInfante;
		
		System.out.println("Es peque " + costoInfante);
		
		
		
		String cliente = "cliente123";
		String credenciales = "fertakisfuego123";
		
		boolean credencialCorrecta = cliente.equals("cliente123")&& credenciales.equals("fertakisfuego123");
		
		System.out.println("Las credenciales son validas " + credencialCorrecta);
		
		// || OR
		double costoPeaje = 380.50;
		boolean credInapam = false;
		int edad = 58;
		
		boolean descuentoAdultoMayor = edad >= 60 || credInapam;
		System.out.println("tiene descuento? " + descuentoAdultoMayor);

		
		// ! NOT
		System.out.println("tiene descuento? " + !descuentoAdultoMayor);
		
		
		 int costoBoleto = 350;
		 int asientosNormales= 62;
		 int asientosAdultosMayores= 4;
		 int asientosEstudiantes= 6;
		 float descuentoInapam= 0.35f;
		 float descuentoEstudiantes= 0.30f;
		 /*
		 * calcular asientos disponibles
		 * descuentos ganancia, etc
		 * */
		 
		 int asientosNormalDisponibles = asientosNormales - (asientosAdultosMayores + asientosEstudiantes);
		 float costoBoletoInapam = costoBoleto - (costoBoleto * descuentoInapam);
		 float costoBoletoEstudiantes = costoBoleto - (costoBoleto * descuentoEstudiantes);
		 int gananciaAsientosNormales = asientosNormales * costoBoleto;
		 float ganaciaAsientosAdultosMayores = asientosAdultosMayores * costoBoletoInapam;
		 float gananciasAsientosEstudiantes = asientosEstudiantes * costoBoletoEstudiantes;
		 
		 float total = gananciasAsientosEstudiantes 
		 
		 
		
		
	
		
	}

}
