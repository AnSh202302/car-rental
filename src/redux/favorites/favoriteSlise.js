import { createSlice } from "@reduxjs/toolkit";
import initialState from "../initialState";

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: initialState.favorites,
  reducers: {
    setFavorite: (state, { payload }) => {
      console.log("firstState", state);
      state.push(payload);
    },
    clearFavorite: (state, { payload }) => {
      const index = state.indexOf(payload.id);
      console.log("claerIndex", index);
      console.log("index", index);
      state.splice(index, 1);
    },
  },
});
export const favoritesReducer = favoritesSlice.reducer;
export const { setFavorite, clearFavorite } = favoritesSlice.actions;
