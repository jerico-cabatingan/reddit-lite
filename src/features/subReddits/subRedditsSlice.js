// will declare async thunk action creator to retrieve data from the api
// will include loading and error states
// rememeber to export relevant selectors and action creators
// hook up the reducer to the store

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const getSubreddits = createAsyncThunk('subreddits/getSubreddits',
  async () => {
    const response = await fetch(`https://www.reddit.com/subreddits.json`);
    const json = await response.json();
    
    return json.data.children.map((subreddit) => subreddit.data);
});


const subredditsSlice = createSlice({
  name: 'subreddits',
  initialState: {
    subreddits: {},
    isLoading: false,
    didNotLoad: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSubreddits.pending, state => {
        state.isLoading = true;
        state.didNotLoad = false;
      })
      .addCase(getSubreddits.fulfilled, (state, action) => {
        state.isLoading = false;
        state.didNotLoad = false;
        state.subreddits = action.payload;
      })
      .addCase(getSubreddits.rejected, state => {
        state.isLoading = false;
        state.didNotLoad = true;
      })
  }
})

export const didNotLoad = state => state.subreddits.didNotLoad;
export const isLoading = state => state.subreddits.isLoading;
export const selectSubreddits = state => state.subreddits.subreddits; 
export default subredditsSlice.reducer;
