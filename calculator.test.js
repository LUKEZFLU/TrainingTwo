// import {add, subtract, multiply, divide} from "./calculator";
const {add, subtract, multiply, divide} = require('./calculator')

describe('Calculator Tests', () => {
    test('add two numbers', () => {
        expect(add(2, 3)).toBe(5);
    });

    test('subtract two numbers', () => {
        expect(subtract(3, 1)).toBe(2);
    });

    test('multiply two numbers', () => {
        expect(multiply(2, 3)).toBe(6);
    });

    test('divide two numbers', () => {
        expect(divide(8, 2)).toBe(4);
    });

    test('throw error on divide by zero', () => {
        expect(() => divide(5, 0).toThrow("Division by zero"));
    });

})