import React, { Component } from 'react';
import PropTypes from 'prop-types';

import bookPng from '../../../assets/book.png';

class BookCard extends Component {
  constructor(props) {
    super(props);

    const { user, thumbnail } = this.props;
    const username = user.name;
    const twitterUsername = user.twitter_username;

    this.state = {
      username,
      twitterUsername,
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
    const { username, twitterUsername, thumbnail } = this.state;

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
              <i className="fa fa-twitter" />
              <span>{twitterUsername === '' ? 'Não informado' : twitterUsername}</span>
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
    twitter_username: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookCard;
