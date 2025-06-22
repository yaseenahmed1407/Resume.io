import React from 'react';
import { TrendingUp, Users, Clock, CheckCircle } from 'lucide-react';

const StatsCards = () => {
  const stats = [
    {
      name: 'Total Projects',
      value: '12',
      change: '+2.5%',
      changeType: 'positive',
      icon: TrendingUp,
      color: 'bg-blue-500',
    },
    {
      name: 'Team Members',
      value: '24',
      change: '+1',
      changeType: 'positive',
      icon: Users,
      color: 'bg-green-500',
    },
    {
      name: 'In Progress',
      value: '8',
      change: '-1',
      changeType: 'negative',
      icon: Clock,
      color: 'bg-yellow-500',
    },
    {
      name: 'Completed',
      value: '45',
      change: '+12%',
      changeType: 'positive',
      icon: CheckCircle,
      color: 'bg-purple-500',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {stats.map((stat) => (
        <div key={stat.name} className="card">
          <div className="flex items-center">
            <div className={`p-2 sm:p-3 rounded-lg ${stat.color} flex-shrink-0`}>
              <stat.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </div>
            <div className="ml-3 sm:ml-4 flex-1 min-w-0">
              <p className="text-xs sm:text-sm font-medium text-gray-600 truncate">{stat.name}</p>
              <div className="flex items-baseline">
                <p className="text-lg sm:text-2xl font-semibold text-gray-900">{stat.value}</p>
                <span className={`ml-2 text-xs sm:text-sm font-medium ${
                  stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards; 