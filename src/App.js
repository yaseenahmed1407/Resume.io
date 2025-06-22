import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import KanbanBoard from './components/KanbanBoard';
import StatsCards from './components/StatsCards';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        
        <main className="flex-1 overflow-x-auto overflow-y-auto bg-gray-50 p-4 sm:p-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6 sm:mb-8">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Dashboard</h1>
              <p className="text-sm sm:text-base text-gray-600">Welcome back! Here's what's happening with your projects today.</p>
            </div>
            
            <StatsCards />
            
            <div className="mt-6 sm:mt-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-4">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Project Overview</h2>
                <button className="btn-primary w-full sm:w-auto">
                  + Add Task
                </button>
              </div>
              <KanbanBoard />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App; 