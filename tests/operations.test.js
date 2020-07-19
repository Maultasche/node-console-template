const operations = require('../lib/operations');

describe('testing the add operation', () => {
    test('adding two positive numbers', () => {
        doAddTest(2, 3, 5);
    });

    test('adding a positive number and a zero', () => {
        doAddTest(8, 0, 8);
    });

    test('adding a positive number and a negative number', () => {
        doAddTest(4, -4, 0);
    });

    test('adding a negative number and a zero', () => {
        doAddTest(-10, 0, -10);
    });

    test('adding two negative numbers', () => {
        doAddTest(-8, -5, -13);
    });

    function doAddTest(x, y, expectedResult) {
        const result = operations.add(x, y);

        expect(result).toBe(expectedResult);
    }
}); 

describe('testing the subtract operation', () => {
    test('subtracting two positive numbers', () => {
        doSubtractTest(3, 2, 1);
    });

    test('subtracting a positive number from zero', () => {
        doSubtractTest(0, 4, -4);
    });

    test('subtracting zero from a positive number', () => {
        doSubtractTest(4, 0, 4);
    });

    test('subtracting a positive number from a negative number', () => {
        doSubtractTest(-7, 2, -9);
    });

    test('subtracting a negative number from zero', () => {
        doSubtractTest(0, -2, 2);
    });

    test('subtracting zero from a negative number', () => {
        doSubtractTest(-7, 0, -7);
    });

    test('subtracting two negative numbers', () => {
        doSubtractTest(-9, -4, -5);
    });

    test('subtracting a large number from a small number', () => {
        doSubtractTest(2, 15, -13);
    });
    
    test('subtracting a small number from a large number', () => {
        doSubtractTest(23, 3, 20);
    });

    function doSubtractTest(x, y, expectedResult) {
        const result = operations.subtract(x, y);

        expect(result).toBe(expectedResult);
    }    
});

describe('testing the multiply operation', () => {
    test('multiplying two positive numbers', () => {
        doMultiplyTest(4, 3, 12);
    });

    test('multiplying a positive number by zero', () => {
        doMultiplyTest(0, 4, 0);
    });

    test('multiplying a positive number by a negative number', () => {
        doMultiplyTest(-7, 2, -14);
    });

    test('multiplying a negative number by zero', () => {
        doMultiplyTest(0, -2, -0);
    });

    test('multiplying two negative numbers', () => {
        doMultiplyTest(-8, -5, 40);
    });

    function doMultiplyTest(x, y, expectedResult) {
        const result = operations.multiply(x, y);

        expect(result).toBe(expectedResult);
    }    
});

describe('testing the division operation', () => {
    test('dividing two positive numbers', () => {
        doDivisionTest(10, 2, 5);
    });

    test('dividing a positive number by zero', () => {
        doDivisionTest(4, 0, Infinity);
    });

    test('dividing zero by a positive number', () => {
        doDivisionTest(0, 4, 0);
    })

    test('dividing a positive number by a negative number', () => {
        doDivisionTest(6, -2, -3);
    });

    test('dividing a negative number by zero', () => {
        doDivisionTest(-6, 0, -Infinity);
    });

    test('dividing zero by a negative number', () => {
        doDivisionTest(0, -6, -0);
    });

    test('dividing two negative numbers', () => {
        doDivisionTest(-12, -2, 6);
    });

    function doDivisionTest(x, y, expectedResult) {
        const result = operations.divide(x, y);

        expect(result).toBe(expectedResult);
    }    
});