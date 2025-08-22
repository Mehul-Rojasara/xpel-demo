import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Design System Colors
      colors: {
        // Neutral Colors (Grayscale)
        neutral: {
          900: "#1B1A1A", // Off-black, base text color
          800: "#474646", // Accessible minimum (4.5:1)
          700: "#585757", // Dark gray
          600: "#6C6B6B", // Medium gray
          500: "#767676", // AA Regular
          400: "#B2B2B2", // AA Large
          300: "#CDCDCD", // Light gray
          200: "#EEEEEE", // Input borders, disabled state
          100: "#F8F8F8", // Gray background
        },
        // Primary Colors
        'primary': {
          100: '#FFEFCD', // Light background
          200: '#FFD477', // Light accent
          300: '#FFB81C', // Main brand color
          400: '#BF8A15', // Dark variant
          500: '#F6A300', // Darker yellow for gradients
          600: '#FFE585', // Lighter yellow for gradients
        },
        // Accent Colors - Teal
        "accent-teal": {
          100: "#DFF2F1", // Light background
          200: "#C2E4E4", // Light accent
          300: "#1B6D6A", // Brand teal
          400: "#144E4D", // Dark teal
        },
        // Accent Colors - Navy
        "accent-navy": {
          100: "#E6ECF4", // Light background
          200: "#A3AEC0", // Light accent
          300: "#364258", // Brand navy
          400: "#2C3546", // Dark navy
        },
        // Accent Colors - Red
        "accent-red": {
          100: "#F5E0E0", // Light background
          200: "#E19F9E", // Light accent
          300: "#9E3835", // Brand red
          400: "#762927", // Dark red
        },
        // Support Colors - Success
        success: {
          100: "#E6F0D4", // Light background
          200: "#9DB45C", // ADA Dark
          300: "#5D7238", // ADA Light
          400: "#4D5E2E", // Dark success
        },
        // Support Colors - Warning
        warning: {
          100: "#FDE0D3", // Light background
          200: "#F98F60", // ADA Dark
          300: "#CC4E08", // ADA Light
          400: "#A94107", // Dark warning
        },
        // Support Colors - Error
        error: {
          100: "#FFD6D7", // Light background
          200: "#F15156", // ADA Dark
          300: "#DE1C22", // ADA Light
          400: "#9F1B1F", // Dark error
        },
        // Background Colors
        bg: {
          "light-gray": "#F9FAFB",
          dark: "#364258",
          overlay: "rgba(0, 0, 0, 0.5)",
        },
      },
      //  Typography System
      fontFamily: {
        sans: ["var(--font-jost)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        display: ["futura-pt", "Futura", "Trebuchet MS", "Arial", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "Consolas", "monospace"],
      },
      fontSize: {
        //  Typography System (in pixels for consistency)
        'xs': '10px',      // Badge Small
        'sm': '12px',      // Badge Large
        'base': '14px',    // Paragraph X-Small
        'md': '16px',      // Paragraph Small, Subtitle Large
        'lg': '18px',      // Paragraph Medium, Subtitle Small
        'xl': '20px',      // Paragraph Large, Action Large
        '2xl': '24px',     // Heading 4, Pull Quote Small
        '3xl': '32px',     // Heading 3, Pull Quote Large
        '4xl': '48px',     // Heading 2
        '5xl': '72px',     // Heading 1
      },
      lineHeight: {
        tight: "100%",
        normal: "110%",
        relaxed: "140%",
        loose: "150%",
      },
      letterSpacing: {
        tight: "-0.01em",
        normal: "0em",
        wide: "0.01em",
        wider: "0.06em",
        widest: "0.08em",
      },
      //  Spacing System
      spacing: {
        xs: "4px",
        sm: "6px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "20px",
        "3xl": "24px",
        "4xl": "32px",
        "5xl": "40px",
        "6xl": "48px",
        "7xl": "56px",
        "8xl": "64px",
      },
      //  Border Radius
      borderRadius: {
        sm: "4px",
        md: "6px",
        lg: "8px",
        xl: "12px",
        "2xl": "16px",
      },
      //  Shadows
      boxShadow: {
        soft: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        medium: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        large: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      },
      //  Component Dimensions
      height: {
        "button-sm": "40px",
        "button-md": "48px",
        "button-lg": "56px",
        "input-sm": "40px",
        "input-md": "48px",
        "input-lg": "56px",
        "accordion-item": "56px",
        "announcement-alert": "44px",
      },
      width: {
        "accordion-container": "560px",
        "accordion-item": "400px",
        "announcement-alert": "760px",
      },
      //  Z-Index
      zIndex: {
        dropdown: "1000",
        sticky: "1020",
        fixed: "1030",
        "modal-backdrop": "1040",
        modal: "1050",
        popover: "1060",
        tooltip: "1070",
      },
      //  Transitions
      transitionDuration: {
        fast: "150ms",
        normal: "250ms",
        slow: "350ms",
      },
      // XPEL Breakpoints
      screens: {
        Mdx: "900px",
        Lgx: "1100px",
        Xxl: "1440px",
        Xxxl: "1630px",
      },
    },
  },
  plugins: [],
};

export default config;
