import React from 'react';
import {
  Route, Redirect, BrowserRouter, Switch,
} from 'react-router-dom';
import PropTypes from 'prop-types';

import App from './App/index';
import About from './pages/About';
import Books from './pages/Books';
import Login from './pages/Login';
import Profile from './pages/Profile';

import { isAuthenticated } from './services/auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      isAuthenticated()
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    )}
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
    search: PropTypes.string,
    hash: PropTypes.string,
    key: PropTypes.string,
  }),
};

const Routes = () => (
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" component={Books} />
        <Route path="/sobre" component={About} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/perfil" component={Profile} />
        <Route path="/*" component={() => <h1>Página não encontrada.</h1>} />
      </Switch>
    </App>
  </BrowserRouter>
);


export default Routes;
