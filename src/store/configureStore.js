import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import searchReducer from "../search/reducers";

export default function configureStore(initialState) {
  const rootReducer = combineReducers({
    search: searchReducer
  });

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
      rootReducer,
      initialState,
      composeEnhancers(
        applyMiddleware(thunk),
      )
  );

  return store;
}
