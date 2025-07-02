
import React from 'react';
import ProductCard from './ProductCard';

interface ProductGridProps {
  category: string;
}

const productData = {
  Camera: [
    { name: 'Sony alpha 7 III', price: '₹1500', image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=300&fit=crop' },
    { name: 'Sony alpha 7 III', price: '₹1500', image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=300&fit=crop' },
    { name: 'Sony alpha 7 III', price: '₹1600', image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=300&fit=crop' },
    { name: 'Sony alpha 7 III', price: '₹1600', image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=300&fit=crop' }
  ],
  Lens: [
    { name: 'Sony alpha 7 III', price: '₹1500', image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=300&fit=crop' },
    { name: 'Sony alpha 7 III', price: '₹1500', image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=300&fit=crop' },
    { name: 'Sony alpha 7 III', price: '₹1600', image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=300&fit=crop' },
    { name: 'Sony alpha 7 III', price: '₹1600', image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=300&fit=crop' }
  ],
  Tripods: [
    { name: 'Sony alpha 7 III', price: '₹1500', image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=300&fit=crop' },
    { name: 'Sony alpha 7 III', price: '₹1500', image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=300&fit=crop' },
    { name: 'Sony alpha 7 III', price: '₹1600', image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=300&fit=crop' },
    { name: 'Sony alpha 7 III', price: '₹1600', image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=300&fit=crop' }
  ],
  Drone: [
    { name: 'DJI Mavic Pro', price: '₹2500', image: 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=300&h=300&fit=crop' },
    { name: 'DJI Air 2S', price: '₹2200', image: 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=300&h=300&fit=crop' },
    { name: 'DJI Mini 3', price: '₹1800', image: 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=300&h=300&fit=crop' },
    { name: 'DJI Phantom 4', price: '₹2000', image: 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=300&h=300&fit=crop' }
  ]
};

const ProductGrid: React.FC<ProductGridProps> = ({ category }) => {
  const products = productData[category as keyof typeof productData] || productData.Camera;

  return (
    <div className="flex-1">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">{category}</h2>
        <button className="text-blue-600 hover:text-blue-800 font-medium">
          View All →
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            price={product.price}
            image={product.image}
            category={category}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
