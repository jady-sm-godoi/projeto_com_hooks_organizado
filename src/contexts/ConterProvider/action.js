import * as type from './types';

export const incrementCounter = (dispatch, pass) => {
  dispatch({ type: type.INCREMENT_COUNTER, payload: pass });
};

export const decrementCounter = (dispatch, pass) => {
  dispatch({ type: type.DECREMENT_COUNTER, payload: pass });
};
