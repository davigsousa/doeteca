import React, { Component } from 'react';
import debounce from 'awesome-debounce-promise';

import BookGalleryIfExists from './BookGallery';

import api from '../../services/api';

import bookshelf1 from '../../assets/books1.jpg';
import bookshelf2 from '../../assets/books2.jpg';

import './style.css';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      started: false,
      books: [],
      page: 1,
      totalPages: 0,
      search: '',
    };

    this.searchApi = debounce((search) => api.get(`/books?${search}`), 300);
  }

  componentDidMount() {
    const { page } = this.state;

    api.get(`/books?page=${page}`).then((response) => {
      const { totalPages, books } = response.data;

      this.setState({ books, totalPages, started: true });
    });
  }

  handleChangePage(nextPage) {
    const { search } = this.state;

    api.get(`/books?${search}page=${nextPage}`).then((response) => {
      const { books } = response.data;

      this.setState({ books, page: nextPage });
    });

    window.scrollTo(0, 0);
  }

  async handleSearch(e) {
    e.preventDefault();
    const text = e.target.value;
    const search = `q=%${text.replace(/ /g, '+')}%&`;

    const response = await this.searchApi(search);

    const { books } = response.data;
    let { totalPages } = response.data;
    totalPages = totalPages === 0 ? 1 : totalPages;

    this.setState({
      books, totalPages, search, page: 1,
    });
  }

  render() {
    const {
      books, page, totalPages, started,
    } = this.state;

    return (
      <div className="books">
        <div className="books-header">
          <img src={bookshelf1} alt="bookshelf" className="books-image image1" />
          <div className="search-section">
            <h1>Livros</h1>
            <div className="search-bar">
              <i className="fa fa-search" />
              <input placeholder="Pesquise por algum livro." onChange={(e) => this.handleSearch(e)} />
            </div>
          </div>
          <img src={bookshelf2} alt="bookshelf" className="books-image image2" />
        </div>

        {
          !started
            ? (
              <div className="loading-thumbnail loading-gallery">
                <i className="fa fa-spinner loading" />
                <p>Carregando...</p>
              </div>
            )
            : (
              <BookGalleryIfExists books={books} />
            )
        }

        <div className="books-footer">
          {page > 1
            ? (
              <button type="button" onClick={() => this.handleChangePage(page - 1)}>
                <i className="fa fa-arrow-left" />
                <span>Anterior</span>
              </button>
            )
            : (<></>)}

          Página
          {' '}
          {page}

          {page !== totalPages
            ? (
              <button type="button" onClick={() => this.handleChangePage(page + 1)}>
                <span>Próxima</span>
                <i className="fa fa-arrow-right" />
              </button>
            )
            : (<></>)}

        </div>
      </div>
    );
  }
}

export default Home;
