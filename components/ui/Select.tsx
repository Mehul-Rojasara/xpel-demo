import React from "react";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  placeholder?: string;
  disabled?: boolean;
  ariaLabel?: string;
  className?: string;
  id?: string;
}

const ChevronDown = ({ className = "h-4 w-4" }) => (
  <svg aria-hidden="true" viewBox="0 0 20 20" className={className}>
    <path
      fill="currentColor"
      d="M5.3 7.3a1 1 0 011.4 0L10 10.6l3.3-3.3a1 1 0 111.4 1.4l-4 4a1 1 0 01-1.4 0l-4-4a1 1 0 010-1.4z"
    />
  </svg>
);

export const Select: React.FC<SelectProps> = ({
  value,
  onChange,
  options,
  placeholder = "Select an option",
  disabled = false,
  ariaLabel,
  className = "",
  id,
}) => {
  return (
    <div className="relative">
      <select
        id={id}
        aria-label={ariaLabel}
        className={`w-full h-10 rounded-md border border-gray-300 bg-white px-3 pr-8 text-sm leading-none appearance-none focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20 disabled:bg-gray-100 ${className}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
    </div>
  );
}; 