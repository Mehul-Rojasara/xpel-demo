import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';

interface Installer {
  readonly id: string;
  readonly name: string;
  readonly address: string;
  readonly phone: string;
  readonly email: string;
  readonly distance: number;
  readonly rating: number;
  readonly services: ReadonlyArray<{
    readonly id: string;
    readonly name: string;
  }>;
  readonly coordinates: {
    readonly lat: number;
    readonly lng: number;
  };
}

interface InstallerLocatorProps {
  readonly country: string;
  readonly language: string;
  readonly onInstallerSelect?: (installer: Installer) => void;
}

export const InstallerLocator: React.FC<InstallerLocatorProps> = ({
  // country,
  // language,
  onInstallerSelect,
}) => {
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [installers, setInstallers] = useState<Installer[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchAddress, setSearchAddress] = useState('');

  useEffect(() => {
    // Get user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    }
  }, []);

  const searchInstallers = async () => {
    setLoading(true);
    
    try {
      // This would be replaced with actual API call to find installers
      const mockInstallers: Installer[] = [
        {
          id: '1',
          name: 'XPEL Installer - Downtown',
          address: '123 Main St, Downtown',
          phone: '+1-555-0123',
          email: 'downtown@xpel.com',
          distance: 2.5,
          rating: 4.8,
          services: ['Paint Protection', 'Window Tint', 'Ceramic Coating'].map((service, index) => ({
            id: `service-${index + 1}`,
            name: service
          })),
          coordinates: { lat: 40.7128, lng: -74.0060 },
        },
        {
          id: '2',
          name: 'XPEL Installer - Uptown',
          address: '456 Oak Ave, Uptown',
          phone: '+1-555-0456',
          email: 'uptown@xpel.com',
          distance: 5.2,
          rating: 4.6,
          services: ['Paint Protection', 'Window Tint'].map((service, index) => ({
            id: `service-${index + 1}`,
            name: service
          })),
          coordinates: { lat: 40.7589, lng: -73.9851 },
        },
      ];
      
      setInstallers(mockInstallers);
    } catch (error) {
      console.error('Error searching installers:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddressSearch = () => {
    if (searchAddress.trim()) {
      searchInstallers();
    }
  };

  const handleUseCurrentLocation = () => {
    if (userLocation) {
      searchInstallers();
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Find XPEL Installer
        </h2>
        
        <div className="space-y-4 mb-6">
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
              Enter your address or zip code
            </label>
            <div className="flex space-x-2">
              <input
                type="text"
                id="address"
                value={searchAddress}
                onChange={(e) => setSearchAddress(e.target.value)}
                placeholder="Enter address..."
                className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              />
              <Button
                variant="primary"
                onClick={handleAddressSearch}
                disabled={!searchAddress.trim() || loading}
              >
                Search
              </Button>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button
              variant="secondary"
              onClick={handleUseCurrentLocation}
              disabled={!userLocation || loading}
            >
              Use Current Location
            </Button>
            {userLocation && (
              <span className="text-sm text-gray-600">
                Location: {userLocation.lat.toFixed(4)}, {userLocation.lng.toFixed(4)}
              </span>
            )}
          </div>
        </div>

        {loading && (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
            <p className="mt-2 text-gray-600">Searching for installers...</p>
          </div>
        )}

        {installers.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Found {installers.length} installer(s)
            </h3>
            
            {installers.map((installer) => (
              <div
                key={installer.id}
                className="border border-gray-200 rounded-lg p-4 hover:border-primary transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900">
                      {installer.name}
                    </h4>
                    <p className="text-gray-600">{installer.address}</p>
                    <p className="text-sm text-gray-500">
                      Distance: {installer.distance} miles | Rating: {installer.rating}/5
                    </p>
                    <div className="mt-2">
                      <span className="text-sm font-medium text-gray-700">Services:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {installer.services.map((service) => (
                          <span
                            key={service.id}
                            className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                          >
                            {service.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col space-y-2 ml-4">
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => onInstallerSelect?.(installer)}
                    >
                      Select
                    </Button>
                    <a
                      href={`tel:${installer.phone}`}
                      className="text-sm text-primary hover:text-primary-dark"
                    >
                      {installer.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}; 