import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ROUTE_SPLASH, ROUTE_GAME } from '../../../utils/routes';
import Game from '../../game/game';
import Splash from '../../splash/splash';
import './App.css';

function App() {
  return (
    <Switch>
      <Route path={ROUTE_GAME}>
        <Game />
      </Route>
      <Route path={ROUTE_SPLASH}>
        <Splash/>
      </Route>
    </Switch>
  );
}

export default App;
