import { combineReducers, createStore } from "redux";

import loginReducer from "./login";

const reducers = combineReducers({
  // All my reducers will be here
  loginReducer,
});

// store have all state in my project(redux store)
const store = createStore(reducers);

export default store;
