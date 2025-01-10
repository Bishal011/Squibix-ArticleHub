import sampleArticles from '../data/sampleArticles';

export async function fetchArticles() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(sampleArticles);
    }, 1000);
  });
}

export async function fetchArticleById(id) {
  const articles = await fetchArticles();
  return articles.find(article => article.id === id);
}

export async function createArticle(article) {
  return new Promise((resolve) => {
    console.log('Article created:', article);
    sampleArticles.push(article);
    resolve();
  });
}

export async function updateArticle(updatedArticle) {
  return new Promise((resolve) => {
    const index = sampleArticles.findIndex(article => article.id === updatedArticle.id);
    if (index !== -1) {
      sampleArticles[index] = updatedArticle;
    }
    resolve();
  });
}
