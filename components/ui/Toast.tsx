'use client';

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { AnnouncementAlert } from './Alert';

interface Toast {
  readonly id: string;
  readonly variant: 'info' | 'success' | 'warning' | 'error';
  readonly text: string;
  readonly actionText?: string;
  readonly onAction?: () => void;
  readonly duration?: number;
}

interface ToastContextType {
  readonly showToast: (toast: Omit<Toast, 'id'>) => void;
  readonly hideToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

interface ToastProviderProps {
  readonly children: React.ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [isClient, setIsClient] = useState(false);

  // Ensure we're on the client side to avoid hydration mismatches
  useEffect(() => {
    setIsClient(true);
  }, []);

  const generateId = useCallback(() => {
    // Use a more stable ID generation method
    return `toast-${crypto.randomUUID()}`;
  }, []);

  const hideToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  const showToast = useCallback((toast: Omit<Toast, 'id'>) => {
    if (!isClient) return; // Don't show toasts during SSR

    const id = generateId();
    const newToast: Toast = {
      id,
      ...toast,
      duration: toast.duration ?? 5000, // Default 5 seconds
    };

    setToasts(prev => [...prev, newToast]);

    // Auto-remove toast after duration
    if (newToast.duration && newToast.duration > 0) {
      setTimeout(() => {
        hideToast(id);
      }, newToast.duration);
    }
  }, [isClient, generateId, hideToast]);

  return (
    <ToastContext.Provider value={{ showToast, hideToast }}>
      {children}
      
      {/* Toast Container - only render on client */}
      {isClient && (
        <div className="fixed top-4 right-4 z-50 space-y-2 max-w-sm">
          {toasts.map((toast) => (
            <div
              key={toast.id}
              className="transform transition-all duration-300 ease-in-out"
              style={{
                animation: 'slideInRight 0.3s ease-out'
              }}
            >
              <AnnouncementAlert
                variant={toast.variant}
                text={toast.text}
                {...(toast.actionText && { actionText: toast.actionText })}
                {...(toast.onAction && { onAction: toast.onAction })}
                onClose={() => hideToast(toast.id)}
              />
            </div>
          ))}
        </div>
      )}

      <style>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </ToastContext.Provider>
  );
}; 