import React, { Component } from 'react';
import PropTypes from 'prop-types';

import bookPng from '../../../assets/book.png';

class BookCard extends Component {
  constructor(props) {
    super(props);

    const { user, thumbnail } = this.props;
    const username = user.name;
    const email = user.email;

    this.state = {
      username,
      email,
      thumbnail,
    };
  }

  componentDidMount() {
    const { thumbnail } = this.state;

    if (!thumbnail) {
      this.setState({ thumbnail: bookPng });
    }
  }

  render() {
    const { name, author } = this.props;
    const { username, email, thumbnail } = this.state;

    return (
      <div className="book-card">
        <div className="thumbnail">
          {thumbnail
            ? (<img src={thumbnail} alt="Capa" />)
            : (
              <div className="loading-thumbnail">
                <i className="fa fa-spinner loading" />
              </div>
            )}
        </div>

        <div className="book-information">

          <div className="book-description">
            <span>{name}</span>
            <p>{author}</p>
          </div>

          <div className="user">
            <div className="user-information">
              <i className="fa fa-user-circle" />
              <span>{username}</span>
            </div>

            <div className="user-information">
              <i className="fa fa-envelope" />
              <span>{email === '' ? 'Não informado' : email}</span>
            </div>
          </div>

          <button type="button" className="card-button">Doar</button>

        </div>
      </div>
    );
  }
}

BookCard.propTypes = {
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  thumbnail: PropTypes.string,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookCard;
