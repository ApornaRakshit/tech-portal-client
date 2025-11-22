import React from 'react';

const ServiceCard = ({ service }) => {
  const { icon: Icon, title, description, iconColor, bgColor } = service
  return (
    <div className={`shadow-md rounded-2xl p-6 hover:shadow-xl hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 hover:text-black transition-all duration-300`}>
      <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${bgColor}`}>
        <Icon className={`text-3xl ${iconColor}`} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>

    </div>
  );
};

export default ServiceCard;