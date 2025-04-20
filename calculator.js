function hexCalculator(num1, num2, operator) {
    
    const hexRegex = /^[0-9A-Fa-f]{1,2}$/;

    if (!hexRegex.test(num1) || !hexRegex.test(num2)) {
        alert('Invalid hexadecimal number. Please enter a valid hex number (1-2 digits).');
        return;
    }

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
            if (decimalNum2 === 0) {
                alert('Division by zero is not allowed.');
                return;
            }
            result = Math.floor(decimalNum1 / decimalNum2); 
            break;
        default:
            throw new Error('Invalid operator');
    }

    if (result < 0) {
        alert('Result is negative. Please enter valid hex numbers.');
        return;
    }

    // Convert the result back to hex and return it
    return result.toString(16).toUpperCase();
}

module.exports = hexCalculator;     