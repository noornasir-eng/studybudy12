import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Python from './Python';
import Chash from './Chash';
import Cplusplus from './Cplusplus';
import Uiux from './Uiux';

const Skills: React.FC = () => {
  return (
    <div>
      <h2 className="text-5xl text-white font-bold mb-4">Skills</h2>
      <ul className="mb-8">
        <li className="mb-2 border bg-gray-300 border-gray-300 rounded-md">
          <Link to="python" className="block text-3xl text-gray-700 font-bold hover:text-gray-900 p-4">
            Python
          </Link>
        </li>
        <li className="mb-2 border bg-gray-300 border-gray-300 rounded-md">
          <Link to="chash" className="block text-3xl text-gray-700 font-bold hover:text-gray-900 p-4">
            C#
          </Link>
        </li>
        <li className="mb-2 border bg-gray-300 border-gray-300 rounded-md">
          <Link to="cplusplus" className="block text-3xl text-gray-700 font-bold hover:text-gray-900 p-4">
            C++
          </Link>
        </li>
        <li className="mb-2 border bg-gray-300 border-gray-300 rounded-md">
          <Link to="uiux" className="block text-3xl text-gray-700 font-bold hover:text-gray-900 p-4">
            UI/UX
          </Link>
        </li>
      </ul>
      <Routes>
        <Route path="python" element={<Python />} />
        <Route path="chash" element={<Chash />} />
        <Route path="cplusplus" element={<Cplusplus />} />
        <Route path="uiux" element={<Uiux />} />
      </Routes>
    </div>
  );
}

export default Skills;
