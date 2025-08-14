// Common types used throughout the application

export interface BaseEntity {
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  country: string;
  language: string;
  preferences: UserPreferences;
}

export interface UserPreferences {
  currency: string;
  language: string;
  notifications: boolean;
  marketing: boolean;
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  errors?: string[];
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface ErrorResponse {
  success: false;
  message: string;
  errors?: string[];
  code?: string;
}

// Navigation types
export interface NavigationItem {
  id: string;
  title: string;
  url: string;
  children?: NavigationItem[];
  external?: boolean;
  target?: '_blank' | '_self';
}

export interface Navigation {
  id: string;
  name: string;
  items: NavigationItem[];
  country: string;
  language: string;
}

// SEO types
export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
  hreflang?: Record<string, string>;
  structuredData?: Record<string, unknown>;
}

// Form types
export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio';
  required?: boolean;
  validation?: {
    pattern?: string;
    minLength?: number;
    maxLength?: number;
    custom?: (value: string) => string | undefined;
  };
  options?: Array<{ value: string; label: string }>;
}

export interface FormConfig {
  id: string;
  name: string;
  fields: FormField[];
  submitText: string;
  successMessage: string;
}

// Analytics types
export interface AnalyticsEvent {
  name: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  customParameters?: Record<string, string | number>;
}

// Performance types
export interface PerformanceMetrics {
  pageLoadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
}

// Environment types
export interface EnvironmentConfig {
  NODE_ENV: 'development' | 'staging' | 'production';
  NEXT_PUBLIC_BASE_URL: string;
  NEXT_PUBLIC_API_URL: string;
  CONTENTSTACK_API_KEY: string;
  CONTENTSTACK_DELIVERY_TOKEN: string;
  CONTENTSTACK_ENVIRONMENT: string;
  BIGCOMMERCE_STORE_HASH: string;
  BIGCOMMERCE_ACCESS_TOKEN: string;
  GOOGLE_MAPS_API_KEY: string;
} 