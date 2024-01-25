package org.generation.collections;

import java.util.Arrays;
import java.util.HashSet;

public class HashSetCollection {
	public static void main(String[] args) {
		HashSet<String> animals = new HashSet <String>();
		
		animals.add("Buho");
		animals.add("caballo");
		animals.add("Perro");
		animals.add("Gato");
		animals.add("Cebra");
		animals.add("Jirafa");
		animals.add("Mapache");
		animals.add("Capibara");
		animals.add("Buho");
		animals.add("Buho");
		animals.add("Buho");
		animals.add("Buho");
		
		//Imprimir el HashSet
		System.out.println(animals);
		
		//conocer si un elemento se encuentra dendro del set: contains();
		System.out.println(animals.contains("Buho"));
		
		//eliminar un elemento: remove();
		animals.remove("Cebra");
		System.out.println(animals);		
		
		//Agregando elementos en una sola linea
		animals.addAll(Arrays.asList("Perrito","Gatito","Osito"));
		System.out.println(animals);
		
		/*
		 * La clase HashSet no va a garantizar que los elementos se muestren en el orden establecido ya que busca eficientar la busqueda y recuperacion de los elementos
		 * Utiliza tablas hash para almacenar los elementos y mostrarlos al usuario
		 */
		
		//Limpiar el HashSet: .clear();
		animals.clear();
		System.out.println(animals);
		
		
		
		
	}//main
}
