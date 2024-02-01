import { configureStore } from "@reduxjs/toolkit";
// import { filterReducer } from "./filterSlise";
import { itemsReducer } from "./cars/itemSlice";
import { favoritesReducer } from "./favorites/favoriteSlise";

export const store = configureStore({
  reducer: {
    cars: itemsReducer,
    favorites: favoritesReducer,
    // filter: filterReducer,
  },
});
