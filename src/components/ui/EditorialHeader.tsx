import { ReactNode } from 'react';

interface EditorialHeaderProps {
  eyebrow?: string;
  children: ReactNode;
  className?: string;
}

export default function EditorialHeader({ eyebrow, children, className }: EditorialHeaderProps) {
  return (
    <div
      className={['editorial-header', className].filter(Boolean).join(' ')}
      style={{ marginBottom: 48 }}
    >
      {eyebrow && (
        <div
          style={{
            fontFamily: 'var(--mono)',
            fontSize: 12,
            textTransform: 'uppercase',
            letterSpacing: '0.18em',
            color: 'var(--accent)',
            marginBottom: 16,
          }}
        >
          {eyebrow}
        </div>
      )}
      <h2
        style={{
          fontFamily: 'var(--heading)',
          fontWeight: 'var(--display-weight)' as unknown as number,
          fontSize: 'clamp(36px, 5vw, 64px)',
          lineHeight: 1.02,
          letterSpacing: 'var(--display-spacing)',
          margin: 0,
          color: 'var(--ink)',
        }}
      >
        {children}
      </h2>
    </div>
  );
}

export function Italic({ children }: { children: ReactNode }) {
  return (
    <span className="display-emphasis" style={{ fontWeight: 'inherit' }}>
      {children}
    </span>
  );
}
