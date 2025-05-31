import React from "react";

const Hero = () => {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Welcome to Your Dog Training Journey
        </h2>
        <p className="text-xl mb-8">
          Discover training programs, track your dog&apos;s progress, and
          achieve training goals
        </p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
          Browse Training Programs
        </button>
      </div>
    </section>
  );
};

export default Hero;
