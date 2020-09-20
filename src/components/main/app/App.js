import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ROUTE_SPLASH, ROUTE_GAME } from '../../../utils/config/routes';
import Splash from '../../splash/splash';
import './App.css';

function App() {
  return (
    <Switch>
      <Route path={ROUTE_SPLASH}>
        <Splash/>
      </Route>
      <Route path={ROUTE_GAME}>
        
      </Route>
    </Switch>
  );
}

export default App;
