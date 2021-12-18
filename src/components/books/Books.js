import React from 'react';
import PropTypes from 'prop-types';

const Books = ({ removeBtn, bookDetail }) => {
  return (
    <div className="book-container">
      {bookDetail.map((book) => {
        return (
          <div key={book.id} className="book-store">
            <div className="book-info">
              <div className="main-book">
                <div className="book-data">
                  <p>Book Genre</p>
                  <h1>{book.title}</h1>
                  <h3>{book.category}</h3>
                </div>
                <div className="action-btns">
                  <button type="button">Comments</button>
                  <button type="button" className="removeBtn" onClick={() => removeBtn(book.id)}>
                    Remove
                  </button>
                  <button className="no-line" type="button">
                    Edit
                  </button>
                </div>
              </div>
              <div className="completed">Completed</div>
            </div>
            <div className="book-stats">
              <p>Current Chapter</p>
              <h1>Chapter Name</h1>
              <button type="button">Update Progress</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

Books.propTypes = {
  bookDetail: PropTypes.array.isRequired,
  removeBtn: PropTypes.func.isRequired
};

export default Books;
