import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import singerReducer from '../reducers/singerReducer';
import genreReducer from '../reducers/genreReducer';
import musicReducer from '../reducers/musicReducer';
export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      singer: singerReducer,
      genres: genreReducer,
      musics: musicReducer
    }),
    applyMiddleware(thunk, logger),
  );

  return store;
};