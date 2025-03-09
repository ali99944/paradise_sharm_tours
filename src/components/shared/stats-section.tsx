import React from 'react';
import { FaUsers, FaComments, FaChartLine } from 'react-icons/fa'; // Icons for the stats

const StatsSection = () => {
  // Example data (replace with real data)
  const stats = [
    {
      id: 1,
      icon: <FaUsers className="w-12 h-12 text-orange-500" />,
      number: 1500, // Replace with real data
      label: 'عملاء خدمناهم',
    },
    {
      id: 2,
      icon: <FaComments className="w-12 h-12 text-orange-500" />,
      number: 1200, // Replace with real data
      label: 'قالوا عنا',
    },
    {
      id: 3,
      icon: <FaChartLine className="w-12 h-12 text-orange-500" />,
      number: 300, // Replace with real data
      label: 'استفادوا من خدماتنا في آخر 24 ساعة',
    },
  ];

  return (
    <div className="bg-white/20 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-orange-500 mb-8">إحصائياتنا</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-white/10 p-4 rounded-lg text-center transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <h3 className="text-4xl font-bold text-white mb-4">
                {stat.number.toLocaleString()}+
              </h3>
              <p className="text-xl text-white">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;