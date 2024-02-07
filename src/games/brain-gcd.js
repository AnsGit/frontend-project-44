import { getRandomIntegerValue } from '../utils/math.js';
import game from '../index.js';

export default () => {
  game('Find the greatest common divisor of given numbers.', () => {
    const a = getRandomIntegerValue();
    const absoluteA = Math.abs(a);

    const b = getRandomIntegerValue();
    const absoluteB = Math.abs(b);

    let dividend = Math.max(absoluteA, absoluteB);
    let divisor = Math.min(absoluteA, absoluteB);

    let remainder = null;

    while (remainder === null || remainder !== 0) {
      remainder = dividend % divisor;

      if (remainder !== 0) {
        dividend = divisor;
        divisor = remainder;
      }
    }

    return { title: `${a} ${b}`, answer: String(divisor) };
  });
};
