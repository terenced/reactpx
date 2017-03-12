import {call, put, takeLatest} from 'redux-saga/effects'
import {delay} from 'redux-saga'
import * as actions from './actions';
import {KEYWORD_CHANGED} from './types';
import photoSearch from "../api/PhotoSearch";

export function* fetchPhotos(action) {
  try {
    if (action.payload) {
      yield call(delay, 500);
      yield put(actions.startSearch());
      const photos = yield call(photoSearch, action.payload);
      yield put(actions.searchSuccess(photos));
    }
    else {
      yield put(actions.searchSuccess([]));
    }
  } catch(e) {
    yield put(actions.searchFailed());
  }
}

export function* watchKeywordChange() {
  yield takeLatest(KEYWORD_CHANGED, fetchPhotos);
}

