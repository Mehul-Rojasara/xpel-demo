import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  readonly label?: string;
  readonly required?: boolean;
  readonly optional?: boolean;
  readonly error?: string;
  readonly helperText?: string;
  readonly variant?: "default" | "error" | "success";
  readonly labelFor?: string; // Manual specification of 'for' attribute
}

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  readonly label?: string;
  readonly required?: boolean;
  readonly optional?: boolean;
  readonly error?: string;
  readonly helperText?: string;
  readonly variant?: "default" | "error" | "success";
  readonly rows?: number;
  readonly labelFor?: string; // Manual specification of 'for' attribute
}

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  readonly label?: string;
  readonly required?: boolean;
  readonly error?: string;
  readonly helperText?: string;
  readonly labelFor?: string; // Manual specification of 'for' attribute
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  readonly label?: string;
  readonly required?: boolean;
  readonly optional?: boolean;
  readonly error?: string;
  readonly helperText?: string;
  readonly variant?: "default" | "error" | "success";
  readonly options: ReadonlyArray<{ readonly value: string; readonly label: string }>;
  readonly labelFor?: string; // Manual specification of 'for' attribute
}

interface FormProps {
  readonly children: React.ReactNode;
  readonly onSubmit?: (e: React.FormEvent) => void;
  readonly className?: string;
}

interface RequiredFieldNoteProps {
  readonly message?: string;
  readonly className?: string;
}

// Base Input Component
export const Input: React.FC<InputProps> = ({
  label,
  required = false,
  optional = false,
  error,
  helperText,
  variant = "default",
  className = "",
  disabled,
  id,
  name,
  labelFor, // New prop for manual 'for' attribute
  ...props
}) => {
  // Stable ID for SSR/CSR using React.useId
  const generatedId = React.useId();
  const inputId = id || name || generatedId;

  // Use manual labelFor if provided, otherwise use inputId
  const labelForId = labelFor || inputId;

  // Base classes based on SCSS form-input mixin
  const baseClasses = `
    block w-full border border-neutral-500 
    px-3 py-2.5 md:px-4 md:py-2.5 xl:px-4 xl:py-2.5
    text-neutral-900 font-sans text-base md:text-lg leading-[18px] font-[450]
    bg-white rounded transition-all duration-300 ease-in-out
    outline-none
    min-h-[48px]
    hover:border-accent-teal-300
    focus:border-accent-teal-300 focus:shadow-[0_0_0_3px_rgba(27,109,106,0.4)]
    disabled:border-neutral-500 disabled:opacity-80 disabled:cursor-not-allowed
  `;

  const variantClasses = {
    default: `border-neutral-500`,
    error: `border-error-400 focus:border-error-400 focus:shadow-[0_24px_22px_-10px_rgba(239,68,68,0.3)]`,
    success: `border-success-400 focus:border-success-400 focus:shadow-[0_0_3px_rgba(34,197,94,0.3)]`,
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`.trim().replace(/\s+/g, " ");

  return (
    <div className="w-full relative">
      {label && (
        <label
          htmlFor={labelForId}
          className="inline-block text-[16px] leading-[18px] font-sans font-medium text-neutral-900 mb-2 cursor-pointer"
        >
          {label}
          {required && <span className="text-neutral-900    ">*</span>}
          {optional && <span className="text-neutral-600 ml-1">(Optional)</span>}
        </label>
      )}
      <input id={inputId} name={name} className={classes} disabled={disabled} {...props} />
      {error && <p className="inline-block mt-2 text-[.875rem] font-normal font-sans text-error-300">{error}</p>}
      {helperText && !error && (
        <p className="inline-block mt-2 text-[.875rem] font-normal font-sans  text-neutral-600">{helperText}</p>
      )}
    </div>
  );
};

// TextArea Component
export const TextArea: React.FC<TextAreaProps> = ({
  label,
  required = false,
  optional = false,
  error,
  helperText,
  variant = "default",
  rows = 4,
  className = "",
  disabled,
  id,
  name,
  labelFor, // New prop for manual 'for' attribute
  ...props
}) => {
  // Stable ID for SSR/CSR using React.useId
  const generatedId = React.useId();
  const textareaId = id || name || generatedId;

  // Use manual labelFor if provided, otherwise use textareaId
  const labelForId = labelFor || textareaId;

  // Base classes based on SCSS form-input mixin with textarea specific adjustments
  const baseClasses = `
    block w-full border border-neutral-500 
    px-3 py-2.5 md:px-4 md:py-2.5 xl:px-4 xl:py-3
    text-neutral-900 font-sans text-base md:text-lg leading-[18px] font-[450]
    bg-white rounded transition-all duration-300 ease-in-out
    outline-none resize-none min-h-[100px]
    hover:border-accent-teal-300
    focus:border-accent-teal-300 focus:shadow-[0_0_0_3px_rgba(27,109,106,0.4)]
    disabled:border-neutral-500 disabled:opacity-80 disabled:cursor-not-allowed
  `;

  const variantClasses = {
    default: `border-neutral-500`,
    error: `border-error-400 focus:border-error-400 focus:shadow-[0_24px_22px_-10px_rgba(239,68,68,0.3)]`,
    success: `border-success-400 focus:border-success-400 focus:shadow-[0_0_3px_rgba(34,197,94,0.3)]`,
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`.trim().replace(/\s+/g, " ");

  return (
    <div className="w-full relative">
      {label && (
        <label
          htmlFor={labelForId}
          className="inline-block text-[16px] leading-[18px] font-sans font-medium text-neutral-900 cursor-pointer mb-2"
        >
          {label}
          {required && <span className="text-neutral-900 ml-1">*</span>}
          {optional && <span className="text-neutral-600 ml-1">(Optional)</span>}
        </label>
      )}
      <textarea id={textareaId} name={name} rows={rows} className={classes} disabled={disabled} {...props} />
      {error && <p className="inline-block mt-2 text-[.875rem] font-normal font-sans text-error-300">{error}</p>}
      {helperText && !error && (
        <p className="inline-block mt-2 text-[.875rem] font-normal font-sans text-neutral-600">{helperText}</p>
      )}
    </div>
  );
};

// Select Component
export const Select: React.FC<SelectProps> = ({
  label,
  required = false,
  optional = false,
  error,
  helperText,
  variant = "default",
  options,
  className = "",
  disabled,
  id,
  name,
  labelFor, // New prop for manual 'for' attribute
  ...props
}) => {
  // Stable ID for SSR/CSR using React.useId
  const generatedId = React.useId();
  const selectId = id || name || generatedId;

  // Use manual labelFor if provided, otherwise use selectId
  const labelForId = labelFor || selectId;

  // Base classes based on SCSS form-input mixin with select specific adjustments
  const baseClasses = `
    block w-full border border-neutral-500 
    px-3 py-2.5 md:px-4 md:py-2.5 xl:px-4 xl:py-3
    text-neutral-900 font-sans text-base md:text-lg leading-[18px] font-[450]
    bg-white rounded transition-all duration-300 ease-in-out
    outline-none appearance-none cursor-pointer relative
    hover:border-accent-teal-300
    focus:border-accent-teal-300 focus:shadow-[0_0_0_3px_rgba(27,109,106,0.4)]
    disabled:border-neutral-500 disabled:opacity-80 disabled:cursor-not-allowed
    pr-12 bg-no-repeat bg-right
  `;

  const variantClasses = {
    default: `border-neutral-500`,
    error: `border-error-400 focus:border-error-400 focus:shadow-[0_24px_22px_-10px_rgba(239,68,68,0.3)]`,
    success: `border-success-400 focus:border-success-400 focus:shadow-[0_0_3px_rgba(34,197,94,0.3)]`,
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`.trim().replace(/\s+/g, " ");

  return (
    <div className="w-full relative">
      {label && (
        <label
          htmlFor={labelForId}
          className="text-[16px] leading-[18px] font-sans font-medium text-neutral-900 cursor-pointer mb-2"
        >
          {label}
          {required && <span className="text-neutral-900 ml-1">*</span>}
          {optional && <span className="text-neutral-600 ml-1">(Optional)</span>}
        </label>
      )}
      <div className="relative">
        <select id={selectId} name={name} className={classes} disabled={disabled} {...props}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
          <svg className="w-4 h-4 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      {error && <p className="inline-block mt-1.5 text-sm text-error-300">{error}</p>}
      {helperText && !error && <p className="inline-block mt-1.5 text-sm text-neutral-600">{helperText}</p>}
    </div>
  );
};

// Checkbox Component
export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  required = false,
  error,
  helperText,
  className = "",
  disabled,
  id,
  name,
  labelFor, // New prop for manual 'for' attribute
  ...props
}) => {
  // Stable ID for SSR/CSR using React.useId
  const generatedId = React.useId();
  const checkboxId = id || name || generatedId;

  // Use manual labelFor if provided, otherwise use checkboxId
  const labelForId = labelFor || checkboxId;

  return (
    <div className="w-full relative">
      <div className="flex items-start space-x-3 ">
        <input
          type="checkbox"
          id={checkboxId}
          name={name}
          className={`
            w-5 h-5 border-neutral-500 rounded 
            accent-black  
            
            disabled:border-neutral-500 disabled:opacity-80 disabled:cursor-not-allowed
            ${className}
          `}
          disabled={disabled}
          {...props}
        />
        {label && (
          <label
            htmlFor={labelForId}
            className="text-[16px] leading-[18px] font-sans font-medium text-neutral-900 mb-2 cursor-pointer"
          >
            {label}
            {required && <span className="text-neutral-900 ml-1">*</span>}
          </label>
        )}
      </div>
      {error && <p className="inline-block mt-1.5 text-sm text-error-300 ml-7">{error}</p>}
      {helperText && !error && <p className="inline-block mt-1.5 text-sm text-neutral-600 ml-7">{helperText}</p>}
    </div>
  );
};

// Form Container Component
export const Form: React.FC<FormProps> = ({ children, onSubmit, className = "" }) => {
  return (
    <form onSubmit={onSubmit} className={`space-y-6 ${className}`}>
      {children}
    </form>
  );
};

// Required Field Note Component
export const RequiredFieldNote: React.FC<RequiredFieldNoteProps> = ({
  message = "* indicates a required field",
  className = "",
}) => {
  return <p className={`text-[16px] leading-loose font-sans font-medium text-neutral-900 ${className}`}>{message}</p>;
};

// Form Section Component
export const FormSection: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = "",
}) => {
  return <div className={`space-y-6 ${className}`}>{children}</div>;
};

// Input Group Component
export const InputGroup: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = "",
}) => {
  return <div className={`${className}`}>{children}</div>;
};
