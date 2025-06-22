import React from 'react';
import { X, Home, Calendar, Users, Settings, BarChart3, Folder, MessageSquare, Bell } from 'lucide-react';

const Sidebar = ({ isOpen, setIsOpen }) => {
  const navigation = [
    { name: 'Dashboard', icon: Home, href: '#', current: true },
    { name: 'Projects', icon: Folder, href: '#', current: false },
    { name: 'Team', icon: Users, href: '#', current: false },
    { name: 'Calendar', icon: Calendar, href: '#', current: false },
    { name: 'Messages', icon: MessageSquare, href: '#', current: false },
    { name: 'Analytics', icon: BarChart3, href: '#', current: false },
    { name: 'Notifications', icon: Bell, href: '#', current: false },
    { name: 'Settings', icon: Settings, href: '#', current: false },
  ];

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 border-b border-gray-200">
          <h1 className="text-lg sm:text-xl font-bold text-gray-900">Kanban</h1>
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <nav className="mt-6 px-3">
          <div className="space-y-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  item.current
                    ? 'bg-primary-100 text-primary-700'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <item.icon
                  className={`mr-3 h-4 w-4 sm:h-5 sm:w-5 ${
                    item.current ? 'text-primary-500' : 'text-gray-400 group-hover:text-gray-500'
                  }`}
                />
                {item.name}
              </a>
            ))}
          </div>
        </nav>
        
        {/* User profile */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="h-8 w-8 rounded-full bg-primary-500 flex items-center justify-center">
                <span className="text-sm font-medium text-white">Y</span>
              </div>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-700">Yaseen</p>
              <p className="text-xs text-gray-500">Project Manager</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar; 