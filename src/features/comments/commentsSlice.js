import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getPostComments = createAsyncThunk('comments/getPostComments',
  async (permalink) => {
    const response = await fetch(`https://www.reddit.com${permalink}.json?`);
    const json = await response.json();
   
    return json[1].data.children.map((subreddit) => subreddit.data);
});

const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    comments: {},
    commentsShowing: false,
    isLoading: false,
    didNotLoad: false,
  },
  reducers: {
    toggleComments: (state, action) => {
      state.commentsShowing = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(getPostComments.pending, state => {
      state.isLoading = true;
      state.didNotLoad = false;
    })
    .addCase(getPostComments.fulfilled, (state, action) => {
      state.isLoading = false;
      state.didNotLoad = false;
      state.comments = action.payload;
    })
    .addCase(getPostComments.rejected, state => {
      state.isLoading = false;
      state.didNotLoad = true;
    })
  }
});

export const { toggleComments } = commentsSlice.actions;
export const selectCommentsShowing = state => state.comments.commentsShowing
export const selectComments = state => state.comments.comments;
export const selectCommentsIsLoading = state => state.comments.isLoading;
export const selectCommentsDidNotLoad = state => state.comments.didNotLoad;
export default commentsSlice.reducer;