import React from "react";

const Features = () => {
  return (    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-bold text-gray-900 mb-8">
          Featured Dogs Available for Adoption
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="text-xl font-semibold mb-2">
              Buddy - Golden Retriever
            </h4>
            <p className="text-gray-600 mb-4">
              3 years old • Friendly and energetic • Great with kids
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Learn More
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="text-xl font-semibold mb-2">Max - German Shepherd</h4>
            <p className="text-gray-600 mb-4">
              5 years old • Loyal and protective • Well-trained
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Learn More
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="text-xl font-semibold mb-2">Luna - Border Collie</h4>
            <p className="text-gray-600 mb-4">
              2 years old • Intelligent and active • Loves to play
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Learn More
            </button>
          </div>
        </div>
        
        {/* Training Programs Section - Coming Soon */}
        <div className="mt-16 bg-gray-100 p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Training Programs Coming Soon!
          </h3>
          <p className="text-gray-600 mb-6">
            Connect with professional dog trainers and access training programs to help your new companion.
          </p>
          <button className="bg-gray-400 text-white px-6 py-3 rounded-lg font-semibold cursor-not-allowed" disabled>
            Training Programs (Coming Soon)
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
