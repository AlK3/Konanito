import { Action } from "../consts";

export const loadTopData = (page: number) => {
  return {
    type: Action.LOAD_TOP_DATA,
    page,
  };
}

export const loadTitleData = (id: string) => {
  return {
    type: Action.LOAD_TOP_DATA,
    id,
  };
}