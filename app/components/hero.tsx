import React from "react";

const Hero = () => {
  return (    <section className="bg-blue-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Find Your Perfect Furry Companion
        </h2>
        <p className="text-xl mb-8">
          Connect with adoptable dogs in your area and give them a loving home
        </p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
          Browse Available Dogs
        </button>
      </div>
    </section>
  );
};

export default Hero;
