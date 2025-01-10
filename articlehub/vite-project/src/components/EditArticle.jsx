import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RichTextEditor from './RichTextEditor';
import { fetchArticleById, updateArticle } from '../utils/helpers';

function EditArticle() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState([]);
  const [thumbnail, setThumbnail] = useState('');

  useEffect(() => {
    fetchArticleById(id).then(data => {
      setArticle(data);
      setTitle(data.title);
      setExcerpt(data.excerpt);
      setContent(data.content);
      setCategory(data.category);
      setTags(data.tags);
      setThumbnail(data.thumbnail);
    });
  }, [id]);

  const handleUpdate = () => {
    const updatedArticle = {
      ...article,
      title,
      excerpt,
      content,
      category,
      tags,
      thumbnail,
      lastEditedAt: new Date().toISOString(),
    };
    updateArticle(updatedArticle);
  };

  return (
    <div className="edit-article">
      <h2>Edit Article</h2>
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
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default EditArticle;
