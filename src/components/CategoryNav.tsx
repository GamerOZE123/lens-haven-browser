
import React, { useState } from 'react';
import { Camera, Focus, Tripod, Zap, Settings, Plus } from 'lucide-react';

const categories = [
  { name: 'Camera', icon: Camera },
  { name: 'Lens', icon: Focus },
  { name: 'Tripods', icon: Tripod },
  { name: 'Drone', icon: Settings },
  { name: 'Lights', icon: Zap },
  { name: 'Gimbals', icon: Settings },
  { name: 'More', icon: Plus }
];

interface CategoryNavProps {
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

const CategoryNav: React.FC<CategoryNavProps> = ({ selectedCategory, onCategorySelect }) => {
  return (
    <div className="bg-gray-50 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-8 overflow-x-auto">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.name}
                onClick={() => onCategorySelect(category.name)}
                className={`flex flex-col items-center p-4 rounded-full transition-all duration-200 hover:bg-white hover:shadow-md ${
                  selectedCategory === category.name 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                <IconComponent className="h-6 w-6 mb-2" />
                <span className="text-sm font-medium whitespace-nowrap">{category.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryNav;
