import { combineReducers, createStore } from "redux";

const reducers = combineReducers({
  // All my reducers will be here
});

// store have all state in my project(redux store)
const store = createStore(reducers);

export default store;
