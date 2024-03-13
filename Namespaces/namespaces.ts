/// <reference path="calculator.ts" />

const myCalculator = new Calculator.BasicCalculator();
const sum = myCalculator.add(10, 5);
const difference = myCalculator.subtract(10, 5);

console.log(`Sum: ${sum}`);
console.log(`Difference: ${difference}`);
