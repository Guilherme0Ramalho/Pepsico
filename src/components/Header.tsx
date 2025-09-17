import React from 'react';
import { Home } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
            P
          </div>
          <span className="ml-3 text-white font-semibold text-lg">Pepsico</span>
        </div>
        
        <nav className="flex items-center space-x-6">
          <a 
            href="#home" 
            className="flex items-center space-x-2 text-white hover:text-teal-300 transition-colors duration-300"
          >
            <Home size={20} />
            <span className="hidden md:inline">Home</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;