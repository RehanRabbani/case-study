import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-blue-600 text-white">
      <Link to="/" className="text-xl font-bold">
        News Aggregator
      </Link>
      <div>
        <Link to="/feed" className="px-4 py-2 text-white">
          Feed
        </Link>
        {/* Add other links for Home, About, etc. */}
      </div>
    </nav>
  );
};

export default Navbar;
