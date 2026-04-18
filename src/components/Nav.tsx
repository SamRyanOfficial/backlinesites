'use client';

import { useState, useEffect } from 'react';
import BacklineMark from './ui/BacklineMark';
import Button from './ui/Button';

const links = [
  ['Work', '#work'],
  ['Services', '#services'],
  ['Process', '#process'],
  ['About', '#about'],
  ['FAQ', '#faq'],
] as const;

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: 'var(--nav-h)',
        background: scrolled
          ? 'color-mix(in srgb, var(--bg) 92%, transparent)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled
          ? '1px solid var(--rule)'
          : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}
    >
      <div
        style={{
          maxWidth: 1240,
          margin: '0 auto',
          padding: '0 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100%',
        }}
      >
        <a
          href="#top"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            color: 'var(--ink)',
          }}
        >
          <BacklineMark size={22} />
          <span
            style={{
              fontFamily: 'var(--heading)',
              fontWeight: 600,
              fontSize: 18,
              letterSpacing: '-0.01em',
            }}
          >
            Backline<span style={{ color: 'var(--accent)' }}>.</span>
          </span>
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: 'var(--ink-soft)',
              }}
            >
              {label}
            </a>
          ))}
          <Button primary small href="#contact">
            Start a project
          </Button>
        </div>
      </div>
    </nav>
  );
}
