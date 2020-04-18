import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { isAuthenticated, getUser } from '../../../services/auth';

import logo from '../../../assets/logo.png';
import avatar from '../../../assets/avatar.png';
import './style.css';

const LoginIfExists = () => {
  const route = isAuthenticated() ? '/perfil' : '/login';

  return (
    <Link to={route} className="route-button">
      {
        isAuthenticated()
          ? (
            <>
              <img className="avatar" src={getUser().picture} alt="Profile Avatar" />
              <div className="header-text">{getUser().name}</div>
            </>
          )
          : (
            <>
              <img className="avatar" src={avatar} alt="Profile Avatar" />
              <div className="header-text">Participar</div>
            </>
          )
      }
    </Link>
  );
};

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className="header">
      <Link to="/" className="link-logo">
        <div className="title">
          <img className="logo" src={logo} alt="doeteca logo" />
          Doeteca
        </div>
      </Link>

      {
        pathname !== '/login'
          ? <LoginIfExists />
          : <div className="call">Junte-se a nós!</div>
      }

    </header>
  );
};

export default Header;
