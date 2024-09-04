import React from 'react';

function Hero() {
  return (
    <div className="relative pt-40 flex flex-col items-center justify-center bg-cover bg-center">
      <div className="relative z-10 text-center px-6 max-w-2xl">
        <h1 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 animate-fadeIn">
          Welcome to Triptactix
        </h1>
        <p className="text-lg font-bold text-teal-600 mb-10 animate-fadeIn delay-100">
          Discover and plan your perfect trip with AI-driven insights, personalized recommendations, and smart itineraries.
        </p>
        <button className="px-8 py-2  bg-gradient-to-r from-teal-400 to-blue-500 hover:from-blue-500 hover:to-teal-400 text-white rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Hero;
