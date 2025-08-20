import React from "react";

interface ContainerProps {
  readonly children: React.ReactNode;
  readonly fullWidth?: boolean;
  readonly className?: string;
}

export default function Container({ children, fullWidth = false, className = "" }: ContainerProps) {
  return (
    <div
      className={`${fullWidth ? "max-w-full" : "xs:max-w-[30rem] sm:max-w-[47.5rem] md:max-w-[64rem] lg:max-w-[80rem] xl:max-w-[93rem]"} mx-auto px-6 ${className}`}
    >
      {children}
    </div>
  );
}
