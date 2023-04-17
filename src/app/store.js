import { configureStore } from '@reduxjs/toolkit';
import redditReducer from '../../features/store/redditSlice';
import subRedditReducer from '../features/store/subRedditSlice';

export const store = configureStore({
  reducer: {
    reddit: redditReducer,
    subreddits: subRedditReducer
  },
});
