import { createSlice } from "@reduxjs/toolkit";

const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    comments: {},
    isLoading: false,
    didNotLoad: false
  },
  reducers: {},
})