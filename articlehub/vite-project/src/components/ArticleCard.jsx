import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ArticleCard.css';

function ArticleCard({ article }) {
  return (
    <div className="article-card">
      <div className="article-thumbnail">
        <img src={article.thumbnail} alt={article.title} />
      </div>
      <div className="article-content">
        <h3 className="article-title">{article.title}</h3>
        <p className="article-excerpt">{article.excerpt}</p>
        <div className="article-meta">
          <span className="article-reading-time">{article.readingTime}</span>
          <span className="article-category">{article.category}</span>
        </div>
        <Link to={`/article/${article.id}`} className="read-more">Read More</Link>
      </div>
      <div className="article-author">
        <img src={article.author.avatar} alt={article.author.name} className="author-avatar" />
        <span className="author-name">{article.author.name}</span>
      </div>
    </div>
  );
}

export default ArticleCard;
