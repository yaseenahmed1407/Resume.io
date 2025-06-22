import React from 'react';
import TaskCard from './TaskCard';

const KanbanColumn = ({ column }) => {
  return (
    <div className="flex-shrink-0 w-72 sm:w-80">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 h-full">
        <div className="p-3 sm:p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${column.color} mr-2 sm:mr-3`}></div>
              <h3 className="text-sm sm:text-lg font-semibold text-gray-900">{column.title}</h3>
            </div>
            <span className="bg-gray-100 text-gray-600 text-xs sm:text-sm font-medium px-2 py-1 rounded-full">
              {column.tasks.length}
            </span>
          </div>
        </div>
        
        <div className="p-3 sm:p-4 flex-1">
          <div className="space-y-3">
            {column.tasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
          
          <button className="w-full mt-4 p-2 sm:p-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-gray-400 hover:text-gray-600 transition-colors text-sm">
            + Add Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default KanbanColumn; 