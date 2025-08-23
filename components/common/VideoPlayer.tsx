'use client';

import React, { useState, useRef, useEffect } from 'react';
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
  // Caption options
  captions?: {
    src: string;
    label: string;
    srclang: string;
    kind?: 'subtitles' | 'captions' | 'descriptions' | 'chapters' | 'metadata';
    default?: boolean;
  };
  // Control options
  readonly showPlayPause?: boolean;
  readonly showProgress?: boolean;
  readonly showDots?: boolean;
  readonly totalSlides?: number;
  readonly currentSlideIndex?: number;
  readonly onSlideChange?: (index: number) => void;
  readonly onVideoEnd?: () => void;
  readonly onVideoProgress?: (progress: number) => void;
  // Styling
  readonly controlsPosition?: 'bottom-right' | 'bottom-center' | 'bottom-left';
  readonly progressBarWidth?: string;
  readonly dotSize?: 'sm' | 'md' | 'lg';
  // Testing options
  readonly testDuration?: number; // Duration in seconds for testing
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoSrc,
  posterImage,
  autoPlay = true,
  muted = true,
  loop = false,
  playsInline = true,
  preload = 'metadata',
  className = '',
  // Caption options
  captions,
  // Control options
  showPlayPause = true,
  showProgress = false,
  showDots = false,
  totalSlides = 1,
  currentSlideIndex = 0,
  onSlideChange,
  onVideoEnd,
  onVideoProgress,
  // Styling
  controlsPosition = 'bottom-right',
  progressBarWidth = 'w-48',
  dotSize = 'md',
  // Testing options
  testDuration = 5 // 5 seconds for testing
}) => {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [videoProgress, setVideoProgress] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Ensure hydration safety
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Handle video progress tracking
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      if (!video.duration) return;
      
      const progress = (video.currentTime / video.duration) * 100;
      setVideoProgress(progress);
      onVideoProgress?.(progress);
      
      // Auto-advance when video finishes (for slider mode)
      if (progress >= 100 && !loop && onVideoEnd) {
        setTimeout(() => onVideoEnd(), 500);
      }
    };

    const handleLoadedMetadata = () => {
      setVideoDuration(video.duration);
      
      // For testing: limit video duration to testDuration seconds
      if (testDuration && video.duration > testDuration) {
        video.currentTime = 0;
        // Set a timeout to end the video after testDuration seconds
        setTimeout(() => {
          if (video && !video.paused) {
            video.currentTime = video.duration; // This will trigger the 'ended' event
          }
        }, testDuration * 1000);
      }
    };

    const handleVideoEnd = () => {
      if (onVideoEnd) {
        setTimeout(() => onVideoEnd(), 500);
      }
    };

    const handlePlaybackError = () => {
      setIsPlaying(false);
    };

    const handlePlaybackSuccess = () => {
      setIsPlaying(true);
    };

    const setupEventListeners = () => {
      video.addEventListener('timeupdate', updateProgress);
      video.addEventListener('loadedmetadata', handleLoadedMetadata);
      video.addEventListener('ended', handleVideoEnd);
      video.addEventListener('error', handlePlaybackError);
      video.addEventListener('play', handlePlaybackSuccess);
    };

    const cleanupEventListeners = () => {
      video.removeEventListener('timeupdate', updateProgress);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('ended', handleVideoEnd);
      video.removeEventListener('error', handlePlaybackError);
      video.removeEventListener('play', handlePlaybackSuccess);
    };

    const attemptAutoPlay = async () => {
      if (!autoPlay || !isMounted) return;
      
      try {
        await video.play();
        handlePlaybackSuccess();
      } catch (error) {
        console.warn('Auto-play failed, will retry on user interaction:', error);
        setIsPlaying(false);
      }
    };

    setupEventListeners();
    attemptAutoPlay();

    return cleanupEventListeners;
  }, [autoPlay, loop, onVideoEnd, onVideoProgress, isMounted, testDuration]);

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
      const minWidth = 6; // w-2 (8px)
      const maxWidth = 60; // w-8 (32px)
      const progressWidth = minWidth + ((maxWidth - minWidth) * videoProgress / 100);
      return `${progressWidth}px`;
    } else {
      // All other dots remain normal width
      return '6px'; // w-2
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
        aria-hidden="true"
      >
        <source src={videoSrc} type="video/mp4" />
        {captions ? (
          <track
            src={captions.src}
            label={captions.label}
            srcLang={captions.srclang}
            kind={captions.kind || 'captions'}
            default={captions.default}
          />
        ) : (
          <track
            kind="captions"
            src=""
            label="No captions available"
            srcLang="en"
            default={false}
          />
        )}
        Your browser does not support the video tag.
      </video>

      {/* Video Controls - Only show after hydration */}
      {isMounted && (showPlayPause || showProgress || showDots) && (
        <div className={`z-20 w-full ${getControlsPositionClasses()}`}>
          <Container className="w-full">
          {/* Progress Bar + Play/Pause (Slider Mode) */}
          {showProgress && (
            <div className="flex flex-col items-center space-y-3">
              <div className="flex items-center space-x-4">
                <div 
                  className={`${progressBarWidth} h-2 bg-white/60 rounded-full overflow-hidden cursor-pointer`}
                  onClick={handleVideoProgressClick}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      // Create a synthetic event for the click handler
                      const syntheticEvent = {
                        ...e,
                        type: 'click',
                        target: e.currentTarget
                      } as unknown as React.MouseEvent<HTMLDivElement>;
                      handleVideoProgressClick(syntheticEvent);
                    }
                  }}
                  tabIndex={0}
                  aria-label={`Seek to position in video. Current progress: ${Math.round(videoProgress)}%`}
                  aria-pressed="false"
                >
                  <progress
                    className="h-full bg-[#FFB81C] w-20 md:w-60 rounded-full transition-all duration-100 ease-out"
                    value={videoProgress}
                    max={100}
                    aria-label={`Video progress: ${Math.round(videoProgress)}%`}
                  />
                </div>
                
                {showPlayPause && (
                  <button
                    onClick={handleVideoToggle}
                    className="w-7 h-7 flex items-center justify-center text-white hover:text-[#FFB81C] transition-colors duration-300 border border-white/60 rounded-full bg-black/20 backdrop-blur-sm"
                    aria-label={isPlaying ? 'Pause video' : 'Play video'}
                  >
                    {isPlaying ? (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    )}
                  </button>
                )}
              </div>

              {/* Dots (Slider Mode) */}
              {showDots && totalSlides > 1 && (
                <div className="flex items-center space-x-2">
                  {Array.from({ length: totalSlides }, (_, index) => {
                    const dotState = getDotState(index);
                    return (
                      <button
                        key={`dot-${index}`}
                        onClick={() => onSlideChange?.(index)}
                        className={`${getDotSizeClasses()} rounded-full transition-all duration-300 ${
                          dotState === 'current'
                            ? 'bg-[#FFB81C] scale-125' 
                            : 'bg-white/60 hover:bg-white/80'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* Dots Only Mode - Single Line Layout */}
          {showDots && !showProgress && totalSlides > 1 && (
            <div className="flex items-center space-x-3">
              {/* Dots - All in one line */}
              <div className="flex items-center space-x-2">
                {Array.from({ length: totalSlides }, (_, index) => {
                  const isCurrent = index === currentSlideIndex;
                  const dotWidth = getDotWidth(index);
                  
                  return (
                    <button
                      key={`dot-line-${index}`}
                      onClick={() => onSlideChange?.(index)}
                      className={`${getDotSizeClasses()} rounded-full transition-all duration-300 bg-white/60 hover:bg-white/80 ${
                        isCurrent
                          ? 'w-20 md:w-60' 
                          : 'w-1.5'
                      }`}

                      aria-label={`Go to slide ${index + 1}`}
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
              
              {/* Play/Pause Button - Same line as dots */}
              {showPlayPause && (
                <button
                  onClick={handleVideoToggle}
                  className="w-7 h-7 flex items-center justify-center text-white hover:text-[#FFB81C] transition-colors duration-300 border border-white/60 rounded-full bg-black/20 backdrop-blur-sm"
                  aria-label={isPlaying ? 'Pause video' : 'Play video'}
                >
                  {isPlaying ? (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  )}
                </button>
              )}
            </div>
          )}

          {/* Play/Pause Only (Single Video Mode) */}
          {showPlayPause && !showProgress && !showDots && (
            <button
              onClick={handleVideoToggle}
              className="video-player-button w-7 lg:w-10 h-7 lg:h-10 flex items-center justify-center text-white hover:text-[#FFB81C] transition-colors duration-300 border border-white/60 rounded-full bg-black/20 backdrop-blur-sm0"
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
            >
              {isPlaying ? (
                <svg className="w-4 lg:w-5 h-4 lg:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                </svg>
              ) : (
                <svg className="w-4 lg:w-5 h-4 lg:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              )}
            </button>
          )}
          </Container>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer; 