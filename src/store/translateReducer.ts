import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  translate: false,
}

export const translateSlice = createSlice({
  name: 'translate',
  initialState: initialState,
  reducers: {
    setTranslate(state, action) {
      state.translate = action.payload;
    },
  }
});

export const { setTranslate } = translateSlice.actions;
export const translateReducer = translateSlice.reducer;