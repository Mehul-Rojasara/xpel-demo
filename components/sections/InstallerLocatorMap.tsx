/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useRef, useState, useCallback } from "react";

// Google Maps types
interface GoogleMap {
  setCenter: (position: { lat: number; lng: number }) => void;
  setZoom: (zoom: number) => void;
}

interface GoogleMarker {
  setMap: (map: GoogleMap | null) => void;
  addListener: (event: string, callback: () => void) => void;
  getPosition: () => { lat: () => number; lng: () => number };
}

interface GoogleGeocoderResult {
  geometry: {
    location: {
      lat: () => number;
      lng: () => number;
    };
  };
}

interface GoogleMapOptions {
  center: { lat: number; lng: number };
  zoom: number;
  mapTypeControl: boolean;
  streetViewControl: boolean;
  fullscreenControl: boolean;
}

interface GoogleMarkerOptions {
  position: { lat: number; lng: number };
  map: GoogleMap;
  title: string;
}

interface GoogleInfoWindow {
  open: (map: GoogleMap, marker: GoogleMarker) => void;
}

interface GoogleInfoWindowOptions {
  content: string;
}

interface GoogleGeocoderRequest {
  address: string;
}

// keep if you don't have @types/google.maps
declare const google: {
  maps: {
    Map: new (element: HTMLElement, options: GoogleMapOptions) => GoogleMap;
    Marker: new (options: GoogleMarkerOptions) => GoogleMarker;
    InfoWindow: new (options: GoogleInfoWindowOptions) => GoogleInfoWindow;
    Geocoder: new () => {
      geocode: (request: GoogleGeocoderRequest, callback: (results: GoogleGeocoderResult[], status: string) => void) => void;
    };
  };
};

interface Installer {
  id: number;
  name: string;
  address: string;
  distance: number;
  phoneNumber: string;
  website: string;
  latitude: number | null;
  longitude: number | null;
  buildingImageUrl: string;
  logoImageUrl: string;
  flagDap: boolean;
  flagPpf: boolean;
  flagCeramicCoating: boolean;
  flagTint: boolean;
  // Add other flag fields as needed
}

interface Location {
  lat: number;
  lng: number;
}

interface ServiceFilters {
  requireAutomotive: boolean;
  requireVision: boolean;
  requireMarine: boolean;
  requireAircraft: boolean;
  requireCeramicCoating: boolean;
  requireTint: boolean;
  requirePPF: boolean;
  requireInvisiFrame: boolean;
  requireArchitectural: boolean;
}

const defaultCenter: Location = { lat: 20, lng: 77 };
const defaultFilters: ServiceFilters = {
  requireAutomotive: true,
  requireVision: false,
  requireMarine: false,
  requireAircraft: false,
  requireCeramicCoating: false,
  requireTint: false,
  requirePPF: true,
  requireInvisiFrame: false,
  requireArchitectural: false,
};

// Base URL for the API - you might want to move this to an environment variable
const API_BASE_URL = "https://api.xpel.com"; // Use the appropriate environment

export default function InstallerMap() {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [installers, setInstallers] = useState<Installer[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [map, setMap] = useState<GoogleMap | null>(null);
  const [markers, setMarkers] = useState<GoogleMarker[]>([]);
  const [userLocation, setUserLocation] = useState<Location | null>(null);
  const [filters, setFilters] = useState<ServiceFilters>(defaultFilters);

  // Add markers to the map
  const addMarkersToMap = useCallback((installers: Installer[]) => {
    if (!map) return;
    
    // Clear existing markers
    markers.forEach(marker => marker.setMap(null));
    const newMarkers: GoogleMarker[] = [];

    installers.forEach(installer => {
      if (installer.latitude && installer.longitude) {
        const marker = new google.maps.Marker({
          position: { lat: installer.latitude, lng: installer.longitude },
          map: map,
          title: installer.name,
        });

        // Add info window
        const infoWindow = new google.maps.InfoWindow({
          content: `
            <div class="p-2">
              <h3 class="font-semibold">${installer.name}</h3>
              <p class="text-sm">${installer.address}</p>
              ${installer.phoneNumber ? `<p class="text-sm">${installer.phoneNumber}</p>` : ''}
              ${installer.distance > 0 ? `<p class="text-xs">${installer.distance.toFixed(1)} miles away</p>` : ''}
            </div>
          `,
        });

        // Add click event to show info window and center map on marker
        marker.addListener("click", () => {
          if (map) {
            infoWindow.open(map, marker);
            const position = marker.getPosition();
            map.setCenter({ lat: position.lat(), lng: position.lng() });
            map.setZoom(12);
          }
        });

        newMarkers.push(marker);
      }
    });

    setMarkers(newMarkers);
  }, [markers, map]);

  // Fetch installers by coordinates from API
  const fetchInstallersByCoordinates = useCallback(async (lat: number, lon: number, mileRadius: number = 50) => {
    setIsLoading(true);
    setError("");
    
    try {
      const params = new URLSearchParams({
        lat: lat.toString(),
        lon: lon.toString(),
        mileRadius: mileRadius.toString(),
        ...Object.fromEntries(
          Object.entries(filters).map(([key, value]) => [key, value.toString()])
        ),
      });

      const response = await fetch(`${API_BASE_URL}/api/locatorsearch/coordinates?${params}`);
      
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      
      const data = await response.json();
      setInstallers(data);
      addMarkersToMap(data);
    } catch (err) {
      setError("Failed to fetch installers. Please try again.");
      console.error("Error fetching installers:", err);
    } finally {
      setIsLoading(false);
    }
  }, [filters, addMarkersToMap]);

  // Fetch all installers (map view) from API
  const fetchInstallersByMapView = useCallback(async () => {
    setIsLoading(true);
    setError("");
    
    try {
      const params = new URLSearchParams(
        Object.fromEntries(
          Object.entries(filters).map(([key, value]) => [key, value.toString()])
        )
      );

      const response = await fetch(`${API_BASE_URL}/api/locatorsearch/mapview?${params}`);
      
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      
      const data = await response.json();
      setInstallers(data);
      addMarkersToMap(data);
    } catch (err) {
      setError("Failed to fetch installers. Please try again.");
      console.error("Error fetching installers:", err);
    } finally {
      setIsLoading(false);
    }
  }, [filters, addMarkersToMap]);

  // Initialize map
  useEffect(() => {
    if (!mapRef.current || typeof google === "undefined") return;

    const newMap = new google.maps.Map(mapRef.current, {
      center: defaultCenter,
      zoom: 4,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: false,
    });

    setMap(newMap);

    // Try to get user's location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLoc = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setUserLocation(userLoc);
          newMap.setCenter(userLoc);
          newMap.setZoom(10);
          fetchInstallersByCoordinates(userLoc.lat, userLoc.lng, 50);
        },
        () => {
          console.log("Geolocation permission denied or not available");
          // Load some default installers if location is not available
          fetchInstallersByMapView();
        }
      );
    } else {
      // Load some default installers if geolocation is not supported
      fetchInstallersByMapView();
    }
  }, [fetchInstallersByCoordinates, fetchInstallersByMapView]);

  // Handle search
  const handleSearch = async () => {
    if (!searchQuery.trim() || !map) return;

    setIsLoading(true);
    
    try {
      // Geocode the search query to get coordinates
      const geocoder = new google.maps.Geocoder();
      
      geocoder.geocode({ address: searchQuery }, (results: GoogleGeocoderResult[], status: string) => {
        if (status === "OK" && results[0] && map) {
          const location = results[0].geometry.location;
          const lat = location.lat();
          const lng = location.lng();
          
          map.setCenter({ lat: lat, lng: lng });
          map.setZoom(10);
          fetchInstallersByCoordinates(lat, lng, 50);
        } else {
          setError("Location not found. Please try a different search term.");
          setIsLoading(false);
        }
      });
    } catch (err) {
      setError("Search failed. Please try again.");
      console.error("Error during search:", err);
      setIsLoading(false);
    }
  };

  // Handle enter key in search input
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  // Toggle filter
  const toggleFilter = (filterName: keyof ServiceFilters) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: !prev[filterName]
    }));
  };

  // Apply filters
  const applyFilters = () => {
    if (userLocation) {
      fetchInstallersByCoordinates(userLocation.lat, userLocation.lng, 50);
    } else {
      fetchInstallersByMapView();
    }
  };

  return (
    <div className="relative w-full h-screen">
      {/* Map (fills only this section, not entire page) */}
      <div ref={mapRef} className="absolute inset-0 h-full w-full" />

      {/* Sidebar overlays only the map */}
      <aside
        className="absolute left-6 top-1/2 z-20 w-[380px] max-h-[80vh] -translate-y-1/2 overflow-hidden rounded-2xl border bg-white shadow-xl"
        aria-label="Installer sidebar"
      >
        {/* Header with search */}
        <div className="sticky top-0 z-30 border-b bg-white p-4">
          <h2 className="text-lg font-semibold">Find An Authorized XPEL Installer</h2>
          <p className="text-sm text-gray-500">Search City, State, or Postal Code</p>

          <div className="mt-3 relative">
            <svg
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="6" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Search by city, state, or postal code"
              className="w-full rounded-md border bg-gray-100 py-2 pl-10 pr-24 text-sm placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-300"
            />

            <button
              type="button"
              onClick={handleSearch}
              disabled={isLoading}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 disabled:opacity-50"
            >
              {isLoading ? "Searching..." : "Search"}
            </button>
          </div>

          {/* Filters */}
          <div className="mt-3">
            <details className="text-sm">
              <summary className="cursor-pointer text-indigo-600 hover:text-indigo-800">
                Filter Services
              </summary>
              <div className="mt-2 grid grid-cols-2 gap-2">
                {Object.entries(filters).map(([key, value]) => (
                  <label key={key} className="flex items-center space-x-1 text-xs">
                    <input
                      type="checkbox"
                      checked={value}
                      onChange={() => toggleFilter(key as keyof ServiceFilters)}
                      className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <span>{key.replace('require', '').replace(/([A-Z])/g, ' $1').trim()}</span>
                  </label>
                ))}
                <button
                  onClick={applyFilters}
                  className="col-span-2 mt-1 rounded-md bg-indigo-600 px-2 py-1 text-xs text-white hover:bg-indigo-700"
                >
                  Apply Filters
                </button>
              </div>
            </details>
          </div>

          <div className="mt-2 text-xs text-gray-400">
            {isLoading ? "Loading..." : `${installers.length} Results`}
          </div>
        </div>

        {/* Error message */}
        {error && (
          <div className="p-4 bg-red-50 text-red-700 text-sm">
            {error}
          </div>
        )}

        {/* Scrollable results */}
        <div
          className="divide-y overflow-auto"
          style={{ maxHeight: "calc(80vh - 180px)" }}
        >
          {installers.map((item) => (
            <div 
              key={item.id} 
              className="p-4 hover:bg-gray-50 cursor-pointer"
              onClick={() => {
                if (item.latitude && item.longitude && map) {
                  map.setCenter({ lat: item.latitude, lng: item.longitude });
                  map.setZoom(12);
                }
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  if (item.latitude && item.longitude && map) {
                    map.setCenter({ lat: item.latitude, lng: item.longitude });
                    map.setZoom(12);
                  }
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`Focus on ${item.name} location on map`}
            >
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-600">{item.address}</p>
              {item.distance > 0 && (
                <p className="text-xs text-gray-500 mt-1">
                  {item.distance.toFixed(1)} miles away
                </p>
              )}
              {item.phoneNumber && (
                <p className="text-xs text-gray-500 mt-1">
                  {item.phoneNumber}
                </p>
              )}
              {item.website && (
                <a 
                  href={item.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs text-indigo-600 mt-1 block hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  Visit Website
                </a>
              )}
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}