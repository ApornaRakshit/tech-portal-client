import React, { useEffect, useState } from "react";

const TechTrends = () => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/trends")
      .then(res => res.json())
      .then(data => setTrends(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-16 px-5">
      <h1 className="text-4xl font-bold mb-6">Latest Tech Trends</h1>

      {trends.length === 0 ? (
        <p>No trends added yet.</p>
      ) : (
        <div className="space-y-5">
          {trends.map((trend) => (
            <div
              key={trend._id}
              className="p-5 border rounded-lg shadow-sm bg-white"
            >
              <h2 className="text-xl font-semibold">{trend.title}</h2>
              <p className="text-gray-600">{trend.desc}</p>

              <div className="mt-2">
                <span className="font-medium text-purple-600">
                  Source: {trend.source}
                </span>
              </div>

              <a
                href={trend.link}
                target="_blank"
                className="text-blue-500 underline mt-2 block"
              >
                Read Article →
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TechTrends;
