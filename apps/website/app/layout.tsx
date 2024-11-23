import * as React from 'react';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Forever Yours',
  description: 'Creating lasting memories',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 antialiased">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
} 