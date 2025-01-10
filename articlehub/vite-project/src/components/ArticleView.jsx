import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ArticleView.css';

function ArticleView({ article }) {
  return (
    <div className="article-view">
      <h1 className="article-title">{article.title}</h1>
      <p className="article-excerpt">{article.excerpt}</p>
      <div className="article-content" dangerouslySetInnerHTML={{ __html: article.content }}></div>
      <div className="article-meta">
        <span className="article-reading-time">{article.readingTime} min read</span>
        <span className="article-category">{article.category}</span>
        <span className="article-last-edited">Last edited on {article.lastEditedAt || 'N/A'}</span>
      </div>
      <Link to={`/edit/${article.id}`} className="edit-article-button">Edit Article</Link>
    </div>
  );
}

export default ArticleView;
