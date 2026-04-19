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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: menuOpen ? 160 : 100,
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
        <div className="nav-shell">
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
            className="type-heading"
            style={{
              fontWeight: 'var(--display-weight)' as unknown as number,
              fontSize: 18,
              letterSpacing: '-0.01em',
            }}
          >
              Backline<span style={{ color: 'var(--accent)' }}>.</span>
            </span>
          </a>

          <div className="nav-desktop-only">
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

          <button
            type="button"
            className="nav-burger"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? (
              <span style={{ fontSize: 22, lineHeight: 1 }} aria-hidden>
                ×
              </span>
            ) : (
              <span style={{ display: 'flex', flexDirection: 'column', gap: 5 }} aria-hidden>
                <span
                  style={{
                    width: 20,
                    height: 2,
                    background: 'var(--ink)',
                    borderRadius: 1,
                  }}
                />
                <span
                  style={{
                    width: 20,
                    height: 2,
                    background: 'var(--ink)',
                    borderRadius: 1,
                  }}
                />
                <span
                  style={{
                    width: 20,
                    height: 2,
                    background: 'var(--ink)',
                    borderRadius: 1,
                  }}
                />
              </span>
            )}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          className="nav-drawer-backdrop"
          role="presentation"
          onClick={closeMenu}
          onKeyDown={(e) => e.key === 'Escape' && closeMenu()}
        >
          <aside
            id="mobile-nav-drawer"
            className="nav-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            onClick={(e) => e.stopPropagation()}
          >
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={closeMenu}>
                {label}
              </a>
            ))}
            <div style={{ marginTop: 16 }}>
              <Button
                primary
                href="#contact"
                onClick={closeMenu}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Start a project
              </Button>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
