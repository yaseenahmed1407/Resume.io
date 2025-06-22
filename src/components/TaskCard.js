import React from 'react';
import { Calendar, User, MoreHorizontal } from 'lucide-react';

const TaskCard = ({ task }) => {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getAssigneeInitial = (name) => {
    return name.charAt(0).toUpperCase();
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow cursor-pointer">
      <div className="flex items-start justify-between mb-2 sm:mb-3">
        <h4 className="text-xs sm:text-sm font-medium text-gray-900 line-clamp-2 flex-1 mr-2">{task.title}</h4>
        <button className="text-gray-400 hover:text-gray-600 p-1 flex-shrink-0">
          <MoreHorizontal className="h-3 w-3 sm:h-4 sm:w-4" />
        </button>
      </div>
      
      <p className="text-xs text-gray-600 mb-2 sm:mb-3 line-clamp-2">{task.description}</p>
      
      <div className="flex flex-wrap gap-1 mb-2 sm:mb-3">
        {task.tags.map((tag, index) => (
          <span
            key={index}
            className="inline-flex items-center px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-1 sm:space-x-2">
          <div className="flex items-center text-xs text-gray-500">
            <Calendar className="h-3 w-3 mr-1" />
            <span className="hidden sm:inline">{formatDate(task.dueDate)}</span>
            <span className="sm:hidden">{task.dueDate.split('-')[2]}</span>
          </div>
          <span className={`inline-flex items-center px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}>
            {task.priority}
          </span>
        </div>
        
        <div className="flex items-center">
          <div className="hidden sm:flex items-center text-xs text-gray-500 mr-2">
            <User className="h-3 w-3 mr-1" />
            {task.assignee}
          </div>
          <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-primary-500 flex items-center justify-center">
            <span className="text-xs font-medium text-white">
              {getAssigneeInitial(task.assignee)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard; 