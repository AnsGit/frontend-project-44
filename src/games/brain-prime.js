import { getRandomIntegerValue } from '../utils/math.js';
import game from '../index.js';

export default () => {
  game('Answer "yes" if given number is prime. Otherwise answer "no".', () => {
    const a = getRandomIntegerValue();

    let answer = 'yes';

    if (a <= 1) {
      answer = 'no';
    } else {
      for (let i = 2; i <= Math.sqrt(a); i += 1) {
        if (a % i === 0) {
          answer = 'no';
          break;
        }
      }
    }

    return { title: `${a}`, answer: String(answer) };
  });
};
