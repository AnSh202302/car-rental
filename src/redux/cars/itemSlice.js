import { createSlice } from "@reduxjs/toolkit";
import { getItems } from "./operations";
import initialState from "../initialState";

const handlePending = (state) => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const itemsSlice = createSlice({
  name: "Card",
  initialState: initialState.cars,
  extraReducers: (builder) => {
    builder
      .addCase(getItems.pending, handlePending)
      .addCase(getItems.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = payload;
      })
      .addCase(getItems.rejected, handleRejected);
  },
});
export const itemsReducer = itemsSlice.reducer;
