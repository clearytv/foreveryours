import * as React from 'react';
import { ClientButtons } from './components/ClientButtons';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold mb-4">Customer Portal</h1>
      </div>

      <div className="relative flex place-items-center">
        <p className="text-xl mb-8">
          Welcome to the Forever Yours customer portal. Here you can manage your account and view your orders.
        </p>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-1 lg:text-left">
        <ClientButtons />
      </div>
    </main>
  );
} 