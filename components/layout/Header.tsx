'use client';

import React, { useState, useCallback, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search } from '@/components/ui/Search';
import { 
  BREAKPOINTS, 
  DROPDOWN_TYPES, 
  HEADER_NAVIGATION_LINKS,
  HEADER_DROPDOWN_CONTENT,
  HeaderProps,
  DropdownType,
  ProductCategory,
  MobileMenuType,
  IconType
} from '@/config';

// Icon rendering utility function
const renderIcon = (iconType: IconType, className: string = "w-3 h-3") => {
  switch (iconType) {
    case 'chevron-down':
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      );
    case 'location':
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case 'search':
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      );
    case 'book':
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      );
    case 'video':
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case 'calendar':
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      );
    case 'newspaper':
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      );
    case 'star':
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      );
    case 'question':
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    default:
      return null;
  }
};

// Desktop Header Component
const DesktopHeader: React.FC<HeaderProps> = ({ country, language }) => {
  const [activeDropdown, setActiveDropdown] = useState<DropdownType | null>(null);
  const [activeProductCategory, setActiveProductCategory] = useState<ProductCategory | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  const handleNavItemClick = useCallback(
    (dropdownType: DropdownType, event: React.MouseEvent) => {
    event.stopPropagation();
    if (activeDropdown === dropdownType) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdownType);
    }
    setActiveProductCategory(null);
    },
    [activeDropdown]
  );

  const handleProductCategoryClick = useCallback((category: ProductCategory, event: React.MouseEvent) => {
    event.stopPropagation();
    setActiveProductCategory(category);
  }, []);

  const handleSearchClick = useCallback(() => {
    setIsSearchOpen(true);
    setActiveDropdown(null);
  }, []);

  const handleSearchClose = useCallback(() => {
    setIsSearchOpen(false);
  }, []);

  const handleSearchSubmit = useCallback((query: string) => {
    // Handle search submission here
    console.log('Search query:', query);
    // You can implement search logic here, e.g., navigate to search results page
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      
      if (navRef.current && navRef.current.contains(target)) {
        return;
      }
      
      if (dropdownRef.current && dropdownRef.current.contains(target)) {
        return;
      }
      
      setActiveDropdown(null);
    };

    if (activeDropdown) {
      const timeoutId = setTimeout(() => {
        document.addEventListener("mousedown", handleClickOutside);
      }, 50);

      return () => {
        clearTimeout(timeoutId);
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [activeDropdown]);

  // Close search popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      
      // Check if click is outside the search popup
      const searchPopup = document.querySelector('[data-search-popup]');
      if (searchPopup && searchPopup.contains(target)) {
        return;
      }
      
      setIsSearchOpen(false);
    };

    if (isSearchOpen) {
      const timeoutId = setTimeout(() => {
        document.addEventListener('mousedown', handleClickOutside);
      }, 50);

      return () => {
        clearTimeout(timeoutId);
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isSearchOpen]);

  // Close dropdown on Escape key
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (isSearchOpen) {
          setIsSearchOpen(false);
        } else {
          setActiveDropdown(null);
          setActiveProductCategory(null);
        }
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, [isSearchOpen]);

  // Prevent body scroll when dropdown or search is open
  useEffect(() => {
    if (activeDropdown || isSearchOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [activeDropdown, isSearchOpen]);

  return (
    <header className={`relative transition-colors duration-200 ${
      activeDropdown ? 'bg-gray-900' : 'bg-transparent'
    }`}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href={`/${country}/${language}`} className={`flex items-center text-2xl font-bold transition-colors ${
              activeDropdown ? 'text-white hover:text-gray-200' : 'text-white hover:text-gray-200'
            }`}>
              <span className={`mr-1 ${activeDropdown ? 'text-white' : 'text-white'}`}>•••</span>
              XPEL
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6" ref={navRef}>
            <ul className="flex items-center space-x-6">
              {Object.entries(HEADER_NAVIGATION_LINKS).map(([key, link]) => {
                // Skip search and installer locator for now as they need special handling
                if (key === 'search' || key === 'installerLocator') return null;

                if (link.hasDropdown) {
                  return (
                    <li key={key} className="relative">
                <button
                  type="button"
                  className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium transition-colors ${
                          activeDropdown === link.dropdownType as DropdownType
                      ? 'text-white' 
                      : activeDropdown 
                        ? 'text-white hover:text-gray-200' 
                        : 'text-white hover:text-gray-200'
                  }`}
                        onClick={(event) => handleNavItemClick(link.dropdownType as DropdownType, event)}
                        aria-expanded={activeDropdown === link.dropdownType as DropdownType}
                  aria-haspopup="true"
                >
                        <span>{link.label}</span>
                        {link.iconType && renderIcon(link.iconType, "w-3 h-3")}
                </button>
              </li>
                  );
                } else {
                  return (
                    <li key={key}>
                      <Link 
                        href={`/${country}/${language}${link.href}`} 
                        className={`px-3 py-2 text-sm font-medium transition-colors ${
                          activeDropdown ? 'text-white hover:text-gray-200' : 'text-white hover:text-gray-200'
                        }`}
                      >
                        {link.label}
                </Link>
              </li>
                  );
                }
              })}

              {/* Installer Locator Button */}
              <li>
                <Link 
                  href={`/${country}/${language}${HEADER_NAVIGATION_LINKS.installerLocator.href}`} 
                  className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 rounded-md transition-colors"
                >
                  {renderIcon(HEADER_NAVIGATION_LINKS.installerLocator.iconType, "w-4 h-4")}
                  <span>{HEADER_NAVIGATION_LINKS.installerLocator.label}</span>
                </Link>
              </li>

              {/* Search Button */}
              <li>
                <button 
                  type="button" 
                  className={`p-2 transition-colors ${
                    activeDropdown ? 'text-white hover:text-gray-200' : 'text-white hover:text-gray-200'
                  }`} 
                  aria-label="Search"
                  onClick={handleSearchClick}
                >
                  {renderIcon(HEADER_NAVIGATION_LINKS.search.iconType, "w-5 h-5")}
                </button>
              </li>
            </ul>
          </nav>

          {/* Desktop Dropdown */}
          {activeDropdown && (
            <div
              className="absolute top-full left-0 right-0 bg-gray-50 border-b border-gray-200 shadow-lg z-[9999]"
              ref={dropdownRef}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* About Us Dropdown */}
                {activeDropdown === DROPDOWN_TYPES.ABOUT_US && (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">{HEADER_DROPDOWN_CONTENT.aboutUs.title}</h3>
                    </div>
                    <div className="flex justify-center">
                      <div className="w-80 h-60 bg-gray-200 rounded-lg overflow-hidden">
                        <Image 
                          src={HEADER_DROPDOWN_CONTENT.aboutUs.image?.src || ''} 
                          alt={HEADER_DROPDOWN_CONTENT.aboutUs.image?.alt || ''} 
                          width={HEADER_DROPDOWN_CONTENT.aboutUs.image?.width || 320}
                          height={HEADER_DROPDOWN_CONTENT.aboutUs.image?.height || 240}
                          className="w-full h-full object-cover"
                          priority
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Products Dropdown */}
                {activeDropdown === DROPDOWN_TYPES.PRODUCTS && (
                  <div>
                    {!activeProductCategory ? (
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                          {HEADER_DROPDOWN_CONTENT.products.categories?.map((category) => (
                          <button
                              key={category.key}
                            className="group text-left"
                              onClick={(event) => handleProductCategoryClick(category.key as ProductCategory, event)}
                          >
                            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow w-[262.4px] h-[312px]">
                              <div className="bg-gray-200">
                                <Image 
                                    src={category.image.src}
                                    alt={category.image.alt}
                                    width={category.image.width}
                                    height={category.image.height}
                                  className="w-[262.4px] h-[262.4px] object-cover group-hover:scale-105 transition-transform"
                                />
                              </div>
                              <div className="p-4">
                                <div className="flex items-center justify-between w-full">
                                    <span className="font-bold text-gray-900">{category.label}</span>
                                  <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </button>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="flex items-center justify-between mb-6">
                          <button
                            className="flex items-center space-x-2 text-black-600 hover:text-black-200"
                          >
                            <span>Explore All Products</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                          {/* Protection Film Column */}
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-4">{HEADER_DROPDOWN_CONTENT.products.detailColumns?.protectionFilm.title}</h4>
                            <div className="space-y-3">
                              {HEADER_DROPDOWN_CONTENT.products.detailColumns?.protectionFilm.products?.map((product, index) => (
                                <Link 
                                  key={`${product.label}-${index}`}
                                  href={`/${country}/${language}${product.href}`} 
                                  className="block text-gray-600 hover:text-blue-600 hover:bg-gray-50 p-2 rounded"
                                >
                                  {product.label}
                              </Link>
                              ))}
                            </div>
                          </div>

                          {/* Window Film Column */}
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-4">{HEADER_DROPDOWN_CONTENT.products.detailColumns?.windowFilm.title}</h4>
                            <div className="space-y-3">
                              {HEADER_DROPDOWN_CONTENT.products.detailColumns?.windowFilm.products?.map((product, index) => (
                                <Link 
                                  key={`${product.label}-${index}`}
                                  href={`/${country}/${language}${product.href}`} 
                                  className="block text-gray-600 hover:text-blue-600 hover:bg-gray-50 p-2 rounded"
                                >
                                  {product.label}
                              </Link>
                              ))}
                            </div>
                          </div>

                          {/* Ceramic Coating Column */}
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-4">{HEADER_DROPDOWN_CONTENT.products.detailColumns?.ceramicCoating.title}</h4>
                            <div className="space-y-3">
                              {HEADER_DROPDOWN_CONTENT.products.detailColumns?.ceramicCoating.products?.map((product, index) => (
                                <Link 
                                  key={`${product.label}-${index}`}
                                  href={`/${country}/${language}${product.href}`} 
                                  className="block text-gray-600 hover:text-blue-600 hover:bg-gray-50 p-2 rounded"
                                >
                                  {product.label}
                              </Link>
                              ))}
                            </div>
                          </div>

                          {/* Resources Column */}
                          <div className="border-l border-gray-200 pl-8">
                            <h4 className="font-semibold text-gray-900 mb-4">{HEADER_DROPDOWN_CONTENT.products.detailColumns?.resources.title}</h4>
                            <div className="space-y-3">
                              {HEADER_DROPDOWN_CONTENT.products.detailColumns?.resources.links?.map((link, index) => (
                                <Link 
                                  key={`${link.label}-${index}`}
                                  href={`/${country}/${language}${link.href}`} 
                                  className="block text-gray-600 hover:text-blue-600"
                                >
                                  {link.label}
                              </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Resources Dropdown */}
                {activeDropdown === DROPDOWN_TYPES.RESOURCES && (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">{HEADER_DROPDOWN_CONTENT.resources.title}</h3>
                      <p className="text-gray-600 mb-6">{HEADER_DROPDOWN_CONTENT.resources.description}</p>
                      <div className="grid grid-cols-2 gap-4">
                        {HEADER_DROPDOWN_CONTENT.resources.links?.map((link, index) => (
                          <Link 
                            key={`${link.label}-${index}`}
                            href={`/${country}/${language}${link.href}`} 
                            className="flex items-center text-gray-600 hover:text-blue-600"
                          >
                            {link.iconType && renderIcon(link.iconType, "w-5 h-5 mr-3")}
                            {link.label}
                        </Link>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                          <div className="relative w-full h-48 bg-gray-200">
                            <Image 
                              src={HEADER_DROPDOWN_CONTENT.resources.featuredContent?.image.src || ''}
                              alt={HEADER_DROPDOWN_CONTENT.resources.featuredContent?.image.alt || ''}
                              width={HEADER_DROPDOWN_CONTENT.resources.featuredContent?.image.width || 400}
                              height={HEADER_DROPDOWN_CONTENT.resources.featuredContent?.image.height || 192}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-opacity-75 text-white p-3">
                              <p className="text-sm font-bold">
                                {HEADER_DROPDOWN_CONTENT.resources.featuredContent?.title}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect</h3>
                        <div className="space-y-3">
                          {HEADER_DROPDOWN_CONTENT.resources.connectLinks?.map((link, index) => (
                            <Link 
                              key={index}
                              href={`/${country}/${language}${link.href}`} 
                              className="block text-gray-600 hover:text-blue-600"
                            >
                              {link.label}
                          </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Search Popup */}
          <Search 
            isOpen={isSearchOpen}
            onClose={handleSearchClose}
            onSubmit={handleSearchSubmit}
          />
        </div>
      </div>
    </header>
  );
};

// Mobile Sidebar Component
const MobileSidebar: React.FC<HeaderProps> = ({ country, language }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMenu, setCurrentMenu] = useState<MobileMenuType>("main");
  const [expandedSubmenus, setExpandedSubmenus] = useState<Set<string>>(new Set(["paint-protection"]));
  const [searchValue, setSearchValue] = useState("");

  const handleMenuToggle = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const handleMenuClose = useCallback(() => {
    setIsOpen(false);
    setCurrentMenu("main");
    setExpandedSubmenus(new Set(["paint-protection"]));
  }, []);

  const handleMenuChange = useCallback((menu: MobileMenuType) => {
    setCurrentMenu(menu);
  }, []);

  const handleSubmenuToggle = useCallback((submenu: string) => {
    setExpandedSubmenus((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(submenu)) {
        newSet.delete(submenu);
      } else {
        newSet.add(submenu);
      }
      return newSet;
    });
  }, []);

  const handleSearchSubmit = useCallback((query: string) => {
    // Handle search submission here
    console.log('Mobile search query:', query);
    // You can implement search logic here, e.g., navigate to search results page
  }, []);

  // Close sidebar on Escape key
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        handleMenuClose();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, [isOpen, handleMenuClose]);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Mobile Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm xl:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link
                href={`/${country}/${language}`}
                className="flex items-center text-2xl font-bold text-gray-800 hover:text-gray-600 transition-colors"
              >
                <span className="text-gray-600 mr-1">•••</span>
                XPEL
              </Link>
            </div>

            <button
              type="button"
              className="p-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
              onClick={handleMenuToggle}
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-1"}`}
                ></span>
                <span
                  className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}
                ></span>
                <span
                  className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"}`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 z-50 lg:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="absolute inset-0 bg-black bg-opacity-50" onClick={handleMenuClose}></div>
        <div
          className={`absolute left-0 top-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="flex flex-col h-full">
            {/* Sidebar Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <div className="flex-shrink-0">
                <Link href={`/${country}/${language}`} className="flex items-center text-xl font-bold text-gray-800">
                  <span className="text-gray-600 mr-1">•••</span>
                  XPEL
                </Link>
              </div>
              <button
                type="button"
                className="p-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={handleMenuClose}
                aria-label="Close menu"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Search */}
            <form className="p-4 border-b border-gray-200" onSubmit={(e) => {
              e.preventDefault();
              if (searchValue.trim()) {
                handleSearchSubmit(searchValue.trim());
                setSearchValue('');
              }
            }}>
              <div className="relative">
                <input
                  type="search"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Search..."
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  aria-label="Search"
                />
                <button
                  type="submit"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  aria-label="Submit search"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </form>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto">
              {currentMenu === "main" && (
                <ul className="py-4">
                  {Object.entries(HEADER_NAVIGATION_LINKS).map(([key, link]) => {
                    // Skip search and installer locator for main menu as they have special handling
                    if (key === 'search' || key === 'installerLocator') return null;

                    if (link.hasDropdown) {
                      return (
                        <li key={key}>
                    <button
                      type="button"
                      className="w-full flex items-center justify-between px-4 py-3 text-left text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                            onClick={() => handleMenuChange(link.dropdownType as MobileMenuType)}
                          >
                            <span>{link.label}</span>
                            {link.iconType && renderIcon(link.iconType, "w-4 h-4")}
                    </button>
                  </li>
                      );
                    } else {
                      return (
                        <li key={key}>
                          <Link 
                            href={`/${country}/${language}${link.href}`} 
                            className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50" 
                            onClick={handleMenuClose}
                          >
                            {link.label}
                    </Link>
                  </li>
                      );
                    }
                  })}
                </ul>
              )}

              {/* Products Submenu */}
              {currentMenu === "products" && (
                <div className="py-4">
                  <div className="flex items-center px-4 py-3 border-b border-gray-200">
                    <button
                      type="button"
                      className="flex items-center text-blue-600 hover:text-blue-700"
                      onClick={() => handleMenuChange("main")}
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <h2 className="ml-4 text-lg font-semibold text-gray-900">Products</h2>
                  </div>
                  
                  <ul className="py-4">
                    {HEADER_DROPDOWN_CONTENT.products.categories?.map((category) => (
                      <li key={category.key} className={`${expandedSubmenus.has(category.key) ? 'bg-gray-50' : ''}`}>
                        <button
                          type="button"
                          className="w-full flex items-center justify-between px-4 py-3 text-left text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                          onClick={() => handleSubmenuToggle(category.key)}
                        >
                          <span>{category.label}</span>
                          <svg className={`w-4 h-4 transition-transform ${expandedSubmenus.has(category.key) ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {expandedSubmenus.has(category.key) && (
                          <ul className="bg-gray-50">
                            <li>
                              <Link href={`/${country}/${language}/products/${category.key}/overview`} className="block px-8 py-2 text-sm text-gray-600 hover:text-blue-600" onClick={handleMenuClose}>
                                Overview
                              </Link>
                            </li>
                            {category.products.map((product, index) => (
                              <li key={`${product.label}-${index}`}>
                                <Link 
                                  href={`/${country}/${language}${product.href}`} 
                                  className="block px-8 py-2 text-sm text-gray-600 hover:text-blue-600" 
                                  onClick={handleMenuClose}
                                >
                                  {product.label}
                              </Link>
                            </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Bottom Links */}
                  <div className="px-4 py-4 border-t border-gray-200">
                    <Link href={`/${country}/${language}${HEADER_NAVIGATION_LINKS.installerLocator.href}`} className="flex items-center text-gray-700 hover:text-blue-600 mb-3">
                      {renderIcon(HEADER_NAVIGATION_LINKS.installerLocator.iconType, "w-5 h-5 mr-3")}
                      {HEADER_NAVIGATION_LINKS.installerLocator.label}
                    </Link>
                    <Link href={`/${country}/${language}/help-center`} className="flex items-center text-gray-700 hover:text-blue-600">
                      <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Help Center
                    </Link>
                  </div>
                </div>
              )}

              {/* Resources Submenu */}
              {currentMenu === "resources" && (
                <div className="py-4">
                  <div className="flex items-center px-4 py-3 border-b border-gray-200">
                    <button
                      type="button"
                      className="flex items-center text-blue-600 hover:text-blue-700"
                      onClick={() => handleMenuChange("main")}
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <h2 className="ml-4 text-lg font-semibold text-gray-900">{HEADER_DROPDOWN_CONTENT.resources.title}</h2>
                  </div>
                  
                  <div className="py-4">
                    {/* Resources Links */}
                    <div className="mb-6">
                      <ul>
                        {HEADER_DROPDOWN_CONTENT.resources.links?.map((link, index) => (
                          <li key={`${link.label}-${index}`}>
                            <Link 
                              href={`/${country}/${language}${link.href}`} 
                              className="flex items-center px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50" 
                              onClick={handleMenuClose}
                            >
                              {link.iconType && renderIcon(link.iconType, "w-5 h-5 mr-3")}
                              {link.label}
                          </Link>
                        </li>
                        ))}
                      </ul>
                    </div>

                    {/* Connect Section */}
                    <div className="mb-6">
                      <h3 className="px-4 py-2 text-sm font-medium text-gray-500 uppercase tracking-wider">Connect</h3>
                      <ul>
                        {HEADER_DROPDOWN_CONTENT.resources.connectLinks?.map((link, index) => (
                          <li key={`${link.label}-${index}`}>
                            <Link 
                              href={`/${country}/${language}${link.href}`} 
                              className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50" 
                              onClick={handleMenuClose}
                            >
                              {link.label}
                          </Link>
                        </li>
                        ))}
                      </ul>
                    </div>

                    {/* Featured Content Card */}
                    <div className="px-4">
                      <div className="bg-gray-50 rounded-lg overflow-hidden">
                        <div className="w-full h-24 bg-gray-200">
                          <Image 
                            src={HEADER_DROPDOWN_CONTENT.resources.featuredContent?.image.src || ''}
                            alt={HEADER_DROPDOWN_CONTENT.resources.featuredContent?.image.alt || ''}
                            width={HEADER_DROPDOWN_CONTENT.resources.featuredContent?.image.width || 320}
                            height={HEADER_DROPDOWN_CONTENT.resources.featuredContent?.image.height || 96}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-3">
                          <p className="text-sm text-gray-700">
                            {HEADER_DROPDOWN_CONTENT.resources.featuredContent?.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

// Main Header Component with Responsive Logic
export const Header: React.FC<HeaderProps> = ({ country, language }) => {
  const [isMobile, setIsMobile] = useState(false);

  const checkScreenSize = useCallback(() => {
    setIsMobile(window.innerWidth < BREAKPOINTS.MOBILE);
  }, []);

  useEffect(() => {
    checkScreenSize();
    
    const handleResize = () => {
      checkScreenSize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [checkScreenSize]);

  const HeaderComponent = useMemo(() => {
    return isMobile ? (
      <MobileSidebar country={country} language={language} />
    ) : (
      <DesktopHeader country={country} language={language} />
    );
  }, [isMobile, country, language]);

  return HeaderComponent;
}; 
