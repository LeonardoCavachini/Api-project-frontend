import React from 'react';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import GlobalStyle from './style/GlobalStyle';
import Provider from './context/Provider';
import Login from './pages/Login/index';
import Main from './pages/Main';
import Characters from './pages/characters';
import Register from './pages/Register';
import Profile from './pages/profile';
import Comics from './pages/Comics';
import Favorites from './pages/Favorites';
import ComicsById from './pages/comicsById';
import CharactersById from './pages/charactersById';
import CharactersFavorites from './pages/favCharacters';
import ComicsFavorites from './pages/favComics';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <GlobalStyle />
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/favorites" component={Favorites} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/characters-fav" component={CharactersFavorites} />
          <Route exact path="/comics-fav" component={ComicsFavorites} />
          <Route exact path="/characters" component={Characters} />
          <Route exact path="/comics" component={Comics} />
          <Route path="/profile/:id" component={Profile} />
          <Route path="/comics/:id" component={ComicsById} />
          <Route path="/characters/:id" component={CharactersById} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
