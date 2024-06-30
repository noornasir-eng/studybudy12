import React, { useState, useEffect } from 'react';

const Analytics: React.FC = () => {
  const [scores, setScores] = useState<{ [skill: string]: number }>({});

  useEffect(() => {
    // Fetch scores from localStorage or API
    const storedAnalytics = localStorage.getItem('analytics');
    if (storedAnalytics) {
      const parsedAnalytics = JSON.parse(storedAnalytics);
      setScores(parsedAnalytics);
    }
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-6 border bg-gray-300 border-gray-300 rounded-md">
      <h1 className="text-2xl font-bold mb-4">Analytics</h1>

      <div>
        <h2 className="text-xl mb-2">Scores Overview</h2>
        <div className="mb-4">
          {Object.keys(scores).length > 0 ? (
            <ul>
              {Object.entries(scores).map(([skill, score]) => (
                <li key={skill} className="mb-2">
                  <strong>{skill}:</strong> {score}
                </li>
              ))}
            </ul>
          ) : (
            <p>No scores available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Analytics;
