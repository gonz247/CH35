package org.generation.overloading;

import java.math.BigDecimal;

public class SumaMain {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//invocamos el metodo de tipo static mediante su clase y no mediante la instancia de un objeto
		int suma1 = Suma.sumar(8, 5);
		double suma2 = Suma.sumar(4.3, 6.26);
		
		System.out.println(suma1);
		System.out.println(suma2);
		
		BigDecimal num1 = new BigDecimal("4.3"); //primer objeto instanciado
		BigDecimal num2 = new BigDecimal("6.26"); //segundo objeto instanciado
		
		//mando a llamar los objetos instanciados de Big
		
		BigDecimal suma3 = Suma.sumar(num1 , num2);
		
		System.out.println(suma3);
		
	}

}
