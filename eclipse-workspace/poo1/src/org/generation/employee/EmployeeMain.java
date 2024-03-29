package org.generation.employee;

public class EmployeeMain {
	public static void main(String[]args) {
		Employee Daniel = new Employee("Daniel", "Maldonado", 7838, 8596.54d, "Instructor");
		Employee Gonzalo = new Employee("Gonzalo", "Piña", 5436, 30234.34d, "Desarrollador Fullstack");
		Employee Arturo = new Employee("Arturo", "Avila", 4531, 15983.54d, "FrontEnd");
		
		System.out.println(Daniel);
		System.out.println(Gonzalo);
		System.out.println(Arturo);
		
		//invocando metodos preestablecidos (trabajar, calcularsalario, infogeneral)
		Daniel.infoGeneral();
		Arturo.calcularSalario();
		Gonzalo.capacitarse();
		
		//utilizar informacion especifica de cada objeto mediantes sus propiedades
		System.out.println(Daniel.getNombre() + " "+ Daniel.getApellido() + " ocupa el puesto de "+ Daniel.getPuesto());

	
		
	//actualizar informacion mediante Setter
	Arturo.setSalario(24283.11);
	Arturo.calcularSalario();
	
	
	}
}
