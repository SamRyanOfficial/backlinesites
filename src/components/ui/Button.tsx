import { CSSProperties, ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  primary?: boolean;
  small?: boolean;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  style?: CSSProperties;
}

function Arrow({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      style={{ flexShrink: 0 }}
    >
      <path
        d="M3 8H13M13 8L8 3M13 8L8 13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { Arrow };

export default function Button({
  children,
  primary,
  small,
  href,
  onClick,
  type = 'button',
  disabled,
  style,
}: ButtonProps) {
  const base: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    padding: small ? '10px 18px' : '16px 26px',
    fontSize: small ? 13 : 15,
    fontWeight: 600,
    fontFamily: 'var(--body)',
    borderRadius: 999,
    border: '1px solid',
    transition: 'all 0.2s ease',
    letterSpacing: '-0.005em',
    cursor: disabled ? 'not-allowed' : 'pointer',
    textDecoration: 'none',
  };

  const primaryStyle: CSSProperties = {
    background: 'var(--ink)',
    color: 'var(--bg)',
    borderColor: 'var(--ink)',
  };

  const ghostStyle: CSSProperties = {
    background: 'transparent',
    color: 'var(--ink)',
    borderColor: 'var(--ink)',
  };

  const merged: CSSProperties = { ...base, ...(primary ? primaryStyle : ghostStyle), ...style };

  if (href) {
    return (
      <a href={href} style={merged} onClick={onClick}>
        {children}
        <Arrow />
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} style={merged}>
      {children}
      <Arrow />
    </button>
  );
}
