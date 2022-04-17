import { configureStore } from '@reduxjs/toolkit';
import feedReducer from '../features/feed/feedSlice';
import subredditsReducer from '../features/subreddits/subredditsSlice';
import commentsReducer from '../features/comments/commentsSlice';

export const store = configureStore({
  reducer: {
    feed: feedReducer,
    subreddits: subredditsReducer,
    comments: commentsReducer,
  },
});