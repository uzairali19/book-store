import { Routes, Route } from 'react-router-dom';
import MainHeader from './components/MainHeader';
import Categories from './components/categories/Categories';
import BookList from './components/books/BookList';

function App() {
  return (
    <div className="App">
      <MainHeader />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
