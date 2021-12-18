import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddBook = ({ addBook }) => {
  const [input, setInput] = useState({
    title: '',
    author: ''
  });

  const submitBook = (e) => {
    e.preventDefault();
    if (input.title.trim() && input.author.trim()) {
      addBook(input.title, input.author);
      setInput({
        title: '',
        author: ''
      });
    }
  };

  const inputChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <div className="add-container">
      <h2 className="form-title">Add New Book</h2>
      <form className="addbook">
        <input
          className="book-title"
          type="text"
          placeholder="Book Name"
          onChange={inputChange}
          value={input.title}
          name="title"
        />
        <input type="text" placeholder="Book Author" onChange={inputChange} value={input.author} name="author" />
        <select name="books" id="books">
          <option value="category">Category</option>
        </select>
        <button type="submit" onClick={submitBook}>
          Add Book
        </button>
      </form>
    </div>
  );
};

AddBook.propTypes = {
  addBook: PropTypes.func.isRequired
};

export default AddBook;
