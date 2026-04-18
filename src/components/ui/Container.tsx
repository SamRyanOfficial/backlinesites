import { CSSProperties, ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}

export default function Container({ children, style, className }: ContainerProps) {
  return (
    <div
      className={className}
      style={{
        maxWidth: 1240,
        margin: '0 auto',
        padding: '0 32px',
        ...style,
      }}
    >
      {children}
    </div>
  );
}
