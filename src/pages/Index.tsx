
import React, { useState } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CategoryNav from '../components/CategoryNav';
import FilterSidebar from '../components/FilterSidebar';
import ProductGrid from '../components/ProductGrid';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('Camera');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <CategoryNav 
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-64 flex-shrink-0">
            <FilterSidebar />
          </div>
          <ProductGrid category={selectedCategory} />
        </div>
      </div>
    </div>
  );
};

export default Index;
