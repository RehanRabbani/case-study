import React, { useEffect, useState } from 'react';
import ArticleCard from '../components/ArticleCard';
import { fetchArticles } from '../services/newsAPI'; // Your fetching service

const Feed = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Fetch articles when the component mounts
    fetchArticles().then((data) => setArticles(data));
  }, []);

  return (
    <div className="container">
      <h1 className="text-3xl mb-4">News Feed</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((article) => (
          <ArticleCard key={article.title} article={article} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
