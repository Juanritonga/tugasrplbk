// BookDetailPage.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './BookDetailPage.css';

const BookDetailPage = () => {
  const [book, setBook] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch book details for ID: ${id}`);
        }

        const data = await response.json();

        setBook(data);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

    fetchBookDetails();
  }, [id]);

  const renderValue = (value) => (value ? value : '-');

  return (
    <div>
      <h3> </h3>
      <Link to="/books" className="back-button"> Back </Link>
      <h3> </h3>
      {book && (
        <div className="book-details2">
          <h2>{book.volumeInfo.title}</h2>
          <div className="book-cover">
            <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
          </div>
          <div className="details-container">
            <p><span>Authors</span>: {renderValue(book.volumeInfo.authors && book.volumeInfo.authors.join(', '))}</p>
            <p><span>Language</span>: {renderValue(book.volumeInfo.language)}</p>
            <p><span>Published Date</span>: {renderValue(book.volumeInfo.publishedDate)}</p>
            <p><span>Description</span>: {renderValue(book.volumeInfo.description)}</p>
            <p><span>Page Count</span>: {renderValue(book.volumeInfo.pageCount)}</p>
            <p><span>Rating</span>: {renderValue(book.volumeInfo.averageRating)}</p>
            <p><span>Price</span>: {renderValue(book.saleInfo && book.saleInfo.listPrice && book.saleInfo.listPrice.amount)} USD</p>
            <p><span>Country</span>: {renderValue(book.accessInfo && book.accessInfo.country)}</p>
            <p><span>Self Link</span>: {renderValue(<a href={book.selfLink} target="_blank" rel="noopener noreferrer">{book.selfLink}</a>)}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDetailPage;
