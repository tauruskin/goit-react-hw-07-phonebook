import { combineReducers } from 'redux';
import { items, filter } from './contactReducer';

export default combineReducers({
  items,
  filter,
});
