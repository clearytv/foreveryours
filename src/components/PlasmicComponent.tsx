import { PlasmicRootProvider } from '@plasmicapp/react-web';

interface MyComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export function MyComponent(props: MyComponentProps) {
  const { className, children, ...rest } = props;
  
  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
} 