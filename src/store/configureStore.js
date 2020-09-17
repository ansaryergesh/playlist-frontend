import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Singers } from '../reducers/singerReducer';
import { Genres } from '../reducers/genreReducer';
import { Musics } from '../reducers/musicReducer';
export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      singer: Singers,
      genres: Genres,
      musics: Musics
    }),
    applyMiddleware(thunk, logger),
  );

  return store;
};