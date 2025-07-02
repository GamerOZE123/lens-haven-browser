
import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-4">SONY FX3</h1>
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold">35mm</div>
                <div className="text-sm text-gray-300">full frame</div>
                <div className="text-xs text-gray-400">high-sensitivity CMOS sensor</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">4K<sub>PHDI</sub></div>
                <div className="text-sm text-gray-300">high-frame-rate</div>
                <div className="text-xl font-bold">120<sub>fps</sub></div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-300">Weight</div>
                <div className="text-2xl font-bold">715<sub>g</sub></div>
                <div className="text-xs text-gray-400">Approx</div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=400&fit=crop" 
              alt="Sony FX3 Camera" 
              className="rounded-lg shadow-2xl max-w-md w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
