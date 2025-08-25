'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Container from '@/components/ui/Container';

interface VideoPlayerProps {
  readonly videoSrc: string;
  readonly posterImage?: string;
  readonly autoPlay?: boolean;
  readonly muted?: boolean;
  readonly loop?: boolean;
  readonly playsInline?: boolean;
  readonly preload?: 'none' | 'metadata' | 'auto';
  readonly className?: string;
  readonly showPlayPause?: boolean;
  readonly showProgress?: boolean;
  readonly showDots?: boolean;
  readonly totalSlides?: number;
  readonly currentSlideIndex?: number;
  readonly onSlideChange?: (index: number) => void;
  readonly onVideoEnd?: () => void;
  readonly onVideoProgress?: (progress: number) => void;
  readonly controlsPosition?: 'bottom-right' | 'bottom-center' | 'bottom-left';
  readonly progressBarWidth?: string;
  readonly dotSize?: 'sm' | 'md' | 'lg';
  readonly testDuration?: number;
}

const generateSlideDotKey = (slideNumber: number, totalSlides: number): string => {
  return `slide-dot-${slideNumber}-of-${totalSlides}`;
};

const generateSlideDotLineKey = (slideNumber: number, totalSlides: number): string => {
  return `slide-dot-line-${slideNumber}-of-${totalSlides}`;
};

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoSrc,
  posterImage,
  autoPlay = true,
  muted = true,
  loop = false,
  playsInline = true,
  preload = 'metadata',
  className = '',
  showPlayPause = true,
  showProgress = false,
  showDots = false,
  totalSlides = 1,
  currentSlideIndex = 0,
  onSlideChange,
  onVideoEnd,
  onVideoProgress,
  controlsPosition = 'bottom-right',
  progressBarWidth = 'w-48',
  dotSize = 'md',
  testDuration = 5
}) => {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [videoProgress, setVideoProgress] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleAutoAdvance = useCallback(() => {
    if (!loop && onVideoEnd) {
      setTimeout(() => {
        onVideoEnd();
      }, 500);
    }
  }, [loop, onVideoEnd]);

  // Handle video progress tracking
  const handleTimeUpdate = useCallback(() => {
    const video = videoRef.current;
    if (!video?.duration) return;

    const progress = (video.currentTime / video.duration) * 100;
    setVideoProgress(progress);
    onVideoProgress?.(progress);
    
    // Auto-advance when video finishes (for slider mode)
    if (progress >= 100) {
      handleAutoAdvance();
    }
  }, [onVideoProgress, handleAutoAdvance]);

  // Handle testing duration logic
  const handleTestDuration = useCallback((video: HTMLVideoElement) => {
    if (!testDuration || video.duration <= testDuration) return;
    
    video.currentTime = 0;
    setTimeout(() => {
      if (video && !video.paused) {
        video.currentTime = video.duration;
      }
    }, testDuration * 1000);
  }, [testDuration]);

  const handleLoadedMetadata = useCallback(() => {
    const video = videoRef.current;
    if (!video?.duration) return;

    setVideoDuration(video.duration);
    handleTestDuration(video);
  }, [handleTestDuration]);

  // Handle video end
  const handleVideoEnd = useCallback(() => {
    handleAutoAdvance();
  }, [handleAutoAdvance]);

  // Handle video error
  const handlePlaybackError = useCallback(() => {
    console.warn('Video playback error occurred');
    setIsPlaying(false);
  }, []);

  // Handle video play success
  const handlePlaybackSuccess = useCallback(() => {
    setIsPlaying(true);
  }, []);

  // Attempt auto-play with retry logic
  const attemptAutoPlay = useCallback(async () => {
    const video = videoRef.current;
    if (!video || !autoPlay || !isMounted) return;

    try {
      await video.play();
      handlePlaybackSuccess();
    } catch (error) {
      console.warn('Auto-play failed, will retry on user interaction:', error);
      setIsPlaying(false);
    }
  }, [autoPlay, isMounted, handlePlaybackSuccess]);

  // Setup video event listeners
  const setupVideoEventListeners = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    const eventHandlers = [
      { event: 'timeupdate', handler: handleTimeUpdate },
      { event: 'loadedmetadata', handler: handleLoadedMetadata },
      { event: 'ended', handler: handleVideoEnd },
      { event: 'error', handler: handlePlaybackError },
      { event: 'play', handler: handlePlaybackSuccess }
    ];

    eventHandlers.forEach(({ event, handler }) => {
      video.addEventListener(event, handler);
    });

    return () => {
      eventHandlers.forEach(({ event, handler }) => {
        video.removeEventListener(event, handler);
      });
    };
  }, [handleTimeUpdate, handleLoadedMetadata, handleVideoEnd, handlePlaybackError, handlePlaybackSuccess]);

  // Initialize video player
  const initializeVideoPlayer = useCallback(() => {
    const cleanup = setupVideoEventListeners();
    attemptAutoPlay();
    return cleanup;
  }, [setupVideoEventListeners, attemptAutoPlay]);

  // Main useEffect with reduced complexity
  useEffect(() => {
    return initializeVideoPlayer();
  }, [initializeVideoPlayer]);

  // Handle video play/pause with error handling
  const handleVideoToggle = async () => {
    if (videoRef.current && isMounted) {
      try {
        if (isPlaying) {
          videoRef.current.pause();
          setIsPlaying(false);
        } else {
          await videoRef.current.play();
          setIsPlaying(true);
        }
      } catch (error) {
        console.warn('Video toggle failed:', error);
        setIsPlaying(false);
      }
    }
  };

  // Handle video progress click
  const handleVideoProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current && videoDuration) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const percentage = (clickX / rect.width) * 100;
      const newTime = (percentage / 100) * videoDuration;
      videoRef.current.currentTime = newTime;
    }
  };

  // Calculate dot state for slider mode
  const getDotState = (index: number) => {
    if (index === currentSlideIndex) {
      return 'current';
    } else {
      return 'normal';
    }
  };

  // Get dot size classes (height only)
  const getDotSizeClasses = () => {
    switch (dotSize) {
      case 'sm': return 'h-1.5';
      case 'lg': return 'h-3';
      default: return 'h-1.5';
    }
  };

  // Calculate dot width based on progress - ONLY current dot expands
  const getDotWidth = (index: number) => {
    if (index === currentSlideIndex) {
      // Only current dot expands based on video progress
      const minWidth = 6;
      const maxWidth = 60;
      const progressWidth = minWidth + ((maxWidth - minWidth) * videoProgress / 100);
      return `${progressWidth}px`;
    } else {
      return '6px';
    }
  };

  // Get controls position classes
  const getControlsPositionClasses = () => {
    switch (controlsPosition) {
      case 'bottom-center':
        return 'absolute bottom-8 left-1/2 transform -translate-x-1/2';
      case 'bottom-left':
        return 'absolute bottom-6 lg:bottom-10 left-0 left-side';
      default:
        return 'absolute bottom-6 right-0 right-side';
    }
  };

  // Render dots for slider mode
  const renderSliderDots = () => {
    if (!showDots || totalSlides <= 1) return null;
    
    return (
      <div className="flex items-center space-x-2">
        {Array.from({ length: totalSlides }, (_, index) => {
          const slideNumber = index + 1;
          const dotState = getDotState(index);
          return (
            <button
              key={generateSlideDotKey(slideNumber, totalSlides)}
              onClick={() => onSlideChange?.(index)}
              className={`${getDotSizeClasses()} rounded-full transition-all duration-300 ${
                dotState === 'current'
                  ? 'bg-[#FFB81C] scale-125' 
                  : 'bg-white/60 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${slideNumber}`}
            />
          );
        })}
      </div>
    );
  };

  // Render progress bar with play/pause button
  const renderProgressBar = () => {
    if (!showProgress) return null;
    
    return (
      <div className="flex flex-col items-center space-y-3">
        <div className="flex items-center space-x-4">
          <div 
            className={`${progressBarWidth} h-2 bg-white/60 rounded-full overflow-hidden cursor-pointer`}
            onClick={handleVideoProgressClick}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                // Create a synthetic mouse event for keyboard navigation
                const syntheticEvent = {
                  currentTarget: e.currentTarget,
                  target: e.target,
                  preventDefault: () => {},
                  stopPropagation: () => {}
                } as React.MouseEvent<HTMLDivElement>;
                handleVideoProgressClick(syntheticEvent);
              }
            }}
            tabIndex={0}
            role="slider"
            aria-label="Video progress bar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(videoProgress)}
          >
            <div 
              className="h-full bg-[#FFB81C] w-20 md:w-60 rounded-full transition-all duration-100 ease-out "
              style={{ width: `${videoProgress}%` }}
            />
          </div>
          
          {/* Hidden progress element for screen readers */}
          <progress
            value={videoProgress}
            max="100"
            className="sr-only"
            aria-label={`Video progress: ${Math.round(videoProgress)}%`}
          />
          
          {showPlayPause && renderPlayPauseButton('md')}
        </div>

        {/* Dots (Slider Mode) */}
        {renderSliderDots()}
      </div>
    );
  };

  // Render dots only mode
  const renderDotsOnlyMode = () => {
    if (!showDots || showProgress || totalSlides <= 1) return null;
    
    return (
      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-2">
          {Array.from({ length: totalSlides }, (_, index) => {
            const slideNumber = index + 1;
            const isCurrent = index === currentSlideIndex;
            const dotWidth = getDotWidth(index);
            
            return (
              <button
                key={generateSlideDotLineKey(slideNumber, totalSlides)}
                onClick={() => onSlideChange?.(index)}
                className={`${getDotSizeClasses()} rounded-full transition-all duration-300 bg-white/60 hover:bg-white/80 ${
                  isCurrent
                    ? 'w-20 md:w-60' 
                    : 'w-1.5'
                }`}
                aria-label={`Go to slide ${slideNumber}`}
              >
                <span 
                  className={`${getDotSizeClasses()} block rounded-full transition-all duration-300 ${
                    isCurrent
                      ? 'bg-[#FFB81C]' 
                      : 'bg-white/60 hover:bg-white/80'
                  }`}
                  style={{ width: dotWidth }}></span>
              </button>
            );
          })}
        </div>
        
        {showPlayPause && renderPlayPauseButton('md')}
      </div>
    );
  };

  // Render play/pause only mode
  const renderPlayPauseOnly = () => {
    if (!showPlayPause || showProgress || showDots) return null;
    
    return renderPlayPauseButton('lg');
  };

  // Render play/pause button
  const renderPlayPauseButton = (size: 'sm' | 'md' | 'lg' = 'md') => {
    const buttonClasses = size === 'lg' 
      ? 'w-7 lg:w-10 h-7 lg:h-10' 
      : 'w-7 h-7';
    const iconClasses = size === 'lg' 
      ? 'w-4 lg:w-5 h-4 lg:h-5' 
      : 'w-4 h-4';
    
    return (
      <button
        onClick={handleVideoToggle}
        className={`${buttonClasses} flex items-center justify-center text-white hover:text-[#FFB81C] transition-colors duration-300 border border-white/60 rounded-full bg-black/20 backdrop-blur-sm video-player-button`}
        aria-label={isPlaying ? 'Pause video' : 'Play video'}
      >
        {isPlaying ? (
          <svg className={iconClasses} fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
          </svg>
        ) : (
          <svg className={iconClasses} fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        )}
      </button>
    );
  };

  return (
    <div className={`relative ${className}`}>
      {/* Video Element */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        muted={muted}
        playsInline={playsInline}
        loop={loop}
        preload={preload}
        poster={posterImage}
        aria-label="Video content"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Video Controls - Only show after hydration */}
      {isMounted && (showPlayPause || showProgress || showDots) && (
        <div className={`z-20 w-full ${getControlsPositionClasses()}`}>
          <Container className="w-full">
          {/* Progress Bar + Play/Pause (Slider Mode) */}
          {renderProgressBar()}

          {/* Dots Only Mode - Single Line Layout */}
          {renderDotsOnlyMode()}

          {/* Play/Pause Only (Single Video Mode) */}
          {renderPlayPauseOnly()}
          </Container>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer; 