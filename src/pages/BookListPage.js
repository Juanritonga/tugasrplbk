// BookListPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './BookListPage.css';

const BookListPage = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Function to fetch a default set of books
    const fetchDefaultBooks = async () => {
      try {
        const response = await fetch(
          'https://www.googleapis.com/books/v1/volumes?q=javascript'
        );
        const data = await response.json();
        setBooks(data.items);
      } catch (error) {
        console.error('Error fetching default books:', error);
      }
    };

    // Call the function when the component mounts
    fetchDefaultBooks();
  }, []);

  const searchBooks = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}`
      );
      const data = await response.json();
      setBooks(data.items);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    searchBooks();
  };

  return (
    <div>
      <h1>Book List</h1>
      <form onSubmit={handleSearch}>
        <label>
          Search Books:
          <input type="text" value={query} onChange={handleInputChange} />
        </label>
        <button type="submit">Search</button>
      </form>
      <div className="book-container">
        {books.map((book) => (
          <div key={book.id} className="book-item">
            <div className="book-details">
              <h2>
                <Link to={`/books/${book.id}`}>{book.volumeInfo.title}</Link>
              </h2>
              <p className="author-names">
                {book.volumeInfo.authors && book.volumeInfo.authors.join(', ')}
              </p>
              <p className="book-description">{book.volumeInfo.description}</p>
            </div>
            <div className="book-cover">
              <img
                src={
                  book.volumeInfo.imageLinks
                    ? book.volumeInfo.imageLinks.thumbnail
                    : 'https://via.placeholder.com/150'
                }
                alt={book.volumeInfo.title}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookListPage;
