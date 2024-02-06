import { getRandomIntegerValue, getRandomOperation } from '../utils/math.js';
import game from '../index.js';

export default () => {
  game('What is the result of the expression?', () => {
    const a = getRandomIntegerValue();
    const b = getRandomIntegerValue();

    const operation = getRandomOperation(['+', '-', '*']);

    const title = `${a} ${operation} ${b}`;

    let answer = 0;

    switch (operation) {
      case '+':
        answer = a + b;
        break;
      case '-':
        answer = a - b;
        break;
      case '*':
        answer = a * b;
        break;
      case '/':
        answer = a / b;
        break;
      default:
        answer = null;
    }

    return { title, answer: String(answer) };
  });
};
