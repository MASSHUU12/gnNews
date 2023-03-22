import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { News } from "../../types";

interface NewsState {
  newsNumber: number;
  news: News;
}

const initialState: NewsState = {
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
  },
});

export const { setNews } = newsSlice.actions;
export default newsSlice.reducer;
