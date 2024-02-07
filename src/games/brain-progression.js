import { getRandomIntegerValue } from '../utils/math.js';
import game from '../index.js';

export default () => {
  game('What number is missing in the progression?', () => {
    const progression = [];

    const pLength = getRandomIntegerValue(5, 10);
    const initialValue = getRandomIntegerValue();
    const step = getRandomIntegerValue();

    for (let i = 0; i < pLength; i += 1) {
      progression.push(initialValue + step * i);
    }

    const answerIndex = getRandomIntegerValue(0, pLength - 1);
    const answer = progression[answerIndex];
    progression[answerIndex] = '..';

    return { title: `${progression.join(' ')}`, answer: String(answer) };
  });
};
