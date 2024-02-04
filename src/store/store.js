// Store for the reduxjs application
import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./reducers/countReducer";
import movementsReducer from "./reducers/movementReducer";

const storeToStorage = (props) => {
  return (next) => (action) => {
    const result = next(action);

    // will do execute line after the execution of the action
    // console.log(props.getState());

    // Store the values in the localStorage after action execution
    localStorage.setItem("redux_state", JSON.stringify(props.getState()));

    return result;
  };
};

const store = configureStore({
  reducer: {
    countReducer,
    movementsReducer,
  },
  devTools: true, // enable dev tools extension should be false for production
  middleware: (defaultMiddlewareFn) => [
    ...defaultMiddlewareFn(),
    storeToStorage,
  ],
  preloadedState: (function () {
    if (localStorage.getItem("redux_state") !== null) {
      // Check if localStorage state is available, if so load it as the initial state for the store value
      return JSON.parse(localStorage.getItem("redux_state"));
    }
  })(),
});

export default store;
