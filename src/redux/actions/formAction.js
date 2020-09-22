import { INPUT_CHANGE, INPUT_RESET } from '../constants/formConstants';

export const inputHandler = e => ({
  type: INPUT_CHANGE,
  payload: e.target.value,
});

export const inputReset = () => ({
  type: INPUT_RESET,
});
