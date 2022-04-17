// rememeber to export relevant selectors and action creators
// hook up the reducer to the store

import { createSlice } from "@reduxjs/toolkit";

// reducer expects to recieve a string action payload

const searchSlice = createSlice({
  name: 'search',
  initialState: '',
  reducers: {
    setSearchTerm: (state, action) => {
      state = action.payload; 
    }
  }
});


export const {setSearchTerm} = searchSlice.actions
export default searchSlice.reducer

// might not need a search slice !!!