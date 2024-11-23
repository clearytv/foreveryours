'use client';

import * as React from 'react';
import { Button } from '@foreveryours/shared';

interface ClientButtonProps {
  children: React.ReactNode;
}

export function ClientButton({ children }: ClientButtonProps) {
  const handleClick = React.useCallback(() => {
    console.log('clicked');
  }, []);

  return (
    <Button onClick={handleClick}>
      {children}
    </Button>
  );
} 