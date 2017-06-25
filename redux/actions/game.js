import actionTypes from '../actionTypes';

const TICK_INTERVAL = 100;
const LEVEL_LENGTHS = [0, 5, 10, 5, 10, 5];
const LEVELS_LENGTH = LEVEL_LENGTHS.reduce((sum, len) => sum + len);

const randomDigit = () => Math.trunc(Math.random() * 10);

const randomDigits = () => [randomDigit(), randomDigit(), randomDigit(), randomDigit()];

const classify = (digits) => {
  const sum = digits.reduce((acc, digit) => acc + digit, 0);
  const nonzero = digits.reduce((acc, digit) => (digit ? acc + 1 : acc), 0);
  if (nonzero < 2) return 0;
  if (sum <= 9) return (nonzero <= 2) ? 1 : 2;
  switch (nonzero) {
    case 2: return 3;
    case 3: return 4;
    default: return 5;
  }
};

const correctResult = (digits) => digits.reduce((sum, digit) => {
  const newSum = sum + digit;
  return newSum <= 9 ? newSum : newSum - 9;
}, 0);

const generateSet = () => {
  let addedNumbers = 0;
  const digitsClasses = [[], [], [], [], [], []];
  do {
    const digits = randomDigits();
    const cls = classify(digits);
    if (digitsClasses[cls].length < LEVEL_LENGTHS[cls]) {
      digitsClasses[cls].push(digits);
      addedNumbers++;
    }
  } while (addedNumbers < LEVELS_LENGTH);

  return digitsClasses.reduce((acc, level) => acc.concat(level));
};

let tickHandle = null;
let digitsQueue = [];

const uninstallTick = () => {
  if (!tickHandle) return false;
  clearInterval(tickHandle);
  tickHandle = false;
  return true;
};

const installTick = (dispatch, getState) => {
  if (tickHandle) return false;
  tickHandle = setInterval(() => {
    const { game } = getState();
    if (game.timeRemaiming >= TICK_INTERVAL) {
      dispatch({ type: actionTypes.TICK, payload: TICK_INTERVAL });
    } else {
      uninstallTick();
      dispatch({ type: actionTypes.GAMEEND });
    }
  }, TICK_INTERVAL);
  return true;
};

const renewDigitsAt = (index) => {
  // generate new -- level 6
  let digits = randomDigits();
  while (classify(digits) < 2) {
    digits = randomDigits();
  }
  digitsQueue[index] = digits;
  return digits;
};

const getDigitsAt = (index) => {
  if (index < LEVELS_LENGTH) {
    return digitsQueue[index];
  }
  // out of pre-generated digits,
  return renewDigitsAt(index);
};

const levelForIndex = (index) => {
  let level = 1;
  let reminder = index;
  while ((level < LEVEL_LENGTHS.length) && (LEVEL_LENGTHS[level] < reminder)) {
    reminder -= LEVEL_LENGTHS[level];
    level++;
  }
  return level;
};

export const gameStart = ({ useJoker, extraTime }) => (dispatch, getState) => {
  digitsQueue = generateSet();
  const state = getState();
  const digits = getDigitsAt(0);

  const result = dispatch({
    type: actionTypes.GAMESTART,
    payload: {
      useJoker,
      extraTime,
      digits,
    },
  });

  installTick(dispatch, getState);

  return result;
};

export const answer = (number) => (dispatch, getState) => {
  const { game } = getState();
  const correct = correctResult(game.digits);
  if (correct === number) {
    const answered = game.answered + 1;
    return dispatch({
      type: actionTypes.ADVANCE,
      payload: {
        answered,
        level: levelForIndex(answered + 1),
        digits: getDigitsAt(answered),
      },
    });
  }
};

export const pause = () => (dispatch) => {
  uninstallTick();
  return dispatch({ type: actionTypes.PAUSE });
};

export const resume = () => (dispatch, getState) => {
  const { game } = getState();
  installTick(dispatch, getState);
  return dispatch({
    type: actionTypes.RESUME,
    payload: {
      digits: renewDigitsAt(game.answered),
    },
  });
};
