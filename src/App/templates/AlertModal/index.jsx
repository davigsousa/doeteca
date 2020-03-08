import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import './style.css';

const AlertModal = ({
  isOpen, label, title, description,
}) => {
  const [open, setOpen] = useState(isOpen);

  return (
    <Modal
      isOpen={open}
      contentLabel={label}
      className="alert-modal"
    >
      <h1>{title}</h1>
      <p>{description}</p>
      <button type="button" onClick={setOpen(!open)}>Tudo bem!</button>
    </Modal>
  );
};

AlertModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default AlertModal;
