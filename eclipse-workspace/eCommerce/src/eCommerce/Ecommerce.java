package eCommerce;

import java.util.ArrayList;
import java.util.List;

public class Ecommerce {
	
	static class Producto{//Esta es una clase para representar un producto
		String nombre;
		double precio;
		
		Producto(String nombre, double precio){
			this.nombre = nombre;
			this.precio = precio;
		}
		
	}//Producto

	static class CarritoCompra{
		List<Producto> productos = new ArrayList<>();
		
		void agregarProducto(Producto barbie) {
			productos.add(barbie);
		}
		
		double calcularTotal() {
			double total =0;
			for(Producto barbie : productos) {
				total += barbie.precio;
			}
			return total;
		}
	}//carritoCompra
	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Producto munieca1 = new Producto ("Chelsea", 98.70);
		Producto munieca2 = new Producto ("Skipper", 85.70);
		
		CarritoCompra carrito = new CarritoCompra();
		
		carrito.agregarProducto(munieca1);
		carrito.agregarProducto(munieca2);
		
		double totalCarrito = carrito.calcularTotal();
		
		System.out.println("Total del carrito: "+totalCarrito);
		
		
	}//main

}//Ecommerce
