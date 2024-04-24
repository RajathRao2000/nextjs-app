import todoreducers from "./todoSlice";
import { configureStore } from "@reduxjs/toolkit";
import uireducer from "./uiSlice"

const store = configureStore({
  reducer: { todo: todoreducers,ui: uireducer},
});

export default store;
