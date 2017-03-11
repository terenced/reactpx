import * as actionTypes from "./types";
import photoSearch from "../api/PhotoSearch";

export function searchingPhotos(keyword) {
  return {
    type: actionTypes.SEARCHING,
    payload: keyword,
  };
}
export function photosLoaded(photos) {
  return {
    type: actionTypes.SEARCH_COMPLETED,
    payload: photos,
  };
}

export function photosFailedToLoad() {
  return {
    type: actionTypes.SEARCHING_FAILED,
    payload: [],
  };
}

export function searchPhotos(keyword) {
  return (dispatch) => {
    dispatch(searchingPhotos(keyword));
    photoSearch(keyword, 1, (data) => {
      if (data) {
        dispatch(photosLoaded(data.photos));
      }
      else {
        dispatch(photosFailedToLoad());
      }
    });
  }
}
// function searchPhotos(keyword) {
//   return (dispatch) => {
//     dispatch({type: actions.SEARCHING, payload: keyword});

//     photoSearch(keyword, 1, (photos) => {
//       if (photos) {
//         dispatch({type: actions.SEARCHING_DONE, payload: photos});
//       }
//       else {
//         dispatch({type: actions.SEARCHING_FAILED, payload: []});
//       }
//     }
//     );
//   };
// }

