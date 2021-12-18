import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { addBook, removeBook } from '../../redux/books/booksReducer';
import AddBook from './AddBook';
import Books from './Books';

const BookList = () => {
  const bookList = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();

  const submitBookToStore = (title, author) => {
    const newBook = {
      id: v4(),
      title,
      author
    };

    dispatch(addBook(newBook));
  };

  const delBook = (id) => dispatch(removeBook(id));

  return (
    <div>
      <Books removeBtn={delBook} bookDetail={bookList} />
      <AddBook addBook={submitBookToStore} />
    </div>
  );
};

export default BookList;
