import React from 'react';
import AddBook from './AddBook';

const booksList = [
  {
    genre: 'action',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    completed: 64,
    currentChapter: 'Chapter 17'
  },
  {
    genre: 'action',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    completed: 64,
    currentChapter: 'Chapter 17'
  },
  {
    genre: 'action',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    completed: 64,
    currentChapter: 'Chapter 17'
  }
];

const Books = () => {
  return (
    <div className="book-container">
      <div className="book-info">
        <div className="main-book">
          <div className="book-data">
            <p>Book Genre</p>
            <h1>Book Title</h1>
            <h3>author</h3>
          </div>
          <div className="action-btns">
            <button type="button">Comments</button>
            <button type="button">Remove</button>
            <button type="button">Edit</button>
          </div>
        </div>

        <div className="completed">{booksList[0].completed}</div>
      </div>
      <div className="book-stats">
        <p>Current Chapter</p>
        <h1>Chapter Name</h1>
        <button type="button">Update Progress</button>
      </div>
      <AddBook />
    </div>
  );
};

export default Books;
