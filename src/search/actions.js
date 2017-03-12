import * as actionTypes from "./types";

export function keywordChanged(keyword) {
  return {
    type: actionTypes.KEYWORD_CHANGED,
    payload: keyword,
  };
}

export function startSearch() {
  return {type: actionTypes.SEARCHING};
}

export function searchSuccess(photos) {
  return {
    type: actionTypes.SEARCH_COMPLETED,
    payload: photos,
  };
}

export function searchFailed() {
  return {
    type: actionTypes.SEARCHING_FAILED,
    payload: [],
  };
}

