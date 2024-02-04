import { createSlice } from "@reduxjs/toolkit";
import initialState from "../initialState";

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: initialState.favorites,
  reducers: {
    setFavorite: (state, { payload }) => {
      const existingCar = state.find((car) => car.id === payload.id);
      if (!existingCar) {
        state.push(payload);
      }
    },
    clearFavorite: (state, { payload }) => {
      const index = state.findIndex((car) => car.id === payload.id);
      if (index !== -1) {
        return state.filter((car) => car.id !== payload.id);
      }
    },
  },
});
export const favoritesReducer = favoritesSlice.reducer;
export const { setFavorite, clearFavorite } = favoritesSlice.actions;
