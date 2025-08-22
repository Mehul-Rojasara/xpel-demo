import React from 'react';
import Container from '@/components/ui/Container';

interface RacingStatsProps {
  readonly title?: string;
  readonly driverName?: string;
  readonly year?: string;
  readonly stats?: ReadonlyArray<{
    readonly icon: React.ReactNode;
    readonly value: string;
    readonly description: string;
  }>;
  readonly className?: string;
  readonly 'aria-label'?: string;
}

export const RacingStats: React.FC<RacingStatsProps> = ({
  title = "The 2024 Results Are In",
  driverName = "Scott",
  className = "",
  'aria-label': ariaLabel,
  stats = [
    {
      icon: (
        <svg className="w-8 h-8 lg:w-[3.125rem] lg:h-[3.125rem]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 2a10 10 0 0 0-10 10 10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2zm0 16a6 6 0 1 1 0-12 6 6 0 0 1 0 12z"/>
        </svg>
      ),
      value: "45%",
      description: `Races lead by ${driverName}`
    },
    {
      icon: (
        <svg className="w-8 h-8 lg:w-[3.125rem] lg:h-[3.125rem]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      value: "x12",
      description: `${driverName} finished in the Top 3`
    },
    {
      icon: (
        <svg className="w-8 h-8 lg:w-[3.125rem] lg:h-[3.125rem]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM9 3V4H15V3H9ZM7 6V19H17V6H7Z"/>
          <path d="M9 8H11V17H9V8ZM13 8H15V17H13V8Z"/>
        </svg>
      ),
      value: "x4",
      description: `${driverName} qualified on pole position`
    },
    {
      icon: (
        <svg className="w-8 h-8 lg:w-[3.125rem] lg:h-[3.125rem]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6.5 2C5.67 2 5 2.67 5 3.5S5.67 5 6.5 5 8 4.33 8 3.5 7.33 2 6.5 2M17.5 2C16.67 2 16 2.67 16 3.5S16.67 5 17.5 5 19 4.33 19 3.5 18.33 2 17.5 2M6.5 6C5.67 6 5 6.67 5 7.5C5 8.33 5.67 9 6.5 9C7.33 9 8 8.33 8 7.5C8 6.67 7.33 6 6.5 6M17.5 6C16.67 6 16 6.67 16 7.5C16 8.33 16.67 9 17.5 9C18.33 9 19 8.33 19 7.5C19 6.67 18.33 6 17.5 6M2 10V12H4V10H2M8 10V12H16V10H8M20 10V12H22V10H20M2 14V16H4V14H2M8 14V16H16V14H8M20 14V16H22V14H20M6.5 18C5.67 18 5 18.67 5 19.5S5.67 21 6.5 21 8 20.33 8 19.5 7.33 18 6.5 18M17.5 18C16.67 18 16 18.67 16 19.5S16.67 21 17.5 21 19 20.33 19 19.5 18.33 18 17.5 18Z"/>
        </svg>
      ),
      value: "320",
      description: `Total amount of race laps lead by ${driverName}`
    }
  ]
}) => {
  return (
    <section 
      className={`bg-gradient-to-br from-indigo-100 via-purple-50 to-blue-100 py-16 sm:py-20 lg:py-[7.5rem] ${className}`}
      aria-label={ariaLabel || "Racing statistics dashboard"}
    >
      <Container className="w-full flex flex-col justify-center items-center">
        {/* Main Title */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
            {title}
          </h2>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-[1.875rem] w-full">
          {stats.map((stat, index) => (
            <div 
              key={`${stat.value}-${index}`}
              className="bg-white rounded-xl shadow-lg border border-gray-100 p-4 sm:p-6 lg:p-8 transition-all duration-300 hover:shadow-xl hover:scale-105 w-full lg:h-[159px]"
            >
              <div className="flex items-center space-x-4 sm:space-x-6 lg:space-x-8 h-full">
                {/* Icon */}
                <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-[3.125rem] lg:h-[3.125rem] flex items-center justify-center text-gray-800 flex-shrink-0 text-[3.125rem]">
                  {stat.icon}
                </div>
                
                {/* Content */}
                <div className="flex flex-col justify-center space-y-2 sm:space-y-3 flex-1">
                  {/* Value */}
                  <h3 className="font-h2 font-sans font-bold text-gray-900 leading-none">
                    {stat.value}
                  </h3>
                  {/* Description */}
                  <p className="text-sm sm:text-base lg:text-xl text-gray-600 leading-relaxed font-sans">
                    {stat.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};