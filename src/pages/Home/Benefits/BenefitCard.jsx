import React from 'react';

const BenefitCard = ({ title, description, image }) => {
  return (
    <div className="card w-full bg-base-100 shadow-md hover:shadow-lg hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 hover:text-black transition-all">
      <div className="card-body flex flex-col sm:flex-row items-start gap-4">
        <img src={image} alt={title} className="w-22 h-22 object-contain" />
        <div className="divider divider-horizontal hidden sm:flex my-0" />
        <div>
          <h3 className="card-title text-base-content text-bold  mb-2">{title}</h3>
          <p className="text-lg text-base-content/70">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BenefitCard;