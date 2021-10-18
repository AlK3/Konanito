import { createSlice } from "@reduxjs/toolkit";

class DataItem {
  mal_id!: number;
  url!: string;
}

export class TopListItem extends DataItem {
  rank?: number;
  title!: string;
  image_url!: string;
  type!: string;
  episodes!: number;
  start_date!: string;
  end_date!: string;
  members!: number;
  score!: number;
}

export class SearchItem extends DataItem {
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

export class ReviewsItem extends DataItem {
  type!: {};
  helpful_count!: number;
  date!: string;
  reviewer!: {
    url: string;
    image_url: string;
    username: string;
    episodes_seen: number;
    scores: {
      overall: number;
      story: number;
      animation: number;
      sound: number;
      character: number;
      enjoyment: number;
    };
  };
  content!: string;
}

export class RecommendationsItem extends DataItem {
  image_url!: string;
  recommendation_count!: number;
  recommendation_url!: string;
  title!: string;
  url!: string;
}

export class Episode {
  aired!: string;
	episode_id!: number;
	filler!: boolean;
	forum_url!: string;
	recap!: boolean;
	title!: string;
	title_japanese!: string;
	title_romanji!: string;
	video_url!: string;
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
    background: string;
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
  reviewsData: {
    request_hash: string;
    request_cached: boolean;
    request_cache_expiry: number;
    reviews: ReviewsItem[];
  };
  episodesData: {
    episodes: Episode[];
    length: number;
    episodes_last_page: number;
		request_cache_expiry: number;
		request_cached: boolean;
		request_hash: string;
  }; 
  translateData: {
    translatedText: string;
  };
  recommendationsData: {
    recommendations: RecommendationsItem[];
    request_cache_expiry: number;
		request_cached: boolean;
		request_hash: string;
  };
}

const initialState = {
  topData: {},
  titleData: {},
  searchData: {},
  reviewsData: {},
  episodesData: {}, 
  translateData: {
    translatedText: '',
  },
  recommendationsData: {},
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
    updateReviewsData(state, action) {
      state.reviewsData = action.payload;
    },
    updateEpisodesData(state, action) {
      state.episodesData = action.payload;
    },
    updateTranslateData(state, action) {
      state.translateData = action.payload;
    },
    updateRecommendationsData(state, action) {
      state.recommendationsData = action.payload;
    },
  },
});

export const { updateTopData, updateTitleData, updateSearchData, updateReviewsData, updateEpisodesData, updateTranslateData, updateRecommendationsData } = dataSlice.actions;
export const dataReducer = dataSlice.reducer;