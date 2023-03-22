import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NewsState {
  newsNumber: number;
}

const initialState: NewsState = {
  newsNumber: 0,
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNews: (state, action: PayloadAction<number>) => {
      state.newsNumber = action.payload;
    },
  },
});

export const { setNews } = newsSlice.actions;
export default newsSlice.reducer;
