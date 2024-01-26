package com.generation.codigoDeOtros;

import java.util.Scanner;

public class CodigoDeOtros6 {

    public static void main(String[] args) {//se agrego el main
    	//movimos las variables al inicio
        int[] numeros = new int[20];// mal declarada, se corrigio la sintaxys
        int opcion = 0;
        int multiplo = 0;
        Scanner scan = new Scanner(System.in);
        
      
        System.out.println("\n¿Qué números quiere resaltar? ");// faltaba una n
        System.out.print("(1 – los múltiplos de 5, 2 – los múltiplos de 7): ");
        opcion = Integer.parseInt(scan.nextLine());// se agrego un parentesis y scan  
        
        
        multiplo = (opcion == 1) ? 5 : 7; // se corrgio la sntaxis

        GenerarNumerosAleatorios(numeros); //funcion numero aleatorios

        compararMultiplos(numeros, multiplo);// nueva funcion
        
        scan.close();
    }

    private static void compararMultiplos(int[] numeros, int multiplo) {
        for (int numero : numeros) {
            if (numero % multiplo == 0) {//se corrigio la intaxis de if
                System.out.print("[" + numero + "] ");
            } else {
                System.out.print(numero + " ");//sysout se corrigio
            }
        }
    }

    private static void GenerarNumerosAleatorios(int[] numeros) {
        for (int i = 0; i < numeros.length; i++) { //se ajusto la sintaxis de for para iterar de manera correta
            numeros[i] = (int) (Math.random() * 381) + 20;
            System.out.print(numeros[i] + " ");// se agrego el out
        }
        System.out.println();//println
        
    }
}
