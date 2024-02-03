// Store for the reduxjs application
import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./reducers/countReducer";

const store = configureStore({
  reducer: {
    countReducer,
  },
  devTools: true, // enable dev tools extension should be false for production
});

export default store;
