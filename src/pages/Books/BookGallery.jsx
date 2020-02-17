import React from 'react';
import PropTypes from 'prop-types';

import BookCard from './BookCard';

const BookGalleryIfExists = ({ books }) => (
  <>
    {
      books.length === 0
        ? (
          <div className="book-not-found">
            <i className="fa fa-exclamation-triangle" />
            <p>Não encontramos o livro pesquisado.</p>
          </div>
        )
        : (
          <div className="books-gallery">
            {
              books.map((book) => (
                <BookCard
                  name={book.name}
                  author={book.author}
                  thumbnail={book.thumbnail}
                  user={book.owner}
                  key={book.id}
                />
              ))
            }
          </div>
        )
    }
  </>
);

BookGalleryIfExists.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    thumbnail: PropTypes.string,
    owner: PropTypes.shape({
      name: PropTypes.string.isRequired,
      twitter_username: PropTypes.string.isRequired,
    }).isRequired,
    id: PropTypes.number.isRequired,
  })),
};

export default BookGalleryIfExists;
