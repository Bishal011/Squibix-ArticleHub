import React, { useState } from 'react';
import RichTextEditor from '../components/RichTextEditor';
import { createArticle } from '../utils/helpers';
import '../styles/CreateArticlePage.css';

function CreateArticlePage() {
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState([]);
  const [thumbnail, setThumbnail] = useState('');

  const handleCreate = () => {
    const newArticle = {
      id: Math.random().toString(36).substr(2, 9), // Generate a unique ID
      title,
      excerpt,
      content,
      category,
      tags,
      thumbnail,
      createdAt: new Date().toISOString(),
      lastEditedAt: null,
    };
    createArticle(newArticle).then(() => {
      alert('Article successfully published!');
      // Optionally, clear the form after publishing
      setTitle('');
      setExcerpt('');
      setContent('');
      setCategory('');
      setTags([]);
      setThumbnail('');
    });
  };

  return (
    <div className="create-article-page">
      <h2>Create New Article</h2>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Title" 
      />
      <textarea 
        value={excerpt} 
        onChange={(e) => setExcerpt(e.target.value)} 
        placeholder="Excerpt" 
      />
      <RichTextEditor content={content} onChange={setContent} />
      <input 
        type="text" 
        value={category} 
        onChange={(e) => setCategory(e.target.value)} 
        placeholder="Category" 
      />
      <input 
        type="text" 
        value={thumbnail} 
        onChange={(e) => setThumbnail(e.target.value)} 
        placeholder="Thumbnail URL" 
      />
      <button onClick={handleCreate}>Publish</button>
    </div>
  );
}

export default CreateArticlePage;
