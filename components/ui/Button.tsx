import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary";
  buttonStyle?: "filled" | "outlined";
  size?: "sm" | "md" | "lg";
  background?: "light" | "dark";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  isIconOnly?: boolean;
  isSelected?: boolean;
  children?: React.ReactNode;
  showArrows?: boolean; // New prop to show both left and right arrows
  type?: "button" | "submit" | "reset";
  "aria-label"?: string;
  "aria-describedby"?: string;
  "aria-expanded"?: boolean;
  "aria-pressed"?: boolean;
  "aria-haspopup"?: boolean;
  "aria-controls"?: string;
  role?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  buttonStyle = "filled",
  size = "md",
  background = "light",
  icon,
  iconPosition = "left",
  isIconOnly = false,
  isSelected = false,
  children,
  showArrows = false,
  className = "",
  type = "button",
  "aria-label": ariaLabel,
  "aria-describedby": ariaDescribedby,
  "aria-expanded": ariaExpanded,
  "aria-pressed": ariaPressed,
  "aria-haspopup": ariaHaspopup,
  "aria-controls": ariaControls,
  role,
  ...props
}) => {
  // Base classes for all buttons
  const baseClasses =
    "inline-flex items-center justify-center transition-all duration-300 focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none para-large font-display tracking-tight";

  // Size classes
  const sizeClasses = {
    sm: isIconOnly ? "w-12 h-12" : "h-9 px-3 text-sm",
    md: isIconOnly ? "w-12 h-12" : "h-12 px-5 py-3.5",
    lg: isIconOnly ? "w-14 h-14" : "h-14 px-6 py-4",
  };

  // Border radius classes
  const radiusClasses = "rounded-full";

  // Variant and style combinations for light background
  const lightVariantClasses = {
    primary: {
      filled: {
        default: `bg-[var(--button-primary-filled-bg)] text-[var(--button-primary-filled-text)] hover:bg-[var(--button-primary-filled-hover-bg)] hover:text-[var(--button-primary-filled-hover-text)]`,
        disabled: `bg-[var(--button-disabled-bg)] text-[var(--button-disabled-text)]`,
      },
      outlined: {
        default: `bg-[var(--button-primary-outlined-bg)] border border-[var(--button-primary-outlined-border)] text-[var(--button-primary-outlined-text)] hover:bg-[var(--button-primary-outlined-hover-bg)]`,
        disabled: `bg-[var(--button-primary-outlined-bg)] border border-[var(--button-disabled-border)] text-[var(--button-disabled-text)]`,
      },
    },
    secondary: {
      filled: {
        default: `bg-[var(--button-secondary-filled-bg)] text-[var(--button-secondary-filled-text)] hover:bg-[var(--button-secondary-filled-hover-bg)] hover:text-[var(--button-secondary-filled-hover-text)]`,
        disabled: `bg-[var(--button-disabled-bg)] text-[var(--button-disabled-text)]`,
      },
      outlined: {
        default: `bg-[var(--button-secondary-outlined-bg)] border border-[var(--button-secondary-outlined-border)] text-[var(--button-secondary-outlined-text)] hover:bg-[var(--button-secondary-outlined-hover-bg)]`,
        disabled: `bg-[var(--button-secondary-outlined-bg)] border border-[var(--button-disabled-border)] text-[var(--button-disabled-text)]`,
      },
    },
    tertiary: {
      filled: {
        default: `bg-[var(--button-tertiary-filled-bg)] text-[var(--button-tertiary-filled-text)] border border-[var(--button-tertiary-filled-border)] hover:bg-[var(--button-tertiary-filled-hover-bg)] hover:text-[var(--button-tertiary-filled-hover-text)]`,
        disabled: `bg-[var(--button-disabled-bg)] text-[var(--button-disabled-text)] border border-[var(--button-disabled-border)]`,
      },
      outlined: {
        default: `bg-[var(--button-tertiary-outlined-bg)] border border-[var(--button-tertiary-outlined-border)] text-[var(--button-tertiary-outlined-text)] hover:bg-[var(--button-tertiary-outlined-hover-bg)] hover:text-[var(--button-tertiary-outlined-hover-text)]`,
        disabled: `bg-[var(--button-tertiary-outlined-bg)] border border-[var(--button-disabled-border)] text-[var(--button-disabled-text)]`,
      },
    },
  };

  // Variant and style combinations for dark background
  const darkVariantClasses = {
    primary: {
      filled: {
        default: `bg-[var(--button-dark-primary-filled-bg)] text-[var(--button-dark-primary-filled-text)] hover:bg-[var(--button-dark-primary-filled-hover-bg)] hover:text-[var(--button-dark-primary-filled-hover-text)]`,
        disabled: `bg-[var(--button-disabled-dark-bg)] text-[var(--button-disabled-dark-text)]`,
      },
      outlined: {
        default: `bg-[var(--button-dark-primary-outlined-bg)] border border-[var(--button-dark-primary-outlined-border)] text-[var(--button-dark-primary-outlined-text)] hover:bg-[var(--button-dark-primary-outlined-hover-bg)]`,
        disabled: `bg-[var(--button-disabled-dark-bg)] border border-[var(--button-disabled-border)] text-[var(--button-disabled-dark-text)]`,
      },
    },
    secondary: {
      filled: {
        default: `bg-[var(--button-dark-secondary-filled-bg)] text-[var(--button-dark-secondary-filled-text)] hover:bg-[var(--button-dark-secondary-filled-hover-bg)] hover:text-[var(--button-dark-secondary-filled-hover-text)]`,
        disabled: `bg-[var(--button-disabled-dark-bg)] text-[var(--button-disabled-dark-text)]`,
      },
      outlined: {
        default: `bg-[var(--button-dark-secondary-outlined-bg)] border border-[var(--button-dark-secondary-outlined-border)] text-[var(--button-dark-secondary-outlined-text)] hover:bg-[var(--button-dark-secondary-outlined-hover-bg)]`,
        disabled: `bg-[var(--button-disabled-dark-bg)] border border-[var(--button-disabled-border)] text-[var(--button-disabled-dark-text)]`,
      },
    },
    tertiary: {
      filled: {
        default: `bg-[var(--button-dark-tertiary-filled-bg)] text-[var(--button-dark-tertiary-filled-text)] border border-[var(--button-dark-tertiary-filled-border)] hover:bg-[var(--button-dark-tertiary-filled-hover-bg)] hover:text-[var(--button-dark-tertiary-filled-hover-text)]`,
        disabled: `bg-[var(--button-disabled-dark-bg)] text-[var(--button-disabled-dark-text)] border border-[var(--button-disabled-border)]`,
      },
      outlined: {
        default: `bg-[var(--button-dark-tertiary-outlined-bg)] border border-[var(--button-dark-tertiary-outlined-border)] text-[var(--button-dark-tertiary-outlined-text)] hover:bg-[var(--button-dark-tertiary-outlined-hover-bg)] hover:text-[var(--button-dark-tertiary-outlined-hover-text)]`,
        disabled: `bg-[var(--button-disabled-dark-bg)] border border-[var(--button-disabled-border)] text-[var(--button-disabled-dark-text)]`,
      },
    },
  };

  // Focus state classes - removed dashed border
  const focusClasses = {
    light: {
      primary: "",
      secondary: "",
      tertiary: "",
    },
    dark: {
      primary: "",
      secondary: "",
      tertiary: "",
    },
  };

  // Get the appropriate variant classes based on background
  const variantClasses = background === "dark" ? darkVariantClasses : lightVariantClasses;
  const currentVariant = variantClasses[variant][buttonStyle];
  const currentState = props.disabled ? "disabled" : "default";
  const currentFocus = focusClasses[background][variant];

  // Icon-only button specific classes
  const iconOnlyClasses = isIconOnly ? "p-0" : "";

  // Selected state for icon-only buttons
  const selectedClasses = isSelected ? `bg-[var(--button-selected-bg)] text-[var(--button-selected-text)]` : "";

  const classes = `${baseClasses} ${sizeClasses[size]} ${radiusClasses} ${currentVariant[currentState]} ${currentFocus} ${iconOnlyClasses} ${selectedClasses} ${className}`;

  // Generate default aria-label for icon-only buttons if not provided
  const defaultAriaLabel = isIconOnly && !ariaLabel && children ? String(children) : ariaLabel;

  return (
    <button
      className={classes}
      type={type}
      aria-label={defaultAriaLabel}
      aria-describedby={ariaDescribedby}
      aria-expanded={ariaExpanded}
      aria-pressed={ariaPressed}
      aria-haspopup={ariaHaspopup}
      aria-controls={ariaControls}
      role={role}
      {...props}
    >
      {isIconOnly ? (
        icon
      ) : (
        <>
          {showArrows && <ArrowLeftIcon />}
          {icon && iconPosition === "left" && !showArrows && <span className="mr-2">{icon}</span>}
          <span className={showArrows ? "mx-2" : ""}>{children}</span>
          {showArrows && <ArrowRightIcon />}
          {icon && iconPosition === "right" && !showArrows && <span className="ml-2">{icon}</span>}
        </>
      )}
    </button>
  );
};

// Icon components for the buttons
export const ArrowLeftIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
  </svg>
);

export const ArrowRightIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
  </svg>
);

export const CloseIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
  </svg>
);

// Text Link component
export const TextLink: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <a
      className={`text-[var(--color-neutral-900)] underline hover:text-[var(--color-primary-300)] transition-colors ${className}`}
      {...props}
    >
      {children}
    </a>
  );
};

// Tab component
export const Tab: React.FC<Omit<ButtonProps, "buttonStyle"> & { isActive?: boolean; showDot?: boolean }> = ({
  isActive = false,
  showDot = false,
  children,
  className = "",
  ...props
}) => {
  const baseClasses = `px-6 py-3 font-medium transition-colors focus-visible:outline-none focus:ring-2 focus:ring-[var(--tab-focus-ring)] focus:ring-opacity-50`;

  const stateClasses = isActive
    ? `bg-[var(--tab-active-bg)] text-[var(--tab-active-text)]`
    : `bg-[var(--tab-inactive-bg)] text-[var(--tab-inactive-text)] hover:bg-[var(--tab-inactive-hover-bg)]`;

  return (
    <button className={`${baseClasses} ${stateClasses} rounded-lg relative ${className}`} {...props}>
      {children}
      {showDot && (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[var(--tab-dot-bg)] rounded-full"></div>
      )}
    </button>
  );
};
