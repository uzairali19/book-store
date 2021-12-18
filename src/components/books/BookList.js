import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { addBook, removeBook, getBook } from '../../redux/books/booksReducer';
import AddBook from './AddBook';
import Books from './Books';

const BookList = () => {
  const dispatch = useDispatch();

  const submitBookToStore = (title, author) => {
    const newBook = {
      id: v4(),
      title,
      author
    };

    dispatch(addBook(newBook));
  };

  const api = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/9gdLqfeWisFSvgsvAsnF/books';
  const res = async (res) => {
    const response = await fetch(api).then((data) => {
      return data.json();
    });
    const books = [];
    Object.keys(response).forEach((key) => {
      books.push({ id: key, ...response[key][0] });
    });
    console.log(books);
  };
  res();

  useEffect(() => {
    dispatch(getBook());
  }, []);

  const bookList = useSelector((state) => state.booksReducer);

  const delBook = (id) => dispatch(removeBook(id));

  return (
    <div>
      <Books removeBtn={delBook} bookDetail={bookList} />
      <AddBook addBook={submitBookToStore} />
      <></>
    </div>
  );
};

export default BookList;
