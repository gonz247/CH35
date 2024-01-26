package org.generation.employee.manager;

public class ManagerMain {
	public static void main(String[]args) {
		Manager Fernanda = new Manager("Fernanda Ramos",1432,43365.20d, "manager",2);
		System.out.println(Fernanda);
		Fernanda.calcularSalario();
		
		System.out.println("El salario base de " + Fernanda.getNombreCompleto()+ " con posicion de "+ Fernanda.getPuesto()+ "es de $" + Fernanda.getSalarioBase()+" tiene un incremento de  "+Fernanda.getincremento()+"");
	}
	
}
