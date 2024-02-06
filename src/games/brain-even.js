import { getRandomIntegerValue } from '../utils/math.js';
import game from '../index.js';

export default () => {
  game('Answer "yes" if the number is even, otherwise answer "no".', () => {
    const number = getRandomIntegerValue();
    const isNumberEven = number % 2 === 0;
    const answer = isNumberEven ? 'yes' : 'no';

    return { title: number, answer };
  });
};
