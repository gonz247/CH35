/* 
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
*/

const calculator = require("../modules/calculator.js");

test("la suma de dos numeros y el valor resultante", ()=> {
    expect(calculator.sum(10,20)).toBe(30);
});

test("la resta de dos numeros y el valor resultante", ()=> {
    expect(calculator.substract(10,20)).toBe(-10);
});

test("la multiplicacion de dos numeros y el valor resultante", ()=> {
    expect(calculator.multiply(10,20)).toBe(200);
});

test("la division de dos numeros y el valor resultante", ()=> {
    expect(calculator.divide(10,2)).toBe(5);
});