package com.generation.codigoDeOtros;

import java.util.Scanner;

public class CodigoDeOtros5 {
	
	public static void main(String[]args) {
	Scanner scanner = new Scanner(System.in); //falta la importacion //Faltaba el system.in //se renombro el scanner
    
	System.out.print("Introduzca un número: "); //cambie la comilla ' por "
    int ni = scanner.nextInt();
    int c = ni;//se agrego parse Int
    
    int afo = 0; 
    int noAfo = 0;
    
    while (ni > 0) { //se cambio la variable n por c
	  int digito = ni % 10; 
      if ((digito == 3) || (digito == 7) || (digito == 8) || (digito == 9)) {
		afo++;
    	  ni /= 10; //se agrego esta linea para no crear un loop infinito
      } else {
		noAfo++;
	  
	  ni /= 10;
    }
    if (afo > noAfo) {
      System.out.println("El " + c + " es un número afortunado."); //faltaba una t en print
    } else {
      System.out.println("El " + c + " no es un número afortunado.");
    }
    
  }//while
    scanner.close(); //cerrando scanner
}//main
}//class
