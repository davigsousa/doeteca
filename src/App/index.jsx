import React from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './style.css';

import Header from './templates/Header';
import Footer from './templates/Footer';

const App = (props) => {
  const { children } = props;

  return (
    <div className="app">
      <Header />

      <div className="content">
        {children}
      </div>

      <Footer />
    </div>
  );
};


App.propTypes = {
  children: PropTypes.element.isRequired,
};

export default App;
