import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { News } from "../../types";

import countries from "../../countries.json";

interface NewsState {
  targetCountry: string;
  newsNumber: number;
  news: News;
}

const initialState: NewsState = {
  targetCountry: "pl",
  newsNumber: 0,
  news: [],
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNews: (state, action: PayloadAction<News>) => {
      state.newsNumber = action.payload.length;
      state.news = action.payload;
    },
    setTargetCountry: (state, action: PayloadAction<string>) => {
      state.targetCountry = Object.keys(countries).includes(action.payload)
        ? action.payload
        : "pl";
    },
  },
});

export const { setNews, setTargetCountry } = newsSlice.actions;
export default newsSlice.reducer;
