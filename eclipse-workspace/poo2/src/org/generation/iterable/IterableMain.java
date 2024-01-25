package org.generation.iterable;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;

public class IterableMain {
	public static void main(String[]args) {
		//podemos iterar sobre una coleccion de 3 maneras:
		//1. iteracion mediante ciclo for-each
		List<String> nombres = new ArrayList<String>();
		
		nombres.addAll(Arrays.asList("Braulio", "Fernanda", "Rodrigo", "Ruben", "Marco", "Rey" ));
		
		for(String nombre : nombres) {
			System.out.println(nombre);
			
		}
		
		//2. Iterar mediante Iterator. 
		List<String> apellidos = new ArrayList<String>();
		
		apellidos.addAll(Arrays.asList("Aleman","Garcia","Martinez","Cardoso","Razo","ceja"));
		
		//Utilizar un nuevo Iterador y le vamos a pasar el metodo .iterator() a nuestro ArrayList
		Iterator<String> iterador = apellidos.iterator();
		
		//Utilizando while, devuelve verdadero si la iteracion tiene mas elementos, si no, se termina el ciclo
		while(iterador.hasNext()) {
			String elemento = iterador.next();
			System.out.println(elemento);
		}
		
		//3. Mediante forEach que toma una expresion Java Lambda como parametro
			List<String> animales = new ArrayList<String>();
			animales.addAll(Arrays.asList("cuyo", "nahual","Tlacuache","Ajolote", "tepezcuintle","Vaquita marina"));
			
			animales.forEach((animal)-> {
				System.out.println(animal);
			});
		}
	}//main

