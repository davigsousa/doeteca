import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import avatar from '../../assets/avatar.png';
import api from '../../services/api';

import './style.css';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: '',
      twitterUsername: '',
      email1: '',
      email2: '',
      password1: '',
      password2: '',
      older: false,
      error: '',
    };
  }

  async handleSignUp(e) {
    e.preventDefault();

    const {
      older,
      fullName,
      twitterUsername,
      email1, email2,
      password1, password2,
    } = this.state;
    const { history } = this.props;

    const setError = (msg) => {
      window.scrollTo(0, 0);
      this.setState({ error: msg });
    };

    if (!email1 || !password1 || !email2 || !password2 || !fullName) {
      setError('Preencha todas as informações obrigatórias!');
    } else if (email1 !== email2) {
      setError('Verifique se os emails estão iguais!');
    } else if (password1 !== password2) {
      setError('Verifique se as senhas estão iguais!');
    } else if (!older) {
      setError('Você deve ser maior de idade para utilizar o site, por favor, caso você seja menor de idade, chame os seus pais ou responsáveis para criarem uma conta.');
    } else {
      try {
        await api.post('/users', {
          name: fullName, 
          twitter_username: twitterUsername, 
          email: email1, 
          password: password1,
        });

        history.push('/doeteca/login');
      } catch (err) {
        console.log(err)
        this.setState({ error: 'Houve um problema com o cadastro.' });
      }
    }
  }

  render() {
    const { error, older } = this.state;

    return (
      <div className="form-container">
        <form className="form" onSubmit={(e) => this.handleSignUp(e)}>
          <img src={avatar} alt="Avatar" />
          <h1>Crie a sua conta.</h1>

          {error && <p>{error}</p>}

          <div className="age-checkbox">
            <input type="checkbox" onClick={() => this.setState({ older: !older })} />
            Confirmo que tenho mais de 18 anos.
          </div>
          <input
            type="name"
            placeholder="Nome e Sobrenome (Ex: Davi Sousa)"
            onChange={(e) => this.setState({ fullName: e.target.value })}
          />
          <input
            type="username"
            placeholder="Usuário do Twitter (Opcional)"
            onChange={(e) => this.setState({ twitterUsername: e.target.value })}
          />
          <input
            type="email"
            placeholder="Endereço de e-mail"
            onChange={(e) => this.setState({ email1: e.target.value })}
          />
          <input
            type="email"
            placeholder="Digite o e-mail novamente"
            onChange={(e) => this.setState({ email2: e.target.value })}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={(e) => this.setState({ password1: e.target.value })}
          />
          <input
            type="password"
            placeholder="Digite a senha novamente"
            onChange={(e) => this.setState({ password2: e.target.value })}
          />
          <button type="submit">Criar</button>

          <hr />

          <Link to="/doeteca/login" onClick={() => window.scrollTo(0, 0)}>Já tem uma conta? Entrar</Link>
        </form>
      </div>
    );
  }
}

Signup.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
};

export default Signup;
