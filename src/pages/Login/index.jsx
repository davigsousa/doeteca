import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import avatar from '../../assets/avatar.png';
import api from '../../services/api';

import { login } from '../../services/auth';

import './style.css';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: '',
    };
  }

  async handleSignIn(e) {
    e.preventDefault();

    const { email, password } = this.state;
    const { history } = this.props;

    if (!email || !password) {
      this.setState({ error: 'Insira o seu e-mail e senha!' });
    } else {
      try {
        const response = await api.post('/sessions', { email, password });
        const { token, user } = response.data;

        login(token, user);

        history.push('/doeteca/');
      } catch (err) {
        this.setState({ error: 'Houve um problema com o login, verifique as suas credenciais.' });
      }
    }
  }

  render() {
    const { error } = this.state;

    return (
      <div className="form-container">
        <form className="form" onSubmit={(e) => this.handleSignIn(e)}>
          <img src={avatar} alt="Avatar" />
          <h1>Entre com a sua conta.</h1>
          {error && <p>{error}</p>}
          <input
            type="email"
            placeholder="Endereço de e-mail"
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          <button type="submit">Entrar</button>

          <hr />

          <Link to="/doeteca/signup" onClick={() => window.scrollTo(0, 0)}>Criar uma conta.</Link>
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
