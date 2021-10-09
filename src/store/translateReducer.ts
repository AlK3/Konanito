import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  translate: false,
}

export const translateSlice = createSlice({
  name: 'translate',
  initialState: initialState,
  reducers: {
    setTranslate(state) {
      state.translate = !state.translate;
    },
  }
});

export const { setTranslate } = translateSlice.actions;
export const translateReducer = translateSlice.reducer;