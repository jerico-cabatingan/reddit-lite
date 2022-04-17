import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import subRedditsSlice from '../subReddits/subRedditsSlice';

// action to load posts 
// will declare async thunk action creator to retrieve data from the api
// will include loading and error states

// action to filter post via search term
// action to filter posts via subreddit

// rememeber to export relevant selectors and action creators
// hook up the reducer to the store

export const getPosts = createAsyncThunk('feed/getPosts',
  async (arg, ThunkAPI) => {
    const response = await fetch('url');
    const json = await response.json() ;
    return json;
  }
)

const feedSlice = createSlice({
  name: 'feed',
  initialState: {
    posts: {},
    isLoading: false,
    loadingFailed: false
  },
  reducers: {
    filterBySearchTerm: (state, action) => {},
    filterBySubReddit: (state, action) => {}
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {

      })
      .addCase(getPosts.fulfilled, (state, action) => {

      })
      .addCase(getPosts.rejected, (state) => {
        
      })
    }
})

export const {filterBySearchTerm, filterBySubReddit} = feedSlice.actions;
export const loadingFailed = state => state.feed.loadingFailed;
export const isLoading = state => state.feed.isLoading;
export const selectPosts = state => state.feed.posts;
export default feedSlice.reducer;