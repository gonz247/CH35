package liveCoding3;

//gonzalo piña / ana fernandez
//falle un poco en comprender claramente las instrucciones, aun me falta aterrizar mejor el funcionamiento de las clases, me falto comentar el codigo mejor
//Fui rapido en escribir y armar los componenetes de la clase, use variables entendibles, el codigo es legible, no entendia como calcular un comun divisor, pero no perdi tiempo y lo investigue rapidamente
import java.util.*;

public class MangosNaranjas {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		class Frutas {
			private int mangos;
			private int naranjas;

			public Frutas(int mangos, int naranjas) {
				this.mangos = mangos;
				this.naranjas = naranjas;

			}

			private int calcularCajas() {
				int temp;
				int a = this.mangos;
				int b = this.naranjas;
				while (b != 0) {
					temp = b;
					b = a % b;
					a = temp;
				}

				return a;
			}

			public void imprimir() {
				int cajas = calcularCajas();
				int mangosCajita = mangos / cajas;
				int naranjasCajita = naranjas / cajas;

				System.out.println("El número de cajas es: " + cajas + " El número de mangos en una caja es: "
						+ naranjasCajita + " El número de naranjas en una caja es: " + mangosCajita);

			}

		}// Frutas

		Scanner scanner = new Scanner(System.in);

		System.out.println("introduce el numero de Mangos");
		int mangos = scanner.nextInt();
		System.out.println("introduce el numero de Naranjas");
		int naranjas = scanner.nextInt();

		Frutas frutas = new Frutas(mangos, naranjas);

		frutas.imprimir();

		scanner.close();
	}

}
