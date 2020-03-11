import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

import './App.scss';

const App = () => {
  return (
    <Switch>
      <Route path='/' exact component={HomePage}
      />
      <Route path='/shop' component={ShopPage}
      />
    </Switch>
  );
}

export default App;
