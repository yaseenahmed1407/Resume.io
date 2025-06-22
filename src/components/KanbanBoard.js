import React from 'react';
import KanbanColumn from './KanbanColumn';

const KanbanBoard = () => {
  const columns = [
    {
      id: 'todo',
      title: 'To Do',
      color: 'bg-gray-500',
      tasks: [
        {
          id: 1,
          title: 'Design new landing page',
          description: 'Create wireframes and mockups for the new landing page',
          assignee: 'Priya',
          priority: 'high',
          dueDate: '2024-01-15',
          tags: ['Design', 'Frontend']
        },
        {
          id: 2,
          title: 'Set up CI/CD pipeline',
          description: 'Configure automated testing and deployment',
          assignee: 'Arjun',
          priority: 'medium',
          dueDate: '2024-01-20',
          tags: ['DevOps', 'Backend']
        },
        {
          id: 3,
          title: 'Update documentation',
          description: 'Review and update API documentation',
          assignee: 'Meera',
          priority: 'low',
          dueDate: '2024-01-25',
          tags: ['Documentation']
        }
      ]
    },
    {
      id: 'in-progress',
      title: 'In Progress',
      color: 'bg-blue-500',
      tasks: [
        {
          id: 4,
          title: 'Implement user authentication',
          description: 'Add JWT-based authentication system',
          assignee: 'Yaseen',
          priority: 'high',
          dueDate: '2024-01-18',
          tags: ['Backend', 'Security']
        },
        {
          id: 5,
          title: 'Create mobile app prototype',
          description: 'Build interactive prototype using Figma',
          assignee: 'Kavya',
          priority: 'medium',
          dueDate: '2024-01-22',
          tags: ['Mobile', 'Design']
        }
      ]
    },
    {
      id: 'review',
      title: 'Review',
      color: 'bg-yellow-500',
      tasks: [
        {
          id: 6,
          title: 'Code review for payment module',
          description: 'Review the payment integration code',
          assignee: 'Rahul',
          priority: 'high',
          dueDate: '2024-01-16',
          tags: ['Backend', 'Payment']
        },
        {
          id: 7,
          title: 'UI/UX review for dashboard',
          description: 'Review the new dashboard design',
          assignee: 'Anjali',
          priority: 'medium',
          dueDate: '2024-01-19',
          tags: ['Design', 'Frontend']
        }
      ]
    },
    {
      id: 'done',
      title: 'Done',
      color: 'bg-green-500',
      tasks: [
        {
          id: 8,
          title: 'Database schema design',
          description: 'Design and implement database schema',
          assignee: 'Vikram',
          priority: 'high',
          dueDate: '2024-01-10',
          tags: ['Database', 'Backend']
        },
        {
          id: 9,
          title: 'Setup development environment',
          description: 'Configure local development setup',
          assignee: 'Yaseen',
          priority: 'medium',
          dueDate: '2024-01-08',
          tags: ['DevOps']
        },
        {
          id: 10,
          title: 'Create project timeline',
          description: 'Develop detailed project timeline',
          assignee: 'Priya',
          priority: 'low',
          dueDate: '2024-01-05',
          tags: ['Planning']
        }
      ]
    }
  ];

  return (
    <div className="flex space-x-4 sm:space-x-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
      {columns.map((column) => (
        <KanbanColumn key={column.id} column={column} />
      ))}
    </div>
  );
};

export default KanbanBoard; 