import * as actions from "./types";

const initialState = {
  keyword: '',
  photos: [],
  isSearching: false,
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SEARCHING:
      return Object.assign({}, state, {
        keyword: action.payload,
        isSearching: true,
      })
    case actions.SEARCH_COMPLETED:
      return Object.assign({}, state, {
        photos: action.payload,
        isSearching: false,
      })
    default:
      return state
  }
}
