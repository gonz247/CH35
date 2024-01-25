package org.generation.banco;

/*
 * En esta clase se definen los metodos para disparar las excepciones, es decir el try-catch. sin embargo, aqui no se ejecuta el try catch. 
 * Se definen otros metodos como depositar dinero, retirar dinero,
 * Requerimientos:
 * 	-Trabajar bajo POO
 * 	-Encapsular (modificadores, getters y setters)
 * 	-Crear Variables y metodos para instanciar objetos
 * 
 */
public class CuentaBancario {
	private double saldo;
	private int idCuenta;
	
	//constructor que recibe solamente el atributo numero
	public CuentaBancario(int idCuenta) {
		this.idCuenta = idCuenta;
	}
	
	//Método para depositar dineros
	public void depositar(double monto) {
		saldo += monto;
	}
	
	//metodo para retirar dinero
	/*
	 * Verificar si el monto a retirar es menor o igual al saldo actual
	 * 	-true: se puede retirar el monto solicitado
	 * 	-false: no se puede retirar y calculamos cuanto dinero falta para completar la operacion
	 */
	public void retirar(double monto) throws FondosInsuficientesException {
		if (monto <= saldo) {
			saldo -=monto;
		}else {
			double faltante = monto - saldo;
			//Crear la instancia de la clase FondosInsuficientesException con las palabras reservadas throw new e y le pasamos el parametro correspondiente a la variable que dispara la excepcion
			throw new FondosInsuficientesException(faltante); //Esto nos va a marcar un error, porque queremos instanciar de manera local y no lo encuentra, para ello necesitamos "heredarlo" como parte del método con la palabra reservada throws y el nombre de la excepción
			
			
		}
	}

	public double getSaldo() {
		return saldo;
	}

	public void setSaldo(double saldo) {
		this.saldo = saldo;
	}

	public int getIdCuenta() {
		return idCuenta;
	}

	public void setIdCuenta(int idCuenta) {
		this.idCuenta = idCuenta;
	}
	
	
	
} //Class

