import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'

function Header() {
  return (
    <header className="header">
      <h1>ArticleHub</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/create">Create Article</Link>
      </nav>
    </header>
  );
}

export default Header;
