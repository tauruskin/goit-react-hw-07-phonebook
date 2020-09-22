import { INPUT_CHANGE, INPUT_RESET } from '../constants/formConstants';

const initialState = '';

export default (state = initialState, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return action.payload;

    case INPUT_RESET:
      return '';

    default:
      return state;
  }
};
