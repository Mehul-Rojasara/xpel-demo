# XPEL India

## 📁 Project Structure

```
xpel/
├── app/                          # Next.js App Router
│   ├── [country]/               # Country-specific routes
│   │   ├── [language]/          # Language-specific routes
│   │   │   ├── [[...slug]]/     # Dynamic page routes
│   │   │   │   ├── page.tsx     # Dynamic page component
│   │   │   │   └── layout.tsx   # Language-level layout
│   │   │   └── layout.tsx       # Language layout wrapper
│   │   └── layout.tsx           # Country-level layout
│   ├── api/                     # API routes (Contentstack)
│   ├── globals.css              # Global styles (Tailwind)
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Root page (redirects to default region)
├── components/                  # React components
│   ├── ui/                      # Atomic UI components (Button, Input)
│   ├── layout/                  # Layout components (Header, Footer)
│   ├── forms/                   # Form components (ContactForm)
│   ├── commerce/                # E-commerce components (ProductCard)
│   └── maps/                    # Maps components (InstallerLocator)
├── lib/                         # Utility libraries
│   ├── contentstack/            # Contentstack CMS integration
│   ├── seo/                     # SEO utilities
│   └── utils/                   # General utilities
├── config/                      # Configuration files
│   ├── regions/                 # Regional configs
│   ├── languages/               # Language configs
│   └── cms/                     # CMS configs
├── types/                       # TypeScript type definitions
├── public/                      # Static assets (SVGs, images)
├── .husky/                      # Git hooks
├── README.md                    # Project documentation
├── package.json                 # Project dependencies and scripts
├── tsconfig.json                # TypeScript config
├── tailwind.config.ts           # Tailwind CSS config
├── postcss.config.mjs           # PostCSS config
├── eslint.config.mjs            # ESLint config
├── commitlint.config.js         # Commit message linting
└── env.example                  # Example environment variables
```

---

## 🏗️ Key Features

- **Multi-Regional**: 7 regions (US, CA, UK, AU, DE, FR, ES) with country-specific branding and configs
- **Multi-Language**: 4 languages (English, Spanish, French, German) with SEO-optimized URLs
- **Content Management**: Headless CMS (Contentstack) for dynamic, structured content
- **E-commerce**: BigCommerce API integration, product catalog, shopping cart (planned)
- **Installer Locator**: Google Maps integration, geolocation, address search
- **SEO Optimization**: Dynamic meta tags, hreflang, structured data
- **TypeScript**: Strict typing throughout
- **Atomic Design**: UI components, layouts, forms, commerce, and maps
- **API Routes**: Next.js API endpoints for CMS data
- **Code Quality**: ESLint, Prettier, Husky, Commitlint

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: >=20.9.0
- **npm**: >=10.1.0

### Installation
1. Clone the repo
2. Install dependencies:
```bash
npm install
```
3. Copy `.env.example` to `.env` and fill in required values

### Development
```bash
npm run dev
```

### Production
```bash
npm run build
npm run start
```

---

## ⚙️ Environment Variables
See `.env.example` for all required variables. Key variables include:
- `CONTENTSTACK_API_KEY`, `CONTENTSTACK_DELIVERY_TOKEN`, `CONTENTSTACK_ENVIRONMENT`, ...
- `BIGCOMMERCE_STORE_HASH`, `BIGCOMMERCE_ACCESS_TOKEN`, ...
- `GOOGLE_MAPS_API_KEY`
- `NEXT_PUBLIC_BASE_URL`, `NEXT_PUBLIC_API_URL`
- Analytics, Auth, Email, DB, CDN, Monitoring, etc.

---

## 📦 Scripts
- `npm run dev`         - Start development server
- `npm run build`       - Build for production
- `npm run start`       - Start production server
- `npm run lint`        - Run ESLint
- `npm run lint:fix`    - Auto-fix lint issues
- `npm run type-check`  - TypeScript type checking

---

## 🧹 Code Quality & Git Hooks
- **ESLint**: Linting with Next.js and TypeScript rules
- **Prettier**: Code formatting
- **Husky**: Pre-commit, commit-msg, and pre-push hooks
- **Commitlint**: Enforces commit message format: `TICKET-123: Your commit message`
- **TypeScript**: Strict mode enabled

---

## 🗂️ Directory & Routing
- **Country-level**: `/[country]` (e.g., `/us`)
- **Language-level**: `/[country]/[language]` (e.g., `/us/en`)
- **Dynamic pages**: `/[country]/[language]/[[...slug]]` (e.g., `/us/en/products`)
- **API**: `/api/contentstack`, `/api/contentstack/homepage`

---

## 🛠️ Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Custom CSS Variables**: For theming and dark mode
- **PostCSS**: Used for processing CSS

---

## 📝 Notes
- All components are TypeScript-based
- Centralized configuration for regions, languages, and CMS
- Atomic design principles for components
- API routes organized by functionality
- Git hooks ensure code quality and consistency

---

## 📊 SonarQube
[SonarQube Dashboard](https://sonarqube.brainvire.com/dashboard?id=Xpel-India-Site-sonarqube)

[![Quality Gate Status](https://sonarqube.brainvire.com/api/project_badges/measure?project=Xpel-India-Site-sonarqube&metric=alert_status&token=sqb_34642b63a69198a9ca51a4a5adebb1ab2228cc4a)](https://sonarqube.brainvire.com/dashboard?id=Xpel-India-Site-sonarqube)

[![Quality gate](https://sonarqube.brainvire.com/api/project_badges/quality_gate?project=Xpel-India-Site-sonarqube&token=sqb_34642b63a69198a9ca51a4a5adebb1ab2228cc4a)](https://sonarqube.brainvire.com/dashboard?id=Xpel-India-Site-sonarqube)