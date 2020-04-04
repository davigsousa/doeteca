import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FacebookLogin from 'react-facebook-login';

import avatar from '../../assets/avatar.png';
import api from '../../services/api';

import { login } from '../../services/auth';

import './style.css';

class Login extends Component {
  constructor(props) {
    super(props);

    this.handleFacebook = async ({ accessToken, email, picture }) => {
      try {
        const response = await api({
          method: 'POST',
          url: '/sessions',
          headers: {
            facebooktoken: accessToken
          },
          data: {
            email,
          }
        });

        let { user, token } = response.data;
        user = {
          picture: picture.data.url,
          ...user
        };

        login(token, user);
        this.props.history.push('/doeteca/');
      } catch (err) {
        console.log(err.response);
      }
    };
  }

  render() {
    return (
      <div className="form-container">
        <form className="form" onSubmit={(e) => this.handleSignIn(e)}>
          <img src={avatar} alt="Avatar" />
          <h1>Entre com a sua conta.</h1>

          <FacebookLogin
            appId="238480404000984"
            fields="name,email,picture"
            callback={this.handleFacebook}
            language="pt_BR"
          />

        </form>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
};

export default Login;
