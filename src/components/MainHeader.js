import React from 'react';
import { NavLink } from 'react-router-dom';

const MainHeader = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-brand">
          <h1>Bookstore CMS</h1>
        </div>
        <ul className="list">
          <li>
            <NavLink activeclassname="active" to="/">
              Books
            </NavLink>
          </li>
          <li>
            <NavLink activeclassname="active" to="/categories">
              Categories
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
