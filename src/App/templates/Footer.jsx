import React from 'react';

import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <a
      href="/doeteca"
      className="about-button"
    >
      Clique aqui para saber mais sobre o projeto.
    </a>

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
