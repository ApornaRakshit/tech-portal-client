import React from 'react';
import BenefitCard from './BenefitCard';
import learning from '../../../assets/benefits/self-learning.jpg';
import trends from '../../../assets/benefits/trends.jpg';
import support from '../../../assets/benefits/career-growth.jpg';

const benefits = [
  {
    id: 1,
    title: "Personalized Learning Pathways",
    description: "Beginner-to-advanced roadmap designed for students, freshers, and IT professionals.",
    image: learning,
  },
  {
    id: 2,
    title: "Latest Tech Insights",
    description: "Stay updated with curated technology news and future IT innovations.",
    image: trends,
  },
  {
    id: 3,
    title: "Career Growth Support",
    description: "Boost your career with tools, recommendations, and skill-building resources.",
    image: support,
  },
];

const Benefits = () => {
  return (
    <div className="py-16 bg-base-200">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="flex flex-col gap-6">
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.id} {...benefit} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;