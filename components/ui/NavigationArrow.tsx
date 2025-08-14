import React from 'react';

interface NavigationArrowProps {
  direction: 'prev' | 'next';
  onClick: () => void;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'outlined' | 'filled' | 'custom';
  className?: string;
  'aria-label'?: string;
}

export const NavigationArrow: React.FC<NavigationArrowProps> = ({
  direction,
  onClick,
  disabled = false,
  size = 'md',
  variant = 'default',
  className = '',
  'aria-label': ariaLabel
}) => {
  // Size classes
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  // Variant classes
  const variantClasses = {
    default: 'bg-white/90 hover:bg-white text-gray-900 shadow-lg hover:shadow-xl',
    outlined: 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900',
    filled: 'bg-gray-900 text-white hover:bg-gray-800',
    custom: '' // Custom variant for manual styling
  };

  // Arrow direction
  const arrowClasses = direction === 'prev' 
    ? 'rotate-180' 
    : '';

  const baseClasses = `${sizeClasses[size]} rounded-full flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed ${variantClasses[variant]} ${className}`;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      aria-label={ariaLabel || `${direction === 'prev' ? 'Previous' : 'Next'} slide`}
      type="button"
    >
      <svg 
        className={`w-4 h-4 ${arrowClasses}`}
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M9 5l7 7-7 7" 
        />
      </svg>
    </button>
  );
}; 