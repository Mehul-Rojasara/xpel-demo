import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
}

export default function Container({ children, fullWidth = false, className = "" }: ContainerProps) {
  return (
    <div
      className={`${fullWidth ? "max-w-full" : "xs:max-w-[480px] sm:max-w-[760px] md:max-w-[1024px] lg:max-w-[1280px] xl:max-w-[1680px]"} mx-auto px-6 ${className}`}
    >
      {children}
    </div>
  );
}
