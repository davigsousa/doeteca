import React from 'react';
import PropTypes from 'prop-types';

import { logout } from '../../services/auth';

import './style.css';

function Profile({ history }) {
  return (
    <button
      onClick={() => {
        logout();
        history.push('/');
      }}
      type="button"
    >
      Sair
    </button>
  );
}

Profile.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
};

export default Profile;
