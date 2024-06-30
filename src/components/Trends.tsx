import React from 'react';

const skills = [
  {
    title: 'Python Programming',
    description: 'Python is a versatile programming language used in various domains, including web development, data science, and automation.',
    tags: ['Web Development', 'Data Science', 'Automation'],
  },
  {
    title: 'JavaScript',
    description: 'JavaScript is a programming language that allows for dynamic and interactive web development.',
    tags: ['Web Development', 'Front-end Development', 'Node.js'],
  },
  {
    title: 'UI/UX Design',
    description: 'UI/UX Design focuses on creating visually appealing and user-friendly interfaces for websites and applications.',
    tags: ['User Experience', 'Responsive Design', 'Prototyping'],
  },
];

const Trends: React.FC = () => {
  return (
    <div className="bg-gradient-to-r flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-white mb-10">Trendy Skills</h1>
      <div className="space-y-6">
        {skills.map((skill) => (
          <div
            key={skill.title}
            className="bg-white rounded-lg shadow-lg p-6 w-80 mx-auto"
          >
            <h2 className="text-2xl font-semibold mb-2">{skill.title}</h2>
            <p className="text-gray-700 mb-4">{skill.description}</p>
            <div className="flex flex-wrap gap-2">
              {skill.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trends;
