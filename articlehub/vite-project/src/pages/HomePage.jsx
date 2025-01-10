import React, { useState, useEffect } from 'react';
import ArticleList from '../components/ArticleList';
import Spinner from '../components/Spinner';
import sampleArticles from '../data/sampleArticles';


function HomePage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredArticles, setFilteredArticles] = useState([]);

  useEffect(() => {
    // Simulate fetching data with a delay
    setTimeout(() => {
      setArticles(sampleArticles);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    const filtered = articles.filter(article => {
      const matchesCategory = category ? article.category === category : true;
      const matchesSearchQuery = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                  article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearchQuery;
    });
    setFilteredArticles(filtered);
  }, [articles, category, searchQuery]);

  const handleSearch = () => {
    // Trigger search functionality
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="homepage">
      <div className="filters">
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          <option value="Technology">Technology</option>
          <option value="Business">Business</option>
          <option value="Health">Health</option>
          <option value="Travel">Travel</option>
        </select>
        <input 
          type="text" 
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)} 
          placeholder="Search articles..." 
        />
        <button className="search-button" onClick={handleSearch}>Search</button>
      </div>
      <ArticleList articles={filteredArticles} />
    </div>
  );
}

export default HomePage;
