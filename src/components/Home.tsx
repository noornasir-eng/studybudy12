import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-400 to-blue-500 text-black">
      <div className="flex flex-col items-center justify-center h-full">
        <img src="/study.png" alt="StudyBuddy" className="w-1 md:w-1/2 h-auto rounded-lg shadow-lg mb-8" />
        <h1 className="text-4xl font-bold mb-4">Welcome to StudyBuddy</h1>
        <p className="text-xl">Your skill exchange app</p>
        <div className="mt-8">
          <a href="/signup" className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-700 transition">Signup</a>
          <a href="/login" className="ml-4 px-4 py-2 bg-purple-500 text-white rounded-lg shadow hover:bg-purple-700 transition">Login</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
