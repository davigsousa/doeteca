import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

import avatar from '../../assets/avatar.png';
import api from '../../services/api';

import { login } from '../../services/auth';

import './style.css';

class Login extends Component {
  constructor(props) {
    super(props);

    this.handleSocialMedia = async (media, accessToken, name, email, picture) => {
      const response = await api({
        method: 'POST',
        url: `/sessions?by=${media}`,
        headers: {
          socialtoken: accessToken,
        },
        data: {
          name,
          email,
        },
      });

      let { user } = response.data;
      user = {
        picture,
        ...user,
      };
      const { token } = response.data;

      login(token, user);

      const { history } = this.props;
      history.push('/doeteca/');
    };

    this.handleFacebook = ({ accessToken, name, email, picture }) => {
      this.handleSocialMedia('facebook', accessToken, name, email, picture.data.url);
    };

    this.handleGoogle = ({ accessToken, Qt }) => {
      const { Ad: name, zu: email, jL: picture } = Qt;

      this.handleSocialMedia('google', accessToken, name, email, picture);
    };
  }

  render() {
    return (
      <div className="login-container">
        <div className="login-title">
          <img src={avatar} alt="Avatar" />
          <h1>Entre com a sua conta.</h1>
          <button type="button" className="login-about">O que é o Doeteca?</button>
        </div>

        <div className="social-area">
          <div className="login-info">
            <h2>Escolha sua forma de login</h2>
            <p>Nós exibiremos o seu nome e e-mail.</p>
          </div>
          <div>
            <FacebookLogin
              appId="238480404000984"
              fields="name,email,picture"
              callback={this.handleFacebook}
              language="pt_BR"
              textButton="Fazer login com o Facebook"
              icon="fa-facebook-square"
              cssClass="social-button facebook"
            />
            <GoogleLogin
              clientId="267418809977-mkhmrj95rvs0l66nn9rljblbt4fak6mk.apps.googleusercontent.com"
              buttonText="Fazer login com o Google"
              onSuccess={this.handleGoogle}
              onFailure={this.handleGoogle}
              autoLoad={false}
              render={
                renderProps => (
                  <button 
                    type="button"
                    onClick={renderProps.onClick} 
                    disabled={renderProps.disabled}
                    className="social-button google"
                  >
                    <i className="fa fa-google"/>
                    Fazer login com o Google
                  </button>
                )
              }
            />
          </div>
        </div>
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
