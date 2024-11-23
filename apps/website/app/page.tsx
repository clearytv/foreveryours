import * as React from 'react';
import type { ButtonProps } from '@foreveryours/shared';
import { Button } from '@foreveryours/shared';

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-sm rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4 text-gray-900">
          Forever Yours
        </h1>
        <p className="text-gray-600 mb-6">
          Welcome to Forever Yours. We specialize in creating lasting memories.
        </p>
        <div className="space-x-4">
          <Button variant="primary">Get Started</Button>
          <Button variant="secondary">Learn More</Button>
        </div>
      </div>
    </main>
  );
} 