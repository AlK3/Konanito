import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  topPage: 1,
}

const pageSlice = createSlice({
  name: 'page',
  initialState: initialState,
  reducers: {
    updatePage(state, action) {
      state.topPage = action.payload;
    },
  },
});

export const { updatePage } = pageSlice.actions;
export const pageReducer = pageSlice.reducer;