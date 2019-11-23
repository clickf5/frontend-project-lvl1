import { randNumGenerator, gameEngine } from '..';

const gameDescription = 'What is the result of the expression?';

const gameTrueAnswer = (num1, num2, operand) => {
  switch (operand) {
    case '-':
      return (num1 - num2);
    case '+':
      return (num1 + num2);
    default:
      return (num1 * num2);
  }
};

const randOperandGenerator = () => {
  const variant = randNumGenerator(1, 3);
  switch (variant) {
    case 1:
      return '-';
    case 2:
      return '+';
    default:
      return '*';
  }
};

const gameProperties = () => {
  const num1 = randNumGenerator(1, 100);

  const num2 = randNumGenerator(1, 100);

  const operand = randOperandGenerator();

  const question = `${num1} ${operand} ${num2}`;

  const trueAnswer = gameTrueAnswer(num1, num2, operand);

  return (command) => {
    switch (command) {
      case 'getQuestion':
        return question;
      case 'getTrueAnswer':
        return `${trueAnswer}`;
      default:
        return false;
    }
  };
};

const game = () => {
  gameEngine(gameDescription, gameProperties);
};

export default game;
