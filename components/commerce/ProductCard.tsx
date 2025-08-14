import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { formatCurrency } from '@/lib/utils';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  image: string;
  category: string;
  sku: string;
}

interface ProductCardProps {
  product: Product;
  country: string;
  language: string;
  onAddToCart?: (product: Product) => void;
  onViewDetails?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  // country,
  language,
  onAddToCart,
  onViewDetails,
}) => {
  const handleAddToCart = () => {
    onAddToCart?.(product);
  };

  const handleViewDetails = () => {
    onViewDetails?.(product);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-w-1 aspect-h-1 w-full">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={192}
          className="w-full h-48 object-cover"
        />
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {product.name}
        </h3>
        
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <span className="text-xl font-bold text-gray-900">
            {formatCurrency(product.price, product.currency, language)}
          </span>
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
            {product.sku}
          </span>
        </div>
        
        <div className="space-y-2">
          <Button
            variant="primary"
            size="sm"
            onClick={handleAddToCart}
            className="w-full"
          >
            Add to Cart
          </Button>
          
          <Button
            variant="secondary"
            buttonStyle="outlined"
            size="sm"
            onClick={handleViewDetails}
            className="w-full"
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
}; 