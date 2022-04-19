import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// async action creator fetches json data from url, will be dispatched inside
// the subreddit and search component
export const getSubredditPosts = createAsyncThunk('feed/getSubredditPosts', 
  async (subreddit) => {
    const response = await fetch(`https://www.reddit.com${subreddit}.json?limit=25`);
    const json = await response.json();
    return json.data.children.map((post) => post.data);
})


const feedSlice = createSlice({
  name: 'feed',
  initialState: {
    posts: [],
    subredditFilter: '/r/pics/',
    searchFilter: '',
    showComments: false, 
    isLoading: false,
    didNotLoad: false,
    
  },
  reducers: {
    filterBySearchTerm: (state, action) => {
      state.searchFilter = action.payload
    },
    filterBySubReddit: (state, action) => {
      state.subredditFilter = action.payload
    },
    showComments: (state) => {
      state.showComments = !state.showComments
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSubredditPosts.pending, (state) => {
        state.isLoading = true;
        state.didNotLoad = false;
      })
      .addCase(getSubredditPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.didNotLoad = false;
        state.posts = action.payload;
      })
      .addCase(getSubredditPosts.rejected, (state) => {
        state.isLoading = false;
        state.didNotLoad = true;
      })
    }
})

export const {filterBySearchTerm, filterBySubReddit, showComments} = feedSlice.actions;
export const selectPosts = state => state.feed.posts; 
export const selectDidNotLoad = state => state.feed.didNotLoad;
export const selectIsLoading = state => state.feed.isLoading;
export const selectSearchFilter = state => state.feed.searchFilter;
export const selectSubredditFilter = state => state.feed.subredditFilter;
export const selectShowComments = state => state.feed.showComments;
export default feedSlice.reducer;


