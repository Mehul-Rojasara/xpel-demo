// Path persistence utilities for localStorage

const LAST_VISITED_PATH_KEY = 'xpel_last_visited_path';
const PATH_EXPIRY_KEY = 'xpel_path_expiry';
const PATH_EXPIRY_DAYS = 30; // Path expires after 30 days

/**
 * Save the current path to localStorage
 * @param path - Current pathname (e.g., '/us/en/about-us')
 */
export function saveLastVisitedPath(path: string): void {
  if (typeof window === 'undefined') return;
  
  try {
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + PATH_EXPIRY_DAYS);
    
    localStorage.setItem(LAST_VISITED_PATH_KEY, path);
    localStorage.setItem(PATH_EXPIRY_KEY, expiryDate.toISOString());
  } catch (error) {
    console.warn('Failed to save path to localStorage:', error);
  }
}

/**
 * Get the last visited path from localStorage
 * @returns The last visited path or null if not found/expired
 */
export function getLastVisitedPath(): string | null {
  if (typeof window === 'undefined') return null;
  
  try {
    const path = localStorage.getItem(LAST_VISITED_PATH_KEY);
    const expiry = localStorage.getItem(PATH_EXPIRY_KEY);
    
    if (!path || !expiry) return null;
    
    // Check if path has expired
    const expiryDate = new Date(expiry);
    if (new Date() > expiryDate) {
      // Clear expired data
      localStorage.removeItem(LAST_VISITED_PATH_KEY);
      localStorage.removeItem(PATH_EXPIRY_KEY);
      return null;
    }
    
    return path;
  } catch (error) {
    console.warn('Failed to get path from localStorage:', error);
    return null;
  }
}

/**
 * Clear the saved path from localStorage
 */
export function clearLastVisitedPath(): void {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.removeItem(LAST_VISITED_PATH_KEY);
    localStorage.removeItem(PATH_EXPIRY_KEY);
  } catch (error) {
    console.warn('Failed to clear path from localStorage:', error);
  }
}

/**
 * Check if a path is valid (has country and language)
 * @param path - Path to validate
 * @returns True if path is valid
 */
export function isValidPath(path: string): boolean {
  // Path should have at least country and language (e.g., /us/en)
  const pathParts = path.split('/').filter(Boolean);
  return pathParts.length >= 2;
}

/**
 * Get the default path for a country
 * @param country - Country code
 * @returns Default path for the country
 */
export function getDefaultPathForCountry(country: string): string {
  const countryDefaults: Record<string, string> = {
    'us': '/us/en',
    'ca': '/ca/en',
    'uk': '/uk/en',
    'au': '/au/en',
    'de': '/de/de',
    'fr': '/fr/fr',
    'es': '/es/es',
  };
  
  return countryDefaults[country] || '/us/en';
} 