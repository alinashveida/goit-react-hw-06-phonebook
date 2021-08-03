import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducer";

// const reducer = (state = {}, action) => state

// const rootReducer = combineReducers({
//   contacts: {
//     items: [],
//     filter: '',
//   },
// })

const rootReducer = combineReducers({
  contacts: reducer,
});

const store = createStore(reducer, composeWithDevTools());

export default store;
