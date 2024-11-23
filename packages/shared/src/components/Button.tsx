'use client';

import React, { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: 'primary' | 'secondary';
  className?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button({ 
    children, 
    variant = 'primary',
    className = '',
    ...props 
  }, ref) {
    const variantStyles = {
      primary: 'bg-blue-500 hover:bg-blue-600 text-white',
      secondary: 'bg-gray-500 hover:bg-gray-600 text-white',
    } as const;

    return (
      <button
        ref={ref}
        type="button"
        className={`px-4 py-2 rounded ${variantStyles[variant]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button'; 