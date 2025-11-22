import React from 'react';
import ServiceCard from './ServiceCard';
import {
  FaNewspaper,
  FaBullseye,
  FaRocket,
  FaChartLine,
  FaLaptopCode,
  FaUsers
} from 'react-icons/fa';

const servicesData = [
  {
    icon: FaBullseye,
    title: "Personalized Learning Pathways",
    description: "Tailored learning plans for mastering IT skills from beginner to advanced.",
    iconColor: "text-violet-600",
    bgColor: "bg-violet-50"
    
  },
  {
    icon: FaChartLine,
    title: "Career Guidance & Skill Mapping",
    description: "Identify in-demand skills and plan your career growth effectively.",
    iconColor: "text-rose-600",
    bgColor: "bg-rose-50"
  },
  {
    icon: FaRocket,
    title: "Emerging Technology Insights",
    description: "Explore future technologies like AI, Blockchain, Cybersecurity, and more.",
    iconColor: "text-yellow-500",
    bgColor: "bg-yellow-50"
  },
  {
    icon: FaLaptopCode ,
    title: "Interactive Tutorials & Quizzes",
    description: "Hands-on tutorials, quizzes, and exercises to learn by doing.",
    iconColor: "text-teal-600",
    bgColor: "bg-teal-50"
  },
  {
    icon: FaNewspaper,
    title: "Tech News & Trends",
    description: "Stay updated with the latest technology trends from reliable sources.",
    iconColor: "text-amber-600",
    bgColor: "bg-amber-50"
  },
  {
    icon: FaUsers,
    title: "Community & Expert Support",
    description: "Connect with peers, mentors, and IT experts to enhance learning.",
    iconColor: "text-blue-600",
    bgColor: "bg-blue-50"
  }
];

const Services = () => {
  return (
    <section className="py-16 px-4 md:px-10 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl  font-bold mb-4">Why Choose Technology Evolution Portal?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
        Designed specifically for Bangladeshi students and tech professionals, our platform offers everything you need to succeed in the tech industry.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {servicesData.map((service, idx) => (
          <ServiceCard
            key={idx}
            service={service}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;