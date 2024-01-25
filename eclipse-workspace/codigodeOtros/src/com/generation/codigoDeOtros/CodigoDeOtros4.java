package com.generation.codigoDeOtros;
import java.util.Scanner;

public class CodigoDeOtros4 {

    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);//se agrego System.in para inicializar el scanner correctamente

        System.out.print("Turno del jugador 1 (introduzca piedra, papel o tijeras): ");
        String j1 = s.nextLine();

        System.out.print("Turno del jugador 2 (introduzca piedra, papel o tijeras): ");
        String j2 = s.nextLine();

        if (j1.equals(j2)) {
            System.out.println("Empate");
        } else {
            int g = 2;
            switch (j1) {
                case "piedra":
                    if (j2.equals("tijeras")) {//se utilizo la funcion equals para la comparacion
                        g = 1;
                    }
                    break; //se añadio break
                case "papel":
                    if (j2.equals("piedra")) {//se utilizo la funcion equals para la comparacion
                        g = 1;
                    }
                    break; //se añadio break
                case "tijeras":
                    if (j2.equals("papel")) {
                        g = 1;
                    }
                    break;
                default:
            }
            System.out.println("Gana el jugador " + g);
        }

        s.close(); // cerrar scanner como buena practica
    }
}