import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import RichTextEditor from '../components/RichTextEditor';
import { fetchArticleById, updateArticle } from '../utils/helpers';
import Spinner from '../components/Spinner';
import '../styles/EditArticlePage.css';

function EditArticlePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

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
      setLoading(false);
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
    updateArticle(updatedArticle).then(() => {
      alert('Article successfully updated!');
      navigate(`/article/${id}`);
    });
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="edit-article-page">
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

export default EditArticlePage;
