import { NextRequest, NextResponse } from 'next/server';
import { getContentstackData } from '@/lib/contentstack';
import { API_MESSAGES } from '@/config/messages';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const contentType = searchParams.get('contentType');
    
    if (!contentType) {
      return NextResponse.json(
        API_MESSAGES.errors.contentTypeRequired,
        { status: 400 }
      );
    }

    const data = await getContentstackData(contentType);
    
    return NextResponse.json(data);
  } catch (error) {
    // Log error for debugging (server-side only)
    console.error('Contentstack API error:', error);
    
    return NextResponse.json(
      API_MESSAGES.errors.serviceUnavailable,
      { status: 503 }
    );
  }
}

export async function POST() {
  try {
    // Handle content creation/update logic here
    // This would typically interact with Contentstack Management API
    
    return NextResponse.json({ success: true });
  } catch (error) {
    // Log error for debugging (server-side only)
    console.error('Contentstack API error:', error);
    
    return NextResponse.json(
      API_MESSAGES.errors.serviceUnavailable,
      { status: 503 }
    );
  }
} 