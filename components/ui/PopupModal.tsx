"use client";
import React, { useEffect, useRef } from 'react';
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

  // Size classes - optimized for screen fit with Figma proportions
  const sizeClasses = {
    sm: 'w-[90vw] max-w-[600px] h-auto max-h-[75vh]',
    md: 'w-[90vw] max-w-[700px] h-auto max-h-[80vh]',
    lg: 'w-[90vw] max-w-[771px] h-auto max-h-[80vh]',
    xl: 'w-[90vw] max-w-[800px] h-auto max-h-[85vh]'
  };

  // Handle escape key and focus trap
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && closeOnEscape) {
        onClose();
        return;
      }

      // Focus trap - handle Tab key
      if (event.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (event.shiftKey) {
          // Shift + Tab
          if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          }
        } else {
          // Tab
          if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, closeOnEscape]);

  // Focus management and trap
  useEffect(() => {
    if (isOpen && modalRef.current) {
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      if (focusableElements.length > 0) {
        (focusableElements[0] as HTMLElement).focus();
      }

      // Store the element that had focus before modal opened
      const previouslyFocusedElement = document.activeElement as HTMLElement;

      // Ensure modal fits on screen
      const handleResize = () => {
        if (modalRef.current) {
          const rect = modalRef.current.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          
          if (rect.height > viewportHeight * 0.9) {
            modalRef.current.style.maxHeight = `${viewportHeight * 0.9}px`;
          }
        }
      };

      handleResize();
      window.addEventListener('resize', handleResize);

      // Return focus when modal closes
      return () => {
        window.removeEventListener('resize', handleResize);
        if (previouslyFocusedElement && typeof previouslyFocusedElement.focus === 'function') {
          previouslyFocusedElement.focus();
        }
      };
    }
  }, [isOpen]);

  // Handle overlay click
  const handleOverlayClick = (event: React.MouseEvent) => {
    if (closeOnOverlayClick && event.target === overlayRef.current) {
      onClose();
    }
  };

  if (!isOpen) return null;

  const modalContent = (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/25 backdrop-blur-sm overflow-y-auto"
      onClick={handleOverlayClick}
      onKeyDown={(e)=> e.key === "Escape" && onClose()}
      aria-modal="true"
      aria-hidden={!isOpen}
      aria-label="Modal dialog"
    >
      <div
        ref={modalRef}
        className={`relative ${sizeClasses[size]} bg-neutral-900 rounded-lg shadow-lg transform transition-all duration-300 ease-out overflow-hidden ${className}`}
        tabIndex={-1}
        style={{ 
          borderRadius: '8px',
          maxHeight: '85vh',
          display: 'flex',
          flexDirection: 'column'
        }}
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