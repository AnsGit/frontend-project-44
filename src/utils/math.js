const getRandomIntegerValue = (min = -100, max = 100) => {
  const value = Math.round(Math.random() * (max - min) + min, 10);

  if (value === 0) return Math.abs(0);

  return value;
};

const getRandomOperation = (operations = ['+', '-', '*', '/']) => {
  const i = Math.abs(parseInt(Math.random() * operations.length, 10));

  return operations[i];
};

export { getRandomIntegerValue, getRandomOperation };
