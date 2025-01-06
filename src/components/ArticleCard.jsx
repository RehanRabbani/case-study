import React from 'react';

const ArticleCard = ({ article }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <img src={article.urlToImage} alt={article.title} className="w-full h-48 object-cover rounded-md" />
      <h3 className="font-semibold text-lg mt-4">{article.title}</h3>
      <p className="text-sm text-gray-600 mt-2">{article.description}</p>
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 mt-4 inline-block"
      >
        Read more
      </a>
    </div>
  );
};

export default ArticleCard;
