import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';

import './App.scss';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

const App = () => {
  return (
    <Switch>
      <Route path='/'
        exact
        component={HomePage}
      />
      <Route path='/hats'
        component={HatsPage}
      />
    </Switch>
  );
}

export default App;
