import { configureStore } from "@reduxjs/toolkit";

import newsReducer from "../features/news/newsSlice";
import layoutReducer from "../features/layout/layoutSlice";

export const store = configureStore({
  reducer: {
    news: newsReducer,
    layout: layoutReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
