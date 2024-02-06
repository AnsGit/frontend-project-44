const getRandomIntegerValue = () => {
  const value = parseInt(Math.random() * 200 - 100, 10);

  if (value === 0) return Math.abs(0);

  return value;
};

const getRandomOperation = (operations = ['+', '-', '*', '/']) => {
  const i = Math.abs(parseInt(Math.random() * operations.length, 10));

  return operations[i];
};

export { getRandomIntegerValue, getRandomOperation };
