import * as React from 'react';
import { ClientButtons } from './components/ClientButtons';

export default function CustomerPortalPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-sm rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4 text-gray-900">
          Customer Portal
        </h1>
        <p className="text-gray-600 mb-6">
          Welcome to the Forever Yours customer portal. Here you can manage your account and view your orders.
        </p>
        <ClientButtons />
      </div>
    </main>
  );
} 