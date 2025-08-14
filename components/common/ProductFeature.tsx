import React from 'react';
import { ProductFeatureIcons } from '../ui/Icons';

interface ProductFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export const ProductFeature: React.FC<ProductFeatureProps> = ({
  icon,
  title,
  description,
  className = ''
}) => {
  return (
    <div className={`flex items-start space-x-4 ${className}`}>
      {/* Icon */}
      <div className="flex-shrink-0 w-8 h-8 text-primary-300">
        {icon}
      </div>
      
      {/* Content */}
      <div className="flex-1">
        <h4 className="text-lg font-semibold text-white mb-2">
          {title}
        </h4>
        <p className="text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

// Export the icons from the common file for backward compatibility
export const FeatureIcons = ProductFeatureIcons;

export default ProductFeature; 