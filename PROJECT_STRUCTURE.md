# XPEL Frontend Project Structure

This document outlines the complete project structure for the XPEL multi-regional platform.

## 📁 Directory Structure

```
xpel-front/
├── app/                          # Next.js App Router
│   ├── [country]/               # Country-specific routes
│   │   ├── [language]/          # Language-specific routes
│   │   │   ├── [[...slug]]/     # Dynamic page routes
│   │   │   │   ├── page.tsx     # Dynamic page component
│   │   │   │   └── layout.tsx   # Language-level layout
│   │   │   └── layout.tsx       # Language layout wrapper
│   │   └── layout.tsx           # Country-level layout
│   ├── api/                     # API routes
│   │   └── contentstack/        # Contentstack API endpoints
│   │       └── route.ts         # Contentstack API handler
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Root page
├── components/                  # React components
│   ├── ui/                      # Atomic UI components
│   │   └── Button.tsx           # Button component
│   ├── layout/                  # Layout components
│   │   └── Header.tsx           # Header component
│   ├── forms/                   # Form components
│   │   └── ContactForm.tsx      # Contact form
│   ├── commerce/                # E-commerce components
│   │   └── ProductCard.tsx      # Product card
│   └── maps/                    # Maps components
│       └── InstallerLocator.tsx # Installer locator
├── lib/                         # Utility libraries
│   ├── contentstack/            # Contentstack integration
│   │   └── index.ts             # Contentstack client
│   ├── seo/                     # SEO utilities
│   │   └── index.ts             # SEO helpers
│   └── utils/                   # General utilities
│       └── index.ts             # Utility functions
├── config/                      # Configuration files
│   ├── regions/                 # Regional configurations
│   │   └── index.ts             # Country configs
│   ├── languages/               # Language configurations
│   │   └── index.ts             # Language configs
│   └── cms/                     # CMS configurations
│       └── index.ts             # CMS settings
├── types/                       # TypeScript type definitions
│   └── index.ts                 # Common types
├── public/                      # Static assets
│   ├── locales/                 # Translation files
│   │   ├── en.json              # English translations
│   │   └── es.json              # Spanish translations
│   └── images/                  # Image assets
└── .husky/                      # Git hooks
    ├── pre-commit               # Pre-commit hook
    ├── commit-msg               # Commit message hook
    └── pre-push                 # Pre-push hook
```

## 🏗️ Architecture Overview

### **App Router Structure**
- **Country Level**: `/[country]` - Handles country-specific routing and configuration
- **Language Level**: `/[country]/[language]` - Manages language-specific content and layouts
- **Dynamic Pages**: `/[country]/[language]/[[...slug]]` - Handles all dynamic page routes

### **Component Architecture**
- **UI Components**: Reusable atomic components (Button, Input, etc.)
- **Layout Components**: Page structure components (Header, Footer, etc.)
- **Form Components**: Form-specific components with validation
- **Commerce Components**: E-commerce functionality components
- **Maps Components**: Location and mapping functionality

### **Library Structure**
- **Contentstack**: CMS integration and content management
- **SEO**: Search engine optimization utilities
- **Utils**: General utility functions and helpers

### **Configuration Management**
- **Regions**: Country-specific settings and configurations
- **Languages**: Language-specific settings and formatting
- **CMS**: Content management system configurations

## 🔧 Key Features

### **Multi-Regional Support**
- 7 region-specific platforms (US, CA, UK, AU, DE, FR, ES)
- Country-specific configurations and branding
- Regional e-commerce experiences

### **Multi-Language Support**
- 4 supported languages (English, Spanish, French, German)
- Language-specific content and formatting
- SEO-optimized language URLs

### **Content Management**
- Headless CMS integration (Contentstack)
- Dynamic content rendering
- Structured content management

### **E-commerce Integration**
- BigCommerce API integration
- Region-specific product catalogs
- Shopping cart functionality

### **Installer Locator**
- Google Maps integration
- Geolocation services
- Address picker functionality

### **SEO Optimization**
- Dynamic meta tags
- Hreflang implementation
- Structured data markup

## 🚀 Development Workflow

### **Git Hooks (Husky)**
- **Pre-commit**: Runs linting and build checks
- **Commit-msg**: Validates commit message format
- **Pre-push**: Blocks package.json pushes

### **Code Quality**
- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting
- Husky for pre-commit hooks

### **Testing Strategy**
- Unit tests for components
- Integration tests for API routes
- E2E tests for critical user flows
- Accessibility testing

## 📦 Dependencies

### **Core Dependencies**
- Next.js 15.4.4 (App Router)
- React 19.1.0
- TypeScript 5

### **Development Dependencies**
- ESLint for code linting
- Prettier for code formatting
- Husky for Git hooks
- Commitlint for commit validation

### **Planned Dependencies**
- Contentstack SDK for CMS
- BigCommerce SDK for e-commerce
- Google Maps API for location services
- Next-intl for internationalization

## 🔄 Next Steps

1. **Install Dependencies**: Add required packages for CMS, e-commerce, and maps
2. **Configure Environment**: Set up environment variables and API keys
3. **Implement i18n**: Add internationalization support
4. **Set up Testing**: Configure testing framework and write initial tests
5. **Deploy to Vercel**: Configure deployment pipeline

## 📝 Notes

- All components are TypeScript-based with proper type definitions
- Configuration files are centralized for easy management
- Component structure follows atomic design principles
- API routes are organized by functionality
- Translation files support multiple languages
- Git hooks ensure code quality and consistency 