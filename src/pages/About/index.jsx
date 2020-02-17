import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

import cover from '../../assets/cover.jpg';

const About = () => (
  <>
    <div className="about-header">
      <img src={cover} alt="Capa do Winnieteca" />
      <h1>O que é o Doeteca?</h1>
    </div>
    <div className="">
      <Link to="/winnieteca/doar">Doar</Link>
    </div>
  </>
);

export default About;
