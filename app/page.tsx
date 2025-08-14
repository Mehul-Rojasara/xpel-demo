import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'XPEL - Paint Protection Film and Ceramic Coating',
  description: 'XPEL - Leading manufacturer of paint protection film and ceramic coating products',
  openGraph: {
    title: 'XPEL - Paint Protection Film and Ceramic Coating',
    description: 'XPEL - Leading manufacturer of paint protection film and ceramic coating products',
  },
};

export default function RootPage() {
  // This page will be handled by PathPersistence component
  // which will redirect to the last visited path or default
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">XPEL</h1>
        <p className="text-gray-600">Redirecting to your last visited page...</p>
      </div>
    </div>
  );
} 