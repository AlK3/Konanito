import { createSlice } from "@reduxjs/toolkit";

export class TopListItem {
  mal_id!: number;
  rank!: number;
  title!: string;
  url!: string;
  image_url!: string;
  type!: string;
  episodes!: number;
  start_date!: string;
  end_date!: string;
  members!: number;
  score!: number;
}

interface ITopData {
  topData: {
    request_hash: string;
    request_cached: boolean;
    request_cache_expiry: number;
    top: TopListItem[];
  }
}

const initialState = {
  topData: {},
} as ITopData

export const dataSlice = createSlice({
  name: 'data',
  initialState: initialState,
  reducers: {
    updateTopData(state, action) {
      state.topData = action.payload;
    },
  }
});

export const { updateTopData } = dataSlice.actions;
export const dataReducer = dataSlice.reducer;