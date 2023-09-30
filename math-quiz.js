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

    return {
        question: `${num1} ${operator} ${num2}`,
        answer: answer
    };
}

function startMathQuiz() {
    let score = 0;
    const totalQuestions = 5; // Set the number of questions

    for (let i = 0; i < totalQuestions; i++) {
        let problem = generateMathProblem();
        let userAnswer = prompt(`Question ${i + 1}: What is ${problem.question}?`);

        if (parseFloat(userAnswer) === problem.answer) {
            score++;
            console.log(`Correct!`);
        } else {
            console.log(`Incorrect. The correct answer is ${problem.answer}.`);
        }
    }