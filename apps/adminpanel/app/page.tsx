import * as React from 'react';
import { ClientButton } from './components/ClientButton';

export default function HomePage() {
  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold mb-4">Admin Panel</h1>
      <ClientButton>
        Click me
      </ClientButton>
    </main>
  );
} 