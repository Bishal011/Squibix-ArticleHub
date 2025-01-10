import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ArticleView from '../components/ArticleView';
import Spinner from '../components/Spinner';
import { fetchArticleById } from '../utils/helpers';
import '../styles/ArticlePage.css';

function ArticlePage() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArticleById(id).then(data => {
      setArticle(data);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="article-page">
      {article && <ArticleView article={article} />}
    </div>
  );
}

export default ArticlePage;
