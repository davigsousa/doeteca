import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

import cover from '../../assets/cover.jpg';

const Home = () => (
  <>
    <div className="home-header">
      <img src={cover} alt="Capa do Winnieteca" />
      <h1>O que é o Doeteca?</h1>
    </div>
    <div className="">
      <Link to="/winnieteca/doar">Doar</Link>
    </div>
  </>
);

export default Home;
