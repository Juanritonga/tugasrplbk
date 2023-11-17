import React from 'react';
import PropTypes from 'prop-types';
import './BookList.css';

const BookList = ({ books, onBookClick }) => {
  return (
    <ul className="book-list">
      {books.map((book) => (
        <li key={book.id}>
          <div className="book-item" onClick={() => onBookClick(book.id)}>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  onBookClick: PropTypes.func.isRequired,
};

export default BookList;
