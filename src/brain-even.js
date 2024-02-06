import {
  greet,
  requestName,
  congratulate,
  showTask,
  showQuestion,
  requestAnswer,
  reportSuccess,
  reportError,
  suggestRetry,
} from './cli.js';

export default () => {
  greet();

  const name = requestName();

  showTask('Answer "yes" if the number is even, otherwise answer "no".');

  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
    const number = parseInt(Math.random() * 200 - 100, 10);
    const isNumberEven = number % 2 === 0;
    const correctAnswer = isNumberEven ? 'yes' : 'no';

    showQuestion(number);

    const answer = requestAnswer();

    if (answer !== correctAnswer) {
      reportError(answer, correctAnswer);
      suggestRetry(name);
      break;
    }

    reportSuccess();
    correctAnswersCount += 1;
  }

  if (correctAnswersCount === 3) {
    congratulate(name);
  }
};
