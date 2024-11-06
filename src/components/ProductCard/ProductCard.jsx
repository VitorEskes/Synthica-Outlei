import React from 'react';
import { ShoppingCart } from 'lucide-react';

export default function ProductCard({ product }) {
   return (
    <div className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-70 object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2">
          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            -50%
          </span>
        </div>
      </div>
      
      <div className="p-2">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-gray-500 line-through text-sm">
              R$ {(product.price * 2).toFixed(2)}
            </p>
            <p className="text-xl font-bold text-blue-600">
              R$ {product.price}
            </p>
          </div>
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className="h-5 w-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 15.585l-6.327 3.954 1.209-7.04L.172 7.629l7.063-1.027L10 0l2.765 6.602 7.063 1.027-4.71 4.87 1.209 7.04z"
                />
              </svg>
            ))}
          </div>
        </div>
        
        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2">
          <ShoppingCart className="h-5 w-5" />
          <span>Adicionar ao Carrinho</span>
        </button>
      </div>
    </div>
  );
};
