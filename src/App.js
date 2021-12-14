import { Routes, Route } from 'react-router-dom';
import MainHeader from './components/MainHeader';
import Books from './redux/books/Books';
import Categories from './redux/categories/Categories';

function App() {
  return (
    <div className="App">
      <MainHeader />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
