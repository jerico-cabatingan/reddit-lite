import { configureStore } from '@reduxjs/toolkit';
import { feedSlice } from '../features/feed/feedSlice';
import { subRedditSlice } from '../features/subReddits/subRedditsSlice';

export const store = configureStore({
  reducer: {
    feed: feedReducer,
    subReddits: subRedditsReducer
  },
});
