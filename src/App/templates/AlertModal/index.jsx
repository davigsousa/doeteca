import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

const AlertModal = ({
  isOpen, label, title, description,
}) => {
  const [open, setOpen] = useState(isOpen);

  return (
    <Modal
      isOpen={open}
      contentLabel={label}
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
