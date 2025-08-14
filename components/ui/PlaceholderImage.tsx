import React from 'react';

interface PlaceholderImageProps {
  width: number;
  height: number;
  text?: string;
  className?: string;
}

export const PlaceholderImage: React.FC<PlaceholderImageProps> = ({
  width,
  height,
  text = "Image",
  className = ""
}) => {
  return (
    <div 
      className={`bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-500 font-medium ${className}`}
      style={{ width: `${width}px`, height: `${height}px` }}
      role="img"
      aria-label={`Placeholder image: ${text}`}
    >
      {text}
    </div>
  );
}; 