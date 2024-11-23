interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  // ... any other props
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary',
  className,
  ...props 
}) => {
  const variantStyles = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white',
    secondary: 'bg-gray-500 hover:bg-gray-600 text-white',
  };

  return (
    <button
      className={`px-4 py-2 rounded ${variantStyles[variant]} ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  );
};

export type { ButtonProps }; 