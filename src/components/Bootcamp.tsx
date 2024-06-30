import React, { useState } from 'react';
import Quiz from './Quiz';

const Bootcamp: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const skills = ['Python', 'Chash', 'C++', 'UI/UX'];

  const handleSkillSelect = (skill: string) => {
    setSelectedSkill(skill);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 border bg-gray-300 border-gray-300 rounded-md">
      <h1 className="text-2xl font-bold mb-4">Bootcamp</h1>
      {!selectedSkill ? (
        <div>
          <p>Select the skill you have learned:</p>
          {skills.map(skill => (
            <button
              key={skill}
              onClick={() => handleSkillSelect(skill)}
              className="m-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              {skill}
            </button>
          ))}
        </div>
      ) : (
        <Quiz skill={selectedSkill} />
      )}
    </div>
  );
};

export default Bootcamp;
