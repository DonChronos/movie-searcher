import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/header';

const Trending = React.lazy(() => import('./containers/Trending'));
const MoviePage = React.lazy(() => import('./containers/MoviePage'));
const Favourites = React.lazy(() => import('./containers/Favourites'));
const Search = React.lazy(() => import('./containers/Search'));

const App: React.FC = () => {
  return (
    <div>
      <Header />
	  <main>
	    <Suspense fallback={<h3>Loading...</h3>}>
		  <Switch>
		    <Route exact path='/' component={Trending} />
			<Route exact path='/movie/:id' component={MoviePage} />
			<Route exact path='/trending' component={Trending} />
			<Route exact path='/favourites' component={Favourites} />
			<Route exact path='/search' component={Search} />
		  </Switch>
		</Suspense>
	  </main>
	</div>
  );
}

export default App;
