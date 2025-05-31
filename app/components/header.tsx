import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">          <h1 className="text-2xl font-bold text-gray-900">Dog Connect</h1>          <nav className="flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Browse Dogs
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Adoption Process
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Training (Coming Soon)
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
