import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://6526fd9c917d673fd76d5094.mockapi.io";

export const getItems = createAsyncThunk(
  "items/getPerPage",
  async ({ currentPage, limit }, thunkAPI) => {
    try {
      const response = await axios.get("/adverts", {
        params: {
          p: currentPage,
          l: limit,
        },
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const getAllItems = createAsyncThunk(
  "items/getAllItems",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/adverts");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
