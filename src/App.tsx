import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Analytics from './components/Analytics';
import Bootcamp from './components/Bootcamp';
import Chash from './components/Chash'; 
import Cplusplus from './components/Cplusplus';
import Login from './components/Login';
import Openchat from './components/Openchat';
import Profile from './components/Profile';
import Signup from './components/Signup';
import Python from './components/Python';
import Skills from './components/Skills';
import Trends from './components/Trends';
import Uiux from './components/Uiux';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-purple-400  to-blue-500">
        <header className="bg-purple-400 shadow-md">
          <nav className="container mx-auto flex justify-between items-center p-6">
            <h1 className="text-3xl font-bold text-gray-800">StudyBuddy</h1>
            <ul className="flex space-x-4">
              <li><Link to="/" className="text-lg font-bold text-black hover:text-gray-700">Home</Link></li>
              <li><Link to="/profile" className="text-lg font-bold text-black hover:text-gray-700">Profile</Link></li>
              <li><Link to="/analytics" className="text-lg font-bold text-black hover:text-gray-700">Analytics</Link></li>
              <li><Link to="/bootcamp" className="text-lg font-bold text-black hover:text-gray-700">Bootcamp</Link></li>
              <li><Link to="/openchat" className="text-lg font-bold text-black hover:text-gray-700">Openchat</Link></li>
              <li><Link to="/skills" className="text-lg font-bold text-black hover:text-gray-700">Skills</Link></li>
              <li><Link to="/trends" className="text-lg font-bold text-black hover:text-gray-700">Trends</Link></li>
            </ul>
            <div>
              <Link to="/login" className="text-lg font-bold text-gray-500 hover:text-gray-900">Login</Link>
              <Link to="/signup" className="ml-4 text-lg font-bold text-gray-500 hover:text-gray-900">Signup</Link>
            </div>
            </nav>
        </header>
        <main className="container mx-auto p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/bootcamp" element={<Bootcamp />} />
            <Route path="/skills/*" element={<Skills />} />
            <Route path="/openchat" element={<Openchat />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/trends" element={<Trends />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/skills/python" element={<Python />} />
            <Route path="/skills/cash" element={<Chash />} />
            <Route path="/skills/cplusplus" element={<Cplusplus />} />
            <Route path="/skills/uiux" element={<Uiux />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
