import React from 'react';
import { Menu, Search, Bell, User } from 'lucide-react';

const Header = ({ onMenuClick }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="flex items-center justify-between h-16 px-4 sm:px-6">
        <div className="flex items-center">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 mr-3"
          >
            <Menu className="h-5 w-5" />
          </button>
          
          <div className="relative hidden sm:block">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search projects, tasks..."
              className="block w-48 lg:w-64 pl-9 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 text-sm"
            />
          </div>
          
          {/* Mobile search button */}
          <button className="sm:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100">
            <Search className="h-5 w-5" />
          </button>
        </div>
        
        <div className="flex items-center space-x-2 sm:space-x-4">
          <button className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-400"></span>
          </button>
          
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="hidden sm:block text-right">
              <p className="text-sm font-medium text-gray-700">Yaseen</p>
              <p className="text-xs text-gray-500">Project Manager</p>
            </div>
            <div className="h-8 w-8 rounded-full bg-primary-500 flex items-center justify-center">
              <User className="h-4 w-4 text-white" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 