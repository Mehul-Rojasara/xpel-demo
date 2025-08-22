import React from 'react';

interface AlertProps {
  readonly variant?: 'info' | 'success' | 'warning' | 'error';
  readonly title?: string;
  readonly message?: string;
  readonly actionText?: string;
  readonly onAction?: () => void;
  readonly onClose?: () => void;
  readonly className?: string;
}

interface BannerAlertProps extends AlertProps {
  readonly headline: string;
  readonly caption: string;
}

interface AnnouncementAlertProps extends AlertProps {
  readonly text: string;
}

// Banner Alert Component
export const BannerAlert: React.FC<BannerAlertProps> = ({
  variant = 'info',
  headline,
  caption,
  actionText,
  onAction,
  onClose,
  className = '',
}) => {
  const variantClasses = {
    info: {
      container: 'bg-[var(--alert-info-bg)] border-[var(--alert-info-border)]',
      icon: 'bg-[var(--alert-info-icon)]',
      action: 'text-[var(--alert-info-action)]',
      close: 'text-[var(--alert-info-close)]'
    },
    success: {
      container: 'bg-[var(--alert-success-bg)] border-[var(--alert-success-border)]',
      icon: 'bg-[var(--alert-success-icon)]',
      action: 'text-[var(--alert-success-action)]',
      close: 'text-[var(--alert-success-close)]'
    },
    warning: {
      container: 'bg-[var(--alert-warning-bg)] border-[var(--alert-warning-border)]',
      icon: 'bg-[var(--alert-warning-icon)]',
      action: 'text-[var(--alert-warning-action)]',
      close: 'text-[var(--alert-warning-close)]'
    },
    error: {
      container: 'bg-[var(--alert-error-bg)] border-[var(--alert-error-border)]',
      icon: 'bg-[var(--alert-error-icon)]',
      action: 'text-[var(--alert-error-action)]',
      close: 'text-[var(--alert-error-close)]'
    }
  };

  const currentVariant = variantClasses[variant];

  return (
    <div className={`p-4 border rounded ${currentVariant.container} ${className}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className={`w-6 h-6 rounded-full flex items-center justify-center ${currentVariant.icon}`}>
            {variant === 'info' && (
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
              </svg>
            )}
            {variant === 'success' && (
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
            )}
            {variant === 'warning' && (
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
              </svg>
            )}
            {variant === 'error' && (
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
              </svg>
            )}
          </div>
          <div>
            <h4 className="text-sm font-medium text-[var(--color-neutral-900)]">{headline}</h4>
            <p className="text-xs text-[var(--color-neutral-900)] mt-1">{caption}</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          {actionText && (
            <button 
              onClick={onAction}
              className={`text-sm font-medium hover:underline ${currentVariant.action}`}
            >
              {actionText}
            </button>
          )}
          {onClose && (
            <button 
              onClick={onClose}
              className={`w-5 h-5 hover:text-gray-600 ${currentVariant.close}`}
            >
              <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// Announcement Alert Component
export const AnnouncementAlert: React.FC<AnnouncementAlertProps> = ({
  variant = 'info',
  text,
  actionText,
  onAction,
  onClose,
  className = '',
}) => {
  const variantClasses = {
    info: {
      container: 'bg-[var(--alert-info-bg)]',
      icon: 'bg-[var(--alert-info-icon)]',
      action: 'text-[var(--alert-info-action)]',
      close: 'text-[var(--alert-info-close)]'
    },
    success: {
      container: 'bg-[var(--alert-success-bg)]',
      icon: 'bg-[var(--alert-success-icon)]',
      action: 'text-[var(--alert-success-action)]',
      close: 'text-[var(--alert-success-close)]'
    },
    warning: {
      container: 'bg-[var(--alert-warning-bg)]',
      icon: 'bg-[var(--alert-warning-icon)]',
      action: 'text-[var(--alert-warning-action)]',
      close: 'text-[var(--alert-warning-close)]'
    },
    error: {
      container: 'bg-[var(--alert-error-bg)]',
      icon: 'bg-[var(--alert-error-icon)]',
      action: 'text-[var(--alert-error-action)]',
      close: 'text-[var(--alert-error-close)]'
    }
  };

  const currentVariant = variantClasses[variant];

  return (
    <div className={`w-full max-w-[760px] h-[44px] rounded px-4 py-2.5 flex items-center justify-between ${currentVariant.container} ${className}`}>
      <div className="flex items-center space-x-4">
        <div className={`w-5 h-5 rounded-full flex items-center justify-center ${currentVariant.icon}`}>
          {variant === 'info' && (
            <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
            </svg>
          )}
          {variant === 'success' && (
            <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>
          )}
          {variant === 'warning' && (
            <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
            </svg>
          )}
          {variant === 'error' && (
            <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
            </svg>
          )}
        </div>
        <span className="text-sm text-[var(--color-neutral-900)]">{text}</span>
        {actionText && (
          <button 
            onClick={onAction}
            className={`text-sm font-medium hover:underline ${currentVariant.action}`}
          >
            {actionText}
          </button>
        )}
      </div>
      {onClose && (
        <button 
          onClick={onClose}
          className={`w-5 h-5 hover:text-gray-600 ${currentVariant.close}`}
        >
          <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </button>
      )}
    </div>
  );
};

// Simple Alert Component
export const Alert: React.FC<AlertProps> = ({
  variant = 'info',
  title,
  message,
  actionText,
  onAction,
  onClose,
  className = '',
}) => {
  const variantClasses = {
    info: {
      container: 'bg-[var(--alert-info-bg)] border-[var(--alert-info-border)]',
      icon: 'bg-[var(--alert-info-icon)]',
      action: 'text-[var(--alert-info-action)]',
      close: 'text-[var(--alert-info-close)]'
    },
    success: {
      container: 'bg-[var(--alert-success-bg)] border-[var(--alert-success-border)]',
      icon: 'bg-[var(--alert-success-icon)]',
      action: 'text-[var(--alert-success-action)]',
      close: 'text-[var(--alert-success-close)]'
    },
    warning: {
      container: 'bg-[var(--alert-warning-bg)] border-[var(--alert-warning-border)]',
      icon: 'bg-[var(--alert-warning-icon)]',
      action: 'text-[var(--alert-warning-action)]',
      close: 'text-[var(--alert-warning-close)]'
    },
    error: {
      container: 'bg-[var(--alert-error-bg)] border-[var(--alert-error-border)]',
      icon: 'bg-[var(--alert-error-icon)]',
      action: 'text-[var(--alert-error-action)]',
      close: 'text-[var(--alert-error-close)]'
    }
  };

  const currentVariant = variantClasses[variant];

  return (
    <div className={`p-4 border rounded ${currentVariant.container} ${className}`}>
      <div className="flex items-start space-x-3">
        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${currentVariant.icon}`}>
          {variant === 'info' && (
            <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
            </svg>
          )}
          {variant === 'success' && (
            <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>
          )}
          {variant === 'warning' && (
            <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
            </svg>
          )}
          {variant === 'error' && (
            <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
            </svg>
          )}
        </div>
        <div className="flex-1">
          {title && (
            <h4 className="text-sm font-medium text-[var(--color-neutral-900)] mb-1">{title}</h4>
          )}
          {message && (
            <p className="text-sm text-[var(--color-neutral-900)]">{message}</p>
          )}
          {actionText && (
            <button 
              onClick={onAction}
              className={`text-sm font-medium hover:underline mt-2 ${currentVariant.action}`}
            >
              {actionText}
            </button>
          )}
        </div>
        {onClose && (
          <button 
            onClick={onClose}
            className={`w-5 h-5 hover:text-gray-600 flex-shrink-0 ${currentVariant.close}`}
          >
            <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}; 