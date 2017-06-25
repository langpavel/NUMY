import getInitialState from '../getInitialState';
import actionTypes from '../actionTypes';

// LOGIC


// ACTION CREATORS
export default function gameReducer(state = getInitialState().game, action) {
  const { type, payload = {} } = action;
  switch (type) {
    case actionTypes.GAMESTART: {
      return {
        // ...state,
        running: true,
        paused: false,
        answered: 0,
        level: 1,
        digits: payload.digits,
        timeRemaiming: payload.extraTime ? 70000 : 60000,
        jokerAvailable: payload.useJoker,
      };
    }

    case actionTypes.ADVANCE: {
      return {
        ...state,
        answered: payload.answered,
        level: payload.level,
        digits: payload.digits,
      };
    }

    case actionTypes.TICK: {
      const timeRemaiming =
        (state.running && !state.paused) ? (
          state.timeRemaiming - payload
        ) : (
          state.timeRemaiming
        );
      return {
        ...state,
        timeRemaiming,
      };
    }

    case actionTypes.PAUSE: {
      return {
        ...state,
        paused: true,
      };
    }

    case actionTypes.RESUME: {
      return {
        ...state,
        paused: false,
        digits: payload.digits,
      };
    }

    case actionTypes.GAMEEND: {
      return {
        ...state,
      };
    }

    default: {
      return state;
    }
  }
}
