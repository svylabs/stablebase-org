import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-red-100 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Stable Base coin</h1>
      <p className="text-lg text-gray-600">
        This is a basic setup of a React component using Tailwind CSS for styling.
      </p>
      <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Get Started
      </button>
    </div>
  );
};

export default Home;
