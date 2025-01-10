import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import CreateArticlePage from './pages/CreateArticlePage';
import EditArticlePage from './pages/EditArticlePage';
import NotFoundPage from './pages/NotFoundPage';
import Header from './components/Header';
import { AppProvider } from './context/AppContext';
import { ThemeProvider, ThemeContext } from './context/ThemeContext'; // Correct import

function App() {
  return (
    <ThemeProvider>
      <AppProvider>
        <ThemeContext.Consumer>
          {({ theme, toggleTheme }) => (
            <>
              <Header />
              <button className="toggle-theme-btn" onClick={toggleTheme}>
                Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
              </button>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/article/:id" element={<ArticlePage />} />
                <Route path="/create" element={<CreateArticlePage />} />
                <Route path="/edit/:id" element={<EditArticlePage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </>
          )}
        </ThemeContext.Consumer>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
