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

export class SearchItem {
  mal_id!: number;
  url!: string;
  image_url!: string;
  title!: string;
  airing!: boolean;
  synopsis!: string;
  type!: string;
  episodes!: number;
  score!: number;
  start_date!: string;
  end_date!: string;
  members!: number;
  rated!: string;
}

interface IData {
  topData: {
    request_hash: string;
    request_cached: boolean;
    request_cache_expiry: number;
    top: TopListItem[];
  };
  titleData: {
    aired: {};
    airing: boolean;
    broadcast: string;
    demographics: [];
    duration: string;
    ending_themes: [];
    episodes: number;
    explicit_genres: [];
    external_links: [];
    favorites: number;
    genres: [];
    image_url: string;
    licensors: [];
    mal_id: number;
    members: number;
    opening_themes: [];
    popularity: number;
    premiered: string;
    producers: [];
    rank: number;
    rating: string;
    related: {};
    request_cache_expiry: number;
    request_cached: boolean;
    request_hash: string;
    score: number;
    scored_by: number;
    source: string;
    status: string;
    studios: [];
    synopsis: string;
    themes: [];
    title: string;
    title_english: string;
    title_japanese: string;
    title_synonyms: [];
    trailer_url: string;
    type: string;
    url: string;
  };
  searchData: {
    request_hash: string;
    request_cached: boolean;
    request_cache_expiry: number;
    results: SearchItem[];
  };
  translateData: {
    translatedText: string;
  };
}

const initialState = {
  topData: {},
  titleData: {},
  searchData: {},
  translateData: {
    translatedText: '',
  },
} as IData

const dataSlice = createSlice({
  name: 'data',
  initialState: initialState,
  reducers: {
    updateTopData(state, action) {
      state.topData = action.payload;
    },
    updateTitleData(state, action) {
      state.titleData = action.payload;
    },
    updateSearchData(state, action) {
      state.searchData = action.payload;
    },
    updateTranslateData(state, action) {
      state.translateData = action.payload;
    },
  },
});

export const { updateTopData, updateTitleData, updateSearchData, updateTranslateData } = dataSlice.actions;
export const dataReducer = dataSlice.reducer;