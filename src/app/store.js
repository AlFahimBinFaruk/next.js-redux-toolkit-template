import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../features/counter";
export const store = configureStore({
  reducer: {
    counter: countReducer,
  },
});
