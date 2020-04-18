import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const Footer = () => (
  <footer className="footer">
    <Link
      to="/sobre"
      className="about-button"
    >
      Clique aqui para saber mais sobre o projeto.
    </Link>

    <span>
      Desenvolvido com
      {' '}
      <i className="fa fa-heart text-warning" />
      {' '}
      por
      <a
        target="blank"
        rel="noopener noreferrer"
        href="https://github.com/davigsousa"
        className="github-link"
      >
        <strong> Davi Sousa</strong>
      </a>
    </span>
  </footer>
);

export default Footer;
