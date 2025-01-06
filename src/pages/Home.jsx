import React, { useState } from 'react';
import ArticleCard from '../components/ArticleCard';
import SearchBar from '../components/SearchBar';
import { fetchArticles } from '../services/newsAPI';

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [filters, setFilters] = useState({
    keyword: '',
    category: '',
    source: '',
  });

  const handleSearch = (keyword) => {
    const queryParams = { q: keyword };
    fetchArticles(queryParams).then((data) => setArticles(data));
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div className="mt-4">
        <div className="flex space-x-4">
          <select
            name="category"
            onChange={handleFilterChange}
            value={filters.category}
            className="px-4 py-2 border rounded-md"
          >
            <option value="">Category</option>
            <option value="technology">Technology</option>
            <option value="business">Business</option>
            <option value="health">Health</option>
          </select>
          <select
            name="source"
            onChange={handleFilterChange}
            value={filters.source}
            className="px-4 py-2 border rounded-md"
          >
            <option value="">Source</option>
            <option value="bbc">BBC</option>
            <option value="nytimes">New York Times</option>
            <option value="guardian">The Guardian</option>
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {articles.map((article) => (
            <ArticleCard key={article.title} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
