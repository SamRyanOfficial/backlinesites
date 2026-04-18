interface BacklineMarkProps {
  size?: number;
  color?: string;
}

export default function BacklineMark({ size = 24, color }: BacklineMarkProps) {
  const c = color || 'currentColor';
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      {/* amp cabinet */}
      <rect x="3" y="6" width="26" height="22" rx="2" stroke={c} strokeWidth="2" />
      {/* speaker circles */}
      <circle cx="11" cy="14" r="3" stroke={c} strokeWidth="1.5" />
      <circle cx="21" cy="14" r="3" stroke={c} strokeWidth="1.5" />
      {/* knobs */}
      <circle cx="9" cy="22" r="1" fill={c} />
      <circle cx="14" cy="22" r="1" fill={c} />
      <circle cx="19" cy="22" r="1" fill={c} />
      <circle cx="24" cy="22" r="1" fill={c} />
    </svg>
  );
}
