
import React, { useState } from 'react';
import { Camera, Focus, Triangle, Zap, Settings, Plus } from 'lucide-react';

const categories = [
  { name: 'Camera', icon: Camera },
  { name: 'Lens', icon: Focus },
  { name: 'Tripods', icon: Triangle },
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
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-4 justify-items-center">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.name}
                onClick={() => onCategorySelect(category.name)}
                className={`flex flex-col items-center p-3 sm:p-4 rounded-lg transition-all duration-200 hover:bg-white hover:shadow-md w-full max-w-[100px] ${
                  selectedCategory === category.name 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 mb-1 sm:mb-2" />
                <span className="text-xs sm:text-sm font-medium text-center leading-tight">{category.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryNav;
