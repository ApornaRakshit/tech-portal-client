import React from "react";

const CircularProgress = ({ value }) => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <svg width="120" height="120" className="mx-auto">
      <circle
        cx="60"
        cy="60"
        r={radius}
        stroke="#eee"
        strokeWidth="10"
        fill="none"
      />
      <circle
        cx="60"
        cy="60"
        r={radius}
        stroke="url(#gradient)"
        strokeWidth="10"
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform="rotate(-90 60 60)"
      />

      {/* Gradient */}
      <defs>
        <linearGradient id="gradient" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6EA8FE" />
          <stop offset="100%" stopColor="#A78BFA" />
        </linearGradient>
      </defs>

      <text
        x="60"
        y="65"
        textAnchor="middle"
        fontSize="20"
        fontWeight="bold"
        fill="#333"
      >
        {value}%
      </text>
    </svg>
  );
};

export default CircularProgress;
