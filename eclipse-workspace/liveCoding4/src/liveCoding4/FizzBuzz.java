package liveCoding4;
//gonzalo piña / ana fernandez
//realice el codigo rapido y de forma clara. falle un poco en la logica del los if, pero se reolvio rapidamente

public class FizzBuzz {
		
	public void imprimir() {
		for(int i = 1; i <=100; i++) {
			if(i%5 == 0 && i%3 == 0) {
				System.out.println("FizzBuzz");
			}else if(i%5 == 0){
				System.out.println("Buzz");
			}else if(i%3 == 0){
				System.out.println("Fizz"); 
		}else {
			System.out.println(i);
		}
}
}


public static void main(String[]args) {
	FizzBuzz fizzbuzz = new FizzBuzz();
	
	fizzbuzz.imprimir();
}
}//class


