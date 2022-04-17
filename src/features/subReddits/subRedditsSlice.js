// will declare async thunk action creator to retrieve data from the api
// will include loading and error states
// rememeber to export relevant selectors and action creators
// hook up the reducer to the store

import { createSlice } from '@reduxjs/toolkit';


export const synchronousOuterFunction = () => {
  return async (arg) => {
    const response = await fetch('reddit/api');
    const json = await response.json();
    dispatch(loadSubReddits(json));
  }
};

const subRedditsSlice = createSlice({
  name: 'subReddits',
  initialState: {
    subReddits: {},
    isLoading: false,
    loadingFailed: false,
  },
  reducers: {
    loadSubReddits: (state, action) => {}
  },
  extraReducers: {

  }
})

export const loadingFailed = state => state.subReddits.loadingFailed;
export const isLoading = state => state.subReddits.isLoading;
export const selectSubreddits = state => state.subReddits.subReddits; 
export const { loadSubReddits } = subRedditsSlice.actions; 
export default subRedditsSlice.reducer;