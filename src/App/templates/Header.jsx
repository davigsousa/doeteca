import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { isAuthenticated } from '../../services/auth';

import logo from '../../assets/logo.png';
import avatar from '../../assets/avatar.png';
import './Header.css';

const LoginIfExists = () => {
  const route = isAuthenticated() ? '/doeteca/profile' : '/doeteca/login';

  return (
    <Link to={route} className="route-button">
      <img className="avatar" src={avatar} alt="Profile Avatar" />
      {
        isAuthenticated()
          ? (<div className="header-text">Ver perfil</div>)
          : (<div className="header-text">Participar</div>)
      }
    </Link>
  );
};

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className="header">
      <Link to="/doeteca/" className="link-logo">
        <div className="title">
          <img className="logo" src={logo} alt="doeteca logo" />
          Doeteca
        </div>
      </Link>

      {
        pathname !== '/doeteca/login' && pathname !== '/doeteca/signup'
          ? <LoginIfExists />
          : <div className="call">Junte-se a nós!</div>
      }

    </header>
  );
};

export default Header;
