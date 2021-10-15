import { Action } from "../enums";

export const loadTopData = (page: number) => {
  return {
    type: Action.LOAD_TOP_DATA,
    page,
  };
}

export const loadTitleData = (id: string) => {
  return {
    type: Action.LOAD_TITLE_DATA,
    id,
  };
}

export const loadSearchData = (request: string) => {
  return {
    type: Action.LOAD_SEARCH_DATA,
    request
  };
}

export const loadTranslateData = (text: string) => {
  return {
    type: Action.LOAD_TRANSLATE_DATA,
    text,
  };
}