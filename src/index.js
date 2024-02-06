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

export default (task = '', getQuestion = () => {}) => {
  greet();

  const name = requestName();

  showTask(task);

  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
    const question = getQuestion();

    showQuestion(question.title);

    const answer = requestAnswer();

    if (answer !== question.answer) {
      reportError(answer, question.answer);
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
