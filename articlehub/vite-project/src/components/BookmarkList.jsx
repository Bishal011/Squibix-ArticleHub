import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import ArticleCard from './ArticleCard';

function BookmarkList() {
  const { state } = useContext(AppContext);
  const bookmarkedArticles = state.articles.filter(article => 
    state.bookmarks.includes(article.id)
  );

  return (
    <div className="bookmark-list">
      {bookmarkedArticles.length > 0 ? (
        bookmarkedArticles.map(article => (
          <ArticleCard key={article.id} article={article} />
        ))
      ) : (
        <p>No bookmarks added.</p>
      )}
    </div>
  );
}

export default BookmarkList;
