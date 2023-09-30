function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateMathProblem() {
    let num1 = generateRandomNumber(1, 10);
    let num2 = generateRandomNumber(1, 10);
    let operator = ['+', '-', '*'][generateRandomNumber(0, 2)];

    let answer;
    switch (operator) {
        case '+':
            answer = num1 + num2;
            break;
        case '-':
            answer = num1 - num2;
            break;
        case '*':
            answer = num1 * num2;
            break;
    }