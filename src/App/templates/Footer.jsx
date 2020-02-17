import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <Link
      to="/doeteca/sobre"
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
        className="github-a"
      >
        <strong> Davi Sousa</strong>
      </a>
    </span>
  </footer>
);

export default Footer;
