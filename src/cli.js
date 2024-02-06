import readlineSync from 'readline-sync';

const greet = () => {
  console.log('Welcome to the Brain Games!');
};

const requestName = () => {
  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);

  return name;
};

const congratulate = (name = '') => {
  console.log(`Congratulations, ${name}!`);
};

const showTask = (text) => console.log(text);

const showQuestion = (text = '') => {
  console.log(`Question: ${text}`);
};

const requestAnswer = () => readlineSync.question('Your answer: ');

const reportSuccess = () => console.log('Correct!');

const reportError = (answer = '', correctAnswer = '') => {
  console.log(
    `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
  );
};

const suggestRetry = (name) => {
  console.log(`Let's try again, ${name}!`);
};

export {
  greet,
  requestName,
  congratulate,
  showTask,
  showQuestion,
  requestAnswer,
  reportSuccess,
  reportError,
  suggestRetry,
};
