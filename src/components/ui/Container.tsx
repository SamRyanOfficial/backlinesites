import { CSSProperties, ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}

export default function Container({ children, style, className }: ContainerProps) {
  return (
    <div className={['site-container', className].filter(Boolean).join(' ')} style={style}>
      {children}
    </div>
  );
}
