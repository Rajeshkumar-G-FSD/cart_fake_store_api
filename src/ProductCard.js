// src/components/ProductCard.js
import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <img className="w-full h-48 object-cover mb-4" src={product.image} alt={product.title} />
      <h2 className="text-lg font-bold mb-2">{product.title}</h2>
      <p className="text-gray-700 mb-2">${product.price}</p>
      <button 
        className="bg-blue-500 text-white py-1 px-4 rounded" 
        onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
