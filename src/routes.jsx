import React from 'react';
import {
  Route, Redirect, BrowserRouter, Switch,
} from 'react-router-dom';
import PropTypes from 'prop-types';

import App from './App/index';
import Home from './pages/Home';
import Books from './pages/Books';
import Login from './pages/Login';

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
        <Route exact path="/doeteca/" component={Home} />
        <Route path="/doeteca/doar" component={Books} />
        <Route path="/doeteca/login" component={Login} />
        <Route path="/doeteca/signup" component={() => <h1>SignUp</h1>} />
        <PrivateRoute path="/doeteca/profile" component={() => <h1>Profile</h1>} />
        <Route path="/doeteca/*" component={() => <h1>Page not found.</h1>} />
      </Switch>
    </App>
  </BrowserRouter>
);


export default Routes;
