const Calculator = require('./calculator.js');
describe("Calculator", () => {
    let calculator;
  
    beforeEach(() => {
      calculator = new Calculator();
    });
  
    describe("add", () => {
      it("should add two positive numbers", () => {
        expect(calculator.add(2, 3)).toBe(5);
      });
  
      it("should add two negative numbers", () => {
        expect(calculator.add(-2, -3)).toBe(-5);
      });
  
      it("should add a positive and negative number", () => {
        expect(calculator.add(2, -3)).toBe(-1);
      });
    });
  
    describe("subtract", () => {
      it("should subtract two positive numbers", () => {
        expect(calculator.subtract(5, 3)).toBe(2);
      });
  
      it("should subtract two negative numbers", () => {
        expect(calculator.subtract(-5, -3)).toBe(-2);
      });
  
      it("should subtract a positive and negative number", () => {
        expect(calculator.subtract(5, -3)).toBe(8);
      });
    });
  
    describe("divide", () => {
      it("should divide two positive numbers", () => {
        expect(calculator.divide(6, 3)).toBe(2);
      });
  
      it("should divide two negative numbers", () => {
        expect(calculator.divide(-6, -3)).toBe(2);
      });
  
      it("should throw an error when dividing by zero", () => {
        expect(() => calculator.divide(6, 0)).toThrow();
      });
    });
  
    describe("multiply", () => {
      it("should multiply two positive numbers", () => {
        expect(calculator.multiply(2, 3)).toBe(6);
      });
  
      it("should multiply two negative numbers", () => {
        expect(calculator.multiply(-2, -3)).toBe(6);
      });
  
      it("should multiply a positive and negative number", () => {
        expect(calculator.multiply(2, -3)).toBe(-6);
      });
    });
  });