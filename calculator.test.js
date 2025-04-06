const hexCalculator = require('./calculator');

describe('Hexadecimal Calculator', () => {
    test('Addition of two hex numbers', () => {
        expect(hexCalculator('A', 'B', '+')).toBe('15');
    });

    test('Subtraction of two hex numbers', () => {
        expect(hexCalculator('F', 'A', '-')).toBe('5');
    });

    test('Multiplication of two hex numbers', () => {
        expect(hexCalculator('2', '3', '*')).toBe('6');
    });

    test('Division of two hex numbers', () => {
        expect(hexCalculator('A', '2', '/')).toBe('5');
    });

    test('Invalid operator throws error', () => {
        expect(() => hexCalculator('A', 'B', '%')).toThrow('Invalid operator');
    });
});