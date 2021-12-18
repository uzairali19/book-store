const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOK = 'bookStore/books/GET_BOOK';
const initialState = [];
const api = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/9gdLqfeWisFSvgsvAsnF/books';

export const getBook = () => async (res) => {
  const response = await fetch(api).then((data) => {
    return data.json();
  });
  const books = [];
  Object.keys(response).forEach((key) => {
    books.push({ id: key, ...response[key][0] });
  });
  if (books) {
    res({
      type: GET_BOOK,
      payload: books
    });
  }
};

export const addBook = (payload) => async (res) => {
  const response = await fetch(api, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      item_id: payload.id,
      title: payload.title,
      category: payload.author
    })
  });
  if (response) {
    res({
      type: ADD_BOOK,
      payload
    });
  }
};

export const removeBook = (payload) => async (res) => {
  const response = await fetch(`${api}/${payload}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      item_id: payload.id
    })
  });
  if (response) {
    res({
      type: REMOVE_BOOK,
      payload
    });
  }
};

export const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return [...state.filter((book) => book.id !== action.payload)];
    case GET_BOOK:
      return action.payload;
    default:
      return state;
  }
};

export default booksReducer;
