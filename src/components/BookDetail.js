// BookDetail.js
import React from 'react';
import './BookDetail.css';

const BookDetail = ({ book }) => {
  return (
    <div>
      <h2>{book.title}</h2>
      <p>{book.description}</p>
    </div>
  );
};

export default BookDetail;
