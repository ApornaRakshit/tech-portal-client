import { useEffect, useState } from "react";
import TutorialCard from "../../components/TutorialCard";

const CompetitiveProgramming = () => {
  const [tutorials, setTutorials] = useState([]);

  useEffect(() => {
    fetch("/tutorials.json")
      .then(res => res.json())
      .then(data => setTutorials(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-5 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">
        🚀 Competitive Programming Tutorials
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tutorials.map(tutorial => (
          <TutorialCard key={tutorial.id} tutorial={tutorial} />
        ))}
      </div>
    </div>
  );
};

export default CompetitiveProgramming;
