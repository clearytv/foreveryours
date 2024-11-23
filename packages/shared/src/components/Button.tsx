'use client';

import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary' 
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded ${
        variant === 'primary' 
          ? 'bg-blue-500 text-white hover:bg-blue-600' 
          : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
      } transition-colors`}
    >
      {children}
    </button>
  );
}; 