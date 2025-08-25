"use client";
import React, { useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { Button, CloseIcon } from './Button';

interface PopupModalProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
  readonly children: React.ReactNode;
  readonly size?: 'sm' | 'md' | 'lg' | 'xl';
  readonly showCloseButton?: boolean;
  readonly closeOnOverlayClick?: boolean;
  readonly closeOnEscape?: boolean;
  readonly className?: string;
}

// Size classes - optimized for screen fit with Figma proportions
const SIZE_CLASSES = {
  sm: 'w-[90vw] max-w-[600px] h-auto max-h-[75vh]',
  md: 'w-[90vw] max-w-[700px] h-auto max-h-[80vh]',
  lg: 'w-[90vw] max-w-[771px] h-auto max-h-[80vh]',
  xl: 'w-[90vw] max-w-[800px] h-auto max-h-[85vh]'
} as const;

// Get focusable elements from modal
const getFocusableElements = (modalRef: React.RefObject<HTMLDivElement | null>) => {
  if (!modalRef.current) return [];
  return Array.from(modalRef.current.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  )) as HTMLElement[];
};

// Handle focus trap logic
const handleFocusTrap = (event: KeyboardEvent, focusableElements: HTMLElement[]) => {
  if (focusableElements.length === 0) return;

  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  if (event.shiftKey && document.activeElement === firstElement) {
    event.preventDefault();
    lastElement.focus();
  } else if (!event.shiftKey && document.activeElement === lastElement) {
    event.preventDefault();
    firstElement.focus();
  }
};

// Handle resize logic
const handleResizeLogic = (modalRef: React.RefObject<HTMLDivElement | null>) => {
  if (!modalRef.current) return;
  
  const rect = modalRef.current.getBoundingClientRect();
  const viewportHeight = window.innerHeight;
  
  if (rect.height > viewportHeight * 0.9) {
    modalRef.current.style.maxHeight = `${viewportHeight * 0.9}px`;
  }
};

// Setup focus management
const setupFocusManagement = (
  isOpen: boolean, 
  modalRef: React.RefObject<HTMLDivElement | null>, 
  handleResize: () => void
) => {
  if (!isOpen || !modalRef.current) return;

  const focusableElements = getFocusableElements(modalRef);
  
  if (focusableElements.length > 0) {
    focusableElements[0].focus();
  }

  const previouslyFocusedElement = document.activeElement as HTMLElement;
  
  handleResize();
  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
    if (previouslyFocusedElement?.focus) {
      previouslyFocusedElement.focus();
    }
  };
};

export const PopupModal: React.FC<PopupModalProps> = ({
  isOpen,
  onClose,
  children,
  size = 'lg',
  showCloseButton = true,
  closeOnOverlayClick = true,
  closeOnEscape = true,
  className = ''
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Handle keyboard events
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape' && closeOnEscape) {
      onClose();
      return;
    }
    
    if (event.key === 'Tab') {
      const focusableElements = getFocusableElements(modalRef);
      handleFocusTrap(event, focusableElements);
    }
  }, [closeOnEscape, onClose]);

  // Handle resize
  const handleResize = useCallback(() => {
    handleResizeLogic(modalRef);
  }, []);

  // Handle overlay click
  const handleOverlayClick = useCallback((event: React.MouseEvent) => {
    if (closeOnOverlayClick && event.target === overlayRef.current) {
      onClose();
    }
  }, [closeOnOverlayClick, onClose]);

  // Keyboard event effect
  useEffect(() => {
    if (!isOpen) return;

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, handleKeyDown]);

  // Focus management effect
  useEffect(() => {
    return setupFocusManagement(isOpen, modalRef, handleResize);
  }, [isOpen, handleResize]);

  if (!isOpen) return null;

  const modalContent = (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/25 backdrop-blur-sm overflow-y-auto"
      onClick={handleOverlayClick}
      aria-modal="true"
      aria-hidden={!isOpen}
      aria-label="Modal dialog"
    >
      <div
        ref={modalRef}
        className={`relative ${SIZE_CLASSES[size]} bg-neutral-900 rounded-lg shadow-lg transform transition-all duration-300 ease-out overflow-hidden ${className}`}
        role="document"
        tabIndex={-1}
      >
        {/* Modal Container with Figma-specified padding - responsive */}
        <div className="p-6 sm:p-8 md:p-[48px_54px] flex flex-col gap-4 sm:gap-6">
          {/* Close Button - positioned outside content area */}
          {showCloseButton && (
            <Button
              onClick={onClose}
              variant="tertiary"
              buttonStyle="filled"
              size="md"
              background="dark"
              isIconOnly={true}
              icon={<CloseIcon />}
              className="absolute -top-6 -right-6 w-10 h-10"
              aria-label="Close modal"
              type="button"
            />
          )}

          {/* Content Section - Children content rendered directly */}
          <div className="flex-1 overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
    </div>
  );

  // Use portal to render modal at document body level
  return createPortal(modalContent, document.body);
};

export default PopupModal; 