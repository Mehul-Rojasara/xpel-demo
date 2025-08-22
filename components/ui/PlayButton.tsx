import React from 'react';

interface PlayButtonProps {
  readonly onClick: () => void;
  readonly ariaLabel?: string;
  readonly className?: string;
  readonly size?: 'sm' | 'md' | 'lg';
  readonly variant?: 'default' | 'overlay';
}

export const PlayButton: React.FC<PlayButtonProps> = ({
  onClick,
  ariaLabel = 'Play video',
  className = '',
  size = 'md',
  variant = 'default'
}) => {
  // Size classes
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-20 h-20'
  };

  // Triangle size classes
  const triangleSizeClasses = {
    sm: 'border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[12px] border-l-white ml-0.5',
    md: 'border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[16px] border-l-white ml-1',
    lg: 'border-t-[14px] border-t-transparent border-b-[14px] border-b-transparent border-l-[22px] border-l-white ml-1.5'
  };

  // Variant classes
  const variantClasses = {
    default: 'bg-black/60 hover:bg-black/80',
    overlay: 'bg-white/90 hover:bg-white text-black'
  };

  const buttonClasses = variant === 'overlay' 
    ? `absolute inset-0 flex items-center justify-center ${className}`
    : className;

  const iconClasses = variant === 'overlay'
    ? `w-14 h-14 rounded-full bg-white/90 hover:bg-white flex items-center justify-center`
    : `${sizeClasses[size]} rounded-full ${variantClasses[variant]} flex items-center justify-center`;

  const triangleClasses = variant === 'overlay'
    ? 'border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[16px] border-l-black ml-1'
    : triangleSizeClasses[size];

  return (
    <button
      aria-label={ariaLabel}
      onClick={onClick}
      className={buttonClasses}
    >
      <div className={iconClasses}>
        <div className={triangleClasses} />
      </div>
    </button>
  );
}; 