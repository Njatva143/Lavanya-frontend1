import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-full">
      <div className="p-4">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <nav className="mt-4">
          <ul>
            <li>
              <Link to="/" className="block py-2">Dashboard</Link>
            </li>
            {/* Add other sidebar links */}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
