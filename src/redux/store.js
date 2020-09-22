import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const store = configureStore({
  reducer: { contacts: rootReducer },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;

// -----------------------------------

// import { createStore } from "redux";
// import { combineReducers } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import contactsReducer from "./reducers";

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
// });

// const store = createStore(rootReducer, composeWithDevTools());

// export default store;
