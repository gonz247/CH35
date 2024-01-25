package org.generation.banco;

/*
 * En cajero se instancia el objeto de tipo CuentaBAncaria y se invocan los metodos definidos
 * Aqui si se pueden establecer los try-catch de la excepcion que se definio en el metodo retirar
 * los resultados se muestran en consola
 */
public class Cajero {
	public static void main(String[]args) {
		CuentaBancario cuentaGonz = new CuentaBancario(6989); //cuenta bancaria con su idCuenta
		
		//Simulamos que tenemos un Scanner y el cliente introduce dinero
		System.out.println("depositando $500");
		
		cuentaGonz.depositar(500);
		
		//Revisar si se actualiza el saldo (debe haber 500)
		
		System.out.println(cuentaGonz.getSaldo());
		
		//retirar dinero
		try {
			//Simulamos Scanner para retirar
			System.out.println("retirando $300");
			cuentaGonz.retirar(300);
			System.out.println("Nuevo saldo " + cuentaGonz.getSaldo());
			
			System.out.println("retirando $300");
			cuentaGonz.retirar(300);
			System.out.println("Nuevo saldo " + cuentaGonz.getSaldo());
		}catch(FondosInsuficientesException e){
			System.out.println("no cuentas con saldo suficiente, tu saldo es de " + cuentaGonz.getSaldo());
			System.out.println("Te hace falta $" + e.getMonto());
			e.printStackTrace();// Método de excepciones que imprime el seguimiento del flujo de la excepción
			//syso ctrl+space o sysout ctrl+space
			
		}
		
		
		
		
		
	}//main

}//class
