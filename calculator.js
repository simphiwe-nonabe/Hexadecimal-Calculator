function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    const input = display.value.split(/([\+\-\*\/])/);
    const num1 = input[0].trim();
    const operator = input[1] ? input[1].trim() : '';
    const num2 = input[2] ? input[2].trim() : '';

    if (num1 && num2 && operator) {
        const result = hexCalculator(num1, num2, operator);
        display.value = result || '';
    }
    else {
        alert('Please enter a valid expression in the format: num1 operator num2 (e.g., A + B)');
    }

}

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