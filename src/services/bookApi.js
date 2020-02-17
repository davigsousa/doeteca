import axios from 'axios';

const bookApi = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1',
});

export default bookApi;
