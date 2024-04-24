import { createSlice } from "@reduxjs/toolkit";

const initialState = { loader: false };

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setLoader(state, action) {
      state.loader = action.payload;
    },
  },
});

export const uiactions = uiSlice.actions;

export default uiSlice.reducer;
