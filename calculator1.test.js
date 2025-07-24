const {add, subtract, multiply, divide} = require('./calculator1');

let a, b;

beforeAll(() => {
    console.log('🏁 Starting all the tests')
})

afterAll(() => {
    console.log('✅ All tests completed')
})

beforeEach(() => {
    a = 10;
    b = 2;
    console.log('Starting a new test ...');
});

afterEach(() => {
    console.log('Finished test .\n');
})


describe('Calculator Tests', () => {
    test('add two numbers', () => {
        expect(add(a, b)).toBe(12);
    });

    test('subtract two numbers', () => {
        expect(subtract(a, b)).toBe(8);
    });

    test('multiply two numbers', () => {
        expect(multiply(a, b)).toBe(20);
    });

    test('divide two numbers', () => {
        expect(divide(a, b)).toBe(5);
    });

    test('throw error on divide by zero', () => {
        expect(() => divide(a, 0).toThrow("Division by zero"));
    });

})