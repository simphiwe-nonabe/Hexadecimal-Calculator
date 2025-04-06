function hexCalculator(num1, num2, operator) {
    let result;

    // Convert hex strings to decimal numbers
    const decimalNum1 = parseInt(num1, 16);
    const decimalNum2 = parseInt(num2, 16);

    // Perform the operation based on the operator
    switch (operator) {
        case '+':
            result = decimalNum1 + decimalNum2;
            break;
        case '-':
            result = decimalNum1 - decimalNum2;
            break;
        case '*':
            result = decimalNum1 * decimalNum2;
            break;
        case '/':
            result = decimalNum1 / decimalNum2;
            break;
        default:
            throw new Error('Invalid operator');
    }

    // Convert the result back to hex and return it
    return result.toString(16).toUpperCase();
}

module.exports = hexCalculator;     