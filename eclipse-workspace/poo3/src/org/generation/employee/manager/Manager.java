package org.generation.employee.manager;

import org.generation.employee.Employee;

public class Manager extends Employee {
	//1. Atributos
	private int antiguedad;
	private double incremento;

	
	
	//2. constructor. NOTA: no podemos definir el incremento, porque no conocemos cual es el incremento de cada objeto, es decir, cada objeto tendra su incremento con base en un metodo llamado calcularIncremento();
	public Manager(String nombreCompleto, int id, double salario, String puesto, int antiguedad) {
		super(nombreCompleto, id, salario, puesto);
		this.antiguedad = antiguedad;
		this.incremento = calcularIncremento();
		
	}
	
	

//3. Getters y Setters
	public int getAntiguedad() {
		return antiguedad;
	}


	public void setAntiguedad(int antiguedad) {
		this.antiguedad = antiguedad;
	}


	public double getincremento() {
		return incremento;
	}


	public void setIncremento(double incremento) {
		this.incremento = incremento;
	}


	public double getSalarioBase() {
		return salarioBase;
	}


	public void setSalarioBase(double salarioBase) {
		this.salarioBase = salarioBase;
	}
	
	//4. Metodo del usuario
	
	public void organizarReunion() {
		System.out.println("El manager " + this.getNombreCompleto() + "convoca a una reunion");
	}
	
	
	//Invocar el metodo de la superclase que guarda el salario base de cualquier Employee
	double salarioBase = super.getSalario();
	

	//Overriding (anulación de métodos)
		/* 
		 * En la empresa los Managers reciben un incremento salarial de $1000 al cumplir su primer año de antigüedad.
		 * Después de recibir su primer incremento, cada año reciben un incremento de $500
		 */
		
		
		/*
		 * Verificar la antiguedad. Si es mayor o igual a 1 es true, si no, es false
		 * Crear método para verificar la antigüedad y calcular el incremento salarial 
		 */
		public double calcularIncremento() {
			double incrementoTotal;
			if (this.antiguedad >= 1) {
				//Operación matemática para determinar el incremento con base en la antigüedad
				incrementoTotal = 1000 + (this.antiguedad - 1) * 500;
				
			} else {
				incrementoTotal = 0;
				System.out.println("No hay incremento");
			}
			return incrementoTotal;
			
		}
		
		//Metodo para calcular el salario con incremento (siempre que se cumpla la condicion)
		public void calcularSalario() {
			double salarioManager = salarioBase + this.getincremento(); //this.incremento();
			System.out.println("El salario del Manager "+this.getNombreCompleto()+" es de $"+ salarioManager);
		}


//5. toString. para generarl el toString y mandar a llamar los atributos de la superclase, debo seleccionar los getters de los atributos heredados. Despues, puedo modificar el return segun mi conveniencia
		@Override
		public String toString() {
			return "Manager [antiguedad=" + antiguedad + ", incremento=" + incremento + ", nombre="
					+ getNombreCompleto() + ", id=" + getId() + ", SalarioBase=" + getSalario() + ", puesto="
					+ getPuesto() + "]";
		}
		
			
}//class
