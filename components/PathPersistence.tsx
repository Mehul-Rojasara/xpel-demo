'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { saveLastVisitedPath, getLastVisitedPath, isValidPath } from '@/lib/utils/pathPersistence';

export default function PathPersistence() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    // Save current path to localStorage
    if (pathname && pathname !== '/') {
      saveLastVisitedPath(pathname);
    }
  }, [pathname]);

  useEffect(() => {
    // Check if we're on the root path and redirect to last visited path
    if (pathname === '/') {
      const lastPath = getLastVisitedPath();
      
      if (lastPath && isValidPath(lastPath)) {
        // Redirect to the last visited path
        router.replace(lastPath);
      } else {
        // No valid last path, redirect to default
        router.replace('/us/en');
      }
    }
  }, [pathname, router]);

  // This component doesn't render anything
  return null;
} 