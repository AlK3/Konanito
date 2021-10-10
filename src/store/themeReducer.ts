import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  theme: 'dark',
}

const themeSlice = createSlice({
  name: 'theme',
  initialState: initialState,
  reducers: {
    setTheme(state) {
      state.theme = 'dark' === state.theme ? 'light' : 'dark';
    }
  },
});

export const { setTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;