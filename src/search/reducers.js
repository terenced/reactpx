import * as actions from "./types";

const initialState = {
  keyword: '',
  photos: [],
  isSearching: false,
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case actions.KEYWORD_CHANGED:
      return {...state, keyword: action.payload};
    case actions.SEARCHING:
      return {...state, isSearching: true};
    case actions.SEARCH_COMPLETED:
      return {...state, photos: action.payload, isSearching: false};
    default:
      return state
  }
}
