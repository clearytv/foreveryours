'use client';

import * as React from 'react';
import { Button } from '@foreveryours/shared';

interface ClientButtonProps {
  children: React.ReactNode;
}

export function ClientButton({ children }: ClientButtonProps) {
  return (
    <div className="space-x-4">
      <Button 
        variant="primary"
        onClick={() => console.log('View Orders clicked')}
      >
        {children}
      </Button>
    </div>
  );
} 