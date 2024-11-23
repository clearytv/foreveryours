import * as React from 'react';
import { Button } from '@foreveryours/shared';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold mb-4">Forever Yours</h1>
      </div>

      <div className="relative flex place-items-center">
        <p className="text-xl">
          Welcome to Forever Yours. We specialize in creating lasting memories.
        </p>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left gap-4">
        <Button variant="primary">Get Started</Button>
        <Button variant="secondary">Learn More</Button>
      </div>
    </main>
  );
} 