import todoreducers from "./todoSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: { todo: todoreducers },
});

export default store;
