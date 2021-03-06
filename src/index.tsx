import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";

import trendingMovies from "./store/reducers/trendingMovies";
import getMovieDetails from "./store/reducers/getMovie";
import favouriteMovies from "./store/reducers/favouriteMovies";
import favouriteMoviesId from "./store/reducers/favouriteMoviesId";
import searchMovies from "./store/reducers/searchMovies";
import languageSelect from './store/reducers/languageSelect';
import recommendedMovies from './store/reducers/recommendedMovies';
import { watchTrending, getMovie, watchFavourites, watchFavouriteIds, watchSearch, watchRecommended } from "./store/sagas";

const rootReducer = combineReducers({
  trendingMovies,
  getMovieDetails,
  favouriteMovies,
  favouriteMoviesId,
  searchMovies,
  languageSelect,
  recommendedMovies
});
	
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
 applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(watchTrending);
sagaMiddleware.run(getMovie);
sagaMiddleware.run(watchFavourites);
sagaMiddleware.run(watchFavouriteIds);
sagaMiddleware.run(watchSearch);
sagaMiddleware.run(watchRecommended);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
