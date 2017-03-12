import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import searchReducer from "../search/reducers";
import createSagaMiddleware from 'redux-saga'

import {watchKeywordChange} from "../search/operations";

export default function configureStore(initialState) {
  const rootReducer = combineReducers({
    search: searchReducer
  });

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
      rootReducer,
      initialState,
      composeEnhancers(
        applyMiddleware(sagaMiddleware),
      )
  );

  sagaMiddleware.run(watchKeywordChange)


  return store;
}
