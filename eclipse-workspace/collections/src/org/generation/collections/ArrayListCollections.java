package org.generation.collections;

import java.util.ArrayList;
import java.util.Arrays;

public class ArrayListCollections {
	public static void main(String[] args) {
		//Arrays//
		String[] names = {"Jona", "yo", "fer", "liz", "art", "uriel", "martin", "lucero"};
		//imprimiendo arrays//
		System.out.println(Arrays.toString(names));
		
		int[] edades = { 12,3, 55, 69, 41, 29, 37, 18};
		System.out.println(Arrays.toString(edades));
		
		//acceder a cada elemento del array
		String name1 = names[0];
		System.out.println("El primer nombre de la lista es " + name1);
		
		int edad1 = edades[2];
		System.out.println("La edad de " + name1 + "es de " + edad1 + " años");
		
		//obtner longitud de array
		int longitudNames = names.length;
		System.out.println("el Array names tiene "+ longitudNames + "elementos");
		
		//Obtener el ultimo elemento
		//String ultimoElemento = names[longitudNames -1]; la longitud vive en la variable
		
		String ultimoElemento = names[names.length -1];//sin variable de longitud
		
		//mostrar cada elemento con forEach
		
		for (String name : names) {
			System.out.println(name);
		}
		
		//ArrayList*//
				//Arraylist es un array que puede cambiar de tamaño, es la clase de java que representa la estructura de datos de Arrays
				//Permite elementos duplicados y recibe varios metodos para su manipulacion.
				
				ArrayList<String> films = new ArrayList<String>();
				ArrayList<Integer> matricula = new ArrayList<>();
				ArrayList<Character> characters = new ArrayList<>() ;
				
				
				//Agregar elementos
				films.add("Inception");
				films.add("Se7en");
				films.add("The shining");
				films.add("Pulp fiction");
				films.add("Mr Nobody");
				films.add("The shutter island");
				films.add("Ready Player One");
				
				System.out.println(films);
				
				//Obtener un elemento: name.get(index);
				
				String film1 = films.get(0);
				System.out.println("La primer pelicula es " + film1);
				//modificar un elemento: name.set(index, newValue)
				String film3 = films.set(3,  "Memento");
				String film3Get = films.get(3);
				System.out.println(film3Get);
				
				//conocer el tamaño del ArrayList: name.size();
				int sizeFilms = films.size();
				System.out.println("el tamaño del ArrayList films es de " + sizeFilms);
				
				//Agregar un elemento y despues eliminarlo: name.remove(index);
				films.add("alguno");
				System.out.println(films);
				
				films.remove(7);
				System.out.println(films);
				
				//Mostrando los elementos del ArrayList en lista
				System.out.println(">>>>>Films en la lista:");
				for(String film : films) {
					System.out.println(film);
				}
				
		
	
	
	}//main
}
