
import React from 'react';

const brands = [
  { name: 'Canon', count: 34 },
  { name: 'Sony', count: 28 },
  { name: 'Nikon', count: 19 },
  { name: 'DJI', count: 12 },
  { name: 'Blackmagic', count: 8 },
  { name: 'RED', count: 6 },
  { name: 'Panasonic', count: 5 },
  { name: 'Fujifilm', count: 11 },
  { name: 'Sigma', count: 9 },
  { name: 'Tamron', count: 7 },
  { name: 'Sennheiser', count: 4 },
  { name: 'Aputure', count: 15 },
  { name: 'Godox', count: 8 }
];

const FilterSidebar = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
      <div className="space-y-3 mb-8">
        <div className="flex items-center space-x-3">
          <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
          <span className="text-gray-700">Cameras</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-4 h-4 bg-green-500 rounded-full"></div>
          <span className="text-gray-700">Lenses</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
          <span className="text-gray-700">Audio Equipment</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
          <span className="text-gray-700">Lighting</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-4 h-4 bg-red-500 rounded-full"></div>
          <span className="text-gray-700">Gimbals & Stabilizers</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-4 h-4 bg-indigo-500 rounded-full"></div>
          <span className="text-gray-700">Drones</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-4 h-4 bg-pink-500 rounded-full"></div>
          <span className="text-gray-700">Monitors & Displays</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-4 h-4 bg-teal-500 rounded-full"></div>
          <span className="text-gray-700">Storage & Media</span>
        </div>
      </div>

      <div className="border-t pt-6">
        <h4 className="font-medium text-gray-900 mb-4">Brands</h4>
        <div className="space-y-2 max-h-96 overflow-y-auto">
          {brands.map((brand) => (
            <div key={brand.name} className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 text-blue-600" />
                <span className="text-sm text-gray-700">{brand.name}</span>
              </label>
              <span className="text-xs text-gray-500">{brand.count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
