import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [keyword, setKeyword] = useState('');

  const handleSearchChange = (e) => setKeyword(e.target.value);

  const handleSearch = (e) => {
    e.preventDefault();
    if (keyword) {
      onSearch(keyword);
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex space-x-4">
      <input
        type="text"
        value={keyword}
        onChange={handleSearchChange}
        placeholder="Search for news..."
        className="px-4 py-2 rounded-md w-64"
      />
      <button
        type="submit"
        className="bg-white text-blue-600 px-4 py-2 rounded-md"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
