'use client';

import * as React from 'react';
import { Button } from '@foreveryours/shared';

export function ClientButtons() {
  return (
    <div className="space-x-4">
      <Button onClick={() => console.log('View Orders clicked')}>
        View Orders
      </Button>
      <Button 
        variant="secondary" 
        onClick={() => console.log('Account Settings clicked')}
      >
        Account Settings
      </Button>
    </div>
  );
} 