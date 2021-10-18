import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  topPage: 1,
  reviewsPage: 1,
}

const pageSlice = createSlice({
  name: 'page',
  initialState: initialState,
  reducers: {
    updateTopPage(state, action) {
      state.topPage = action.payload;
    },
    updateReviewsPage(state, action) {
      state.reviewsPage = action.payload;
    },
  },
});

export const { updateTopPage, updateReviewsPage } = pageSlice.actions;
export const pageReducer = pageSlice.reducer;