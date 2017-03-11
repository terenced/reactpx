import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import createDebounce from 'redux-debounce'
import searchReducer from "../search/reducers";

export default function configureStore(initialState) {
  const rootReducer = combineReducers({
    search: searchReducer
  });

  const debounce = createDebounce({simple: 300});

  return createStore(
      rootReducer,
      initialState,
      applyMiddleware(thunk, debounce)
  );
}
