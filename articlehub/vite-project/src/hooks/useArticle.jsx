import { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import { fetchArticles } from '../utils/helpers';

export function useArticle() {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    fetchArticles().then(data => {
      dispatch({ type: 'SET_ARTICLES', payload: data });
    });
  }, [dispatch]);

  return state.articles;
}
