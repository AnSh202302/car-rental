import { createSlice } from "@reduxjs/toolkit";
import initialState from "../initialState";

export const selectedSlice = createSlice({
  name: "selected",
  initialState: initialState.selected,
  reducers: {
    setSelected: (state, { payload }) => (state = payload),
  },
});
export const selectedReducer = selectedSlice.reducer;
export const { setSelected } = selectedSlice.actions;
