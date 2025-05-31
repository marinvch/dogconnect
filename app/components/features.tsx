import React from "react";

const Features = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-bold text-gray-900 mb-8">
          Featured Training Programs
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="text-xl font-semibold mb-2">
              Basic Obedience Training
            </h4>
            <p className="text-gray-600 mb-4">
              Teach your dog essential commands like sit, stay, and come
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Start Training
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="text-xl font-semibold mb-2">Puppy Socialization</h4>
            <p className="text-gray-600 mb-4">
              Help your puppy develop confidence and social skills
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Start Training
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="text-xl font-semibold mb-2">Advanced Tricks</h4>
            <p className="text-gray-600 mb-4">
              Teach your dog impressive tricks and behaviors
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Start Training
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
