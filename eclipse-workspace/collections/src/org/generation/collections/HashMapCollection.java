package org.generation.collections;

import java.util.HashMap;
import java.util.Map;

public class HashMapCollection {
	public static void main (String[]args) {
		/*
		 * HashMap almacena elementos en pares "clave/valor" y se puede acceder a ellos mediante index.
		 * No es ordenao y permite datos duplicados
		 */
		
		HashMap<String, String> capitals = new HashMap<String, String>();
		
		//Agregando elementos "clave/valor" (.put);
		
		capitals.put("Villahemosa", "Tabasco");
		capitals.put("Merida", "Yucatan");
		capitals.put("Guadalajara", "Jalisco");
		capitals.put("Merida", "Yucatan");
		capitals.put("Puebla", "Puebla");
		capitals.put("Chetumal", "Quintana Roo");
		capitals.put("Toluca", "EdoMex");
		
		System.out.println(capitals);
		
		//Map.Entry<> es un método de la interfaz Map que representa una entrada en un Map. Toma como argumento los tipos de datos asignados al HashMap. El usuario asigna el nombre de la interfaz y recibe un método .entrySet() que devuelve el conjunto (Set) de las entradas (clave-valor) en el HashMap.
		//De esta manera ya podemos utilizar los métodos de abajo
		for (Map.Entry<String, String> entry : capitals. entrySet()) {
			System.out.println(entry.getKey()+ " es la capital de " + entry.getValue());
		};
		
		//Ejemplo 2
		Map<String, Integer> calificaciones = new HashMap<String, Integer>();
		
		calificaciones.put("Rene", 9);
		calificaciones.put("Jime", 10);
		calificaciones.put("Diego", 8);
		calificaciones.put("Eunice", 6);
		calificaciones.put("Rodri", 5);
		calificaciones.put("David", 8);
		calificaciones.put("Eli", 7);
		
		for (Map.Entry<String, Integer> grade : calificaciones. entrySet()) {
			System.out.println(grade.getKey()+ " tu calificacion es " + grade.getValue());
		};
		
		
		
	}
}
