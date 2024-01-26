package org.generation.employee;

public class EmployeeMain {
	public static void main(String[]args) {
		Employee Rocio = new Employee("Rocio Hernandez", 42013,12000d, "Frontend developer");
		Employee Rene = new Employee("Rene Gomez", 97565,15499d,"Desarrollador Backend");
		Employee Diego = new Employee("Diego Gonzalez", 0054,25120.52d ,"Desarrollador movil");
		
		Rocio.trabajar();
		Rene.capacitarse();
		Diego.calcularSalario();
		Rene.infoGeneral();
		
	}//main
}//class
