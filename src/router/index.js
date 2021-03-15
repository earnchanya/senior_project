import React from 'react';
import Home from '../pages/Home'
import Search from '../pages/Search'
import NoResults from '../pages/NoResults'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const Routes = (props) => (
  <Router>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/results' component={Search} />
      <Route exact path='/NotFound' component={NoResults} />
    </Switch>
  </Router>
);

export default Routes;
