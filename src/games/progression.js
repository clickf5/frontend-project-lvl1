import { randNumGenerator, getParamByCommand } from '..';
import gameEngine from '../game-engine';

const gameDescription = 'What number is missing in the progression?';

/**
 * Returns a member of an arithmetic progression by position
 * @param {number} startElementValue
 * @param {number} increment
 * @param {number} position
 * @returns {number}
 */
const makeTrueAnswer = (startElementValue, increment, position) => (
  startElementValue + (position - 1) * increment
);

/**
 * Returns a sequence of arithmetic progression numbers. Replacing one position with '..'
 * @param {number} startElementValue
 * @param {number} increment
 * @param {number} secretElementPosition
 * @param {number} progressionLength
 * @returns {string}
 */
const makeQuestion = (startElementValue, increment, secretElementPosition, progressionLength) => {
  let sequence = '';

  for (let i = 1; i < progressionLength + 1; i += 1) {
    const member = (i !== secretElementPosition) ? `${makeTrueAnswer(startElementValue, increment, i)}` : '..';
    sequence = `${sequence} ${member}`;
  }

  return sequence;
};

const makeGameRound = () => {
  const sequenceStart = randNumGenerator(1, 100);

  const increment = randNumGenerator(1, 100);

  const secretPosition = randNumGenerator(1, 10);

  const question = makeQuestion(sequenceStart, increment, secretPosition, 10);

  const trueAnswer = makeTrueAnswer(sequenceStart, increment, secretPosition).toString();

  return getParamByCommand(question, trueAnswer);
};

export default () => {
  gameEngine(gameDescription, makeGameRound);
};
