'use client';

import Image from 'next/image';
import { useState } from 'react';
import { PORTFOLIO, PortfolioItem } from '@/lib/data';
import Container from './ui/Container';
import EditorialHeader, { Italic } from './ui/EditorialHeader';
import Button from './ui/Button';

/** Black field + diagonal red warning-style sign (no mini-site chrome). */
function PlaceholderWarningBanner({ label }: { label: string }) {
  const compact = label.length > 14;
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: '#000000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          transform: 'rotate(-45deg)',
          border: '4px solid #E53935',
          background: '#070707',
          padding: 'clamp(12px, 3vw, 20px) clamp(24px, 7vw, 56px)',
          boxShadow:
            '0 0 0 1px rgba(229, 57, 53, 0.4), 6px 6px 0 rgba(0, 0, 0, 0.75)',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--mono)',
            fontSize: compact ? 'clamp(9px, 2.6vw, 18px)' : 'clamp(11px, 3.2vw, 22px)',
            fontWeight: 700,
            letterSpacing: compact ? '0.14em' : '0.26em',
            color: '#FF5252',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
          }}
        >
          {label}
        </span>
      </div>
    </div>
  );
}

/** Real screenshot or abstract mini mockup */
function PortfolioPreview({
  p,
  previewContext = 'card',
}: {
  p: PortfolioItem;
  previewContext?: 'card' | 'modal';
}) {
  if (p.screenshot) {
    // Card ≈ half the work grid (~600px); modal can be ~1000px+ wide — size hints avoid loading a
    // tiny srcset slot then upscaling (blurry). A sharp file still needs ≥~1200px width @2x retina.
    const sizes =
      previewContext === 'modal'
        ? '(max-width: 900px) 95vw, min(1080px, 92vw)'
        : '(max-width: 900px) 100vw, min(600px, 50vw)';

    return (
      <Image
        src={p.screenshot}
        alt={`${p.band} — website screenshot`}
        fill
        sizes={sizes}
        quality={92}
        style={{
          objectFit: 'cover',
          objectPosition: p.screenshotPosition ?? 'center center',
        }}
        priority={
          p.id === 'copperskies' || p.id === 'midnightfizz' || p.id === 'joemac'
        }
      />
    );
  }
  if (p.placeholderPreview === 'warning-banner') {
    return (
      <PlaceholderWarningBanner label={p.placeholderBannerText ?? 'Coming soon'} />
    );
  }
  return <MiniSiteMockup p={p} />;
}

// Mini mockup of each band site using their palette
function MiniSiteMockup({ p }: { p: PortfolioItem }) {
  const [dark, light, cream] = p.palette;

  const headingFont =
    p.id === 'midnightfizz'
      ? "'DM Serif Display', serif"
      : "'Space Grotesk', sans-serif";

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: dark,
        color: cream,
        display: 'flex',
        flexDirection: 'column',
        padding: '16px 20px',
        fontFamily: 'var(--body)',
      }}
    >
      {/* fake nav */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: 9,
          letterSpacing: '0.1em',
          opacity: 0.7,
        }}
      >
        <span style={{ fontWeight: 700 }}>{p.band.toUpperCase()}</span>
        <span style={{ display: 'flex', gap: 10 }}>
          <span>ABOUT</span>
          <span>MUSIC</span>
          <span>SHOWS</span>
          <span>BOOK</span>
        </span>
      </div>

      {/* hero text */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 8,
        }}
      >
        <div
          style={{
            fontFamily: headingFont,
            fontSize: 'clamp(18px, 3vw, 34px)',
            lineHeight: 1.05,
            fontWeight: 500,
            letterSpacing: '-0.01em',
            maxWidth: '14ch',
          }}
        >
          {p.tagline}
        </div>
        <div style={{ fontSize: 10, opacity: 0.7, maxWidth: '24ch', lineHeight: 1.4, marginTop: 4 }}>
          {p.blurb.split('.')[0]}.
        </div>
        <div style={{ display: 'flex', gap: 6, marginTop: 8 }}>
          <div
            style={{
              padding: '4px 10px',
              background: light,
              color: dark,
              fontSize: 8,
              fontWeight: 600,
              borderRadius: 999,
              letterSpacing: '0.05em',
            }}
          >
            BOOK NOW →
          </div>
          <div
            style={{
              padding: '4px 10px',
              border: `1px solid ${cream}44`,
              fontSize: 8,
              fontWeight: 600,
              borderRadius: 999,
              letterSpacing: '0.05em',
            }}
          >
            WATCH LIVE
          </div>
        </div>
      </div>

      {/* stats strip */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: 8,
          paddingTop: 8,
          borderTop: `1px solid ${cream}22`,
          fontSize: 8,
        }}
      >
        {p.stats.map(([k, v]) => (
          <div key={v}>
            <div style={{ color: light, fontWeight: 600 }}>{k}</div>
            <div style={{ opacity: 0.5, letterSpacing: '0.08em', marginTop: 1 }}>
              {v.toUpperCase()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Portfolio card
function PortfolioCard({
  p,
  onOpen,
  col,
  aspect,
}: {
  p: PortfolioItem;
  onOpen: (p: PortfolioItem) => void;
  col: string;
  aspect: string;
}) {
  const [hover, setHover] = useState(false);
  const isHashLink = Boolean(p.linkToHash);
  const hoverHint = isHashLink ? 'Get in touch →' : 'View case →';
  const chipLabel = p.placeholder ? (p.placeholderChipText ?? 'Coming soon') : null;

  const shellStyle = {
    gridColumn: col,
    cursor: 'pointer' as const,
    display: 'flex' as const,
    flexDirection: 'column' as const,
    gap: 16,
    textDecoration: 'none' as const,
    color: 'inherit' as const,
  };

  const cardBody = (
    <>
      <div
        style={{
          aspectRatio: aspect,
          background: p.palette[0],
          color: p.palette[2],
          position: 'relative',
          overflow: 'hidden',
          border: '1px solid var(--rule)',
          transition: 'transform 0.4s ease',
          transform: hover ? 'translateY(-4px)' : 'none',
        }}
      >
        <PortfolioPreview p={p} />

        {/* hover overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `linear-gradient(to top, ${p.palette[0]}dd 0%, transparent 60%)`,
            opacity: hover ? 1 : 0,
            transition: 'opacity 0.3s',
            display: 'flex',
            alignItems: 'flex-end',
            padding: 24,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              fontFamily: 'var(--mono)',
              fontSize: 12,
              letterSpacing: '0.1em',
              color: p.palette[2],
            }}
          >
            <span>{hoverHint}</span>
          </div>
        </div>

        {chipLabel && (
          <div
            style={{
              position: 'absolute',
              top: 16,
              right: 16,
              padding: '5px 10px',
              background: p.palette[2],
              color: p.palette[0],
              fontFamily: 'var(--mono)',
              fontSize: 10,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
            }}
          >
            {chipLabel}
          </div>
        )}
      </div>

      <div
        className="portfolio-card-meta"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          gap: 16,
        }}
      >
        <div>
          <h3
            style={{
              fontFamily: 'var(--heading)',
              fontSize: 24,
              fontWeight: 'var(--display-weight)' as unknown as number,
              letterSpacing: 'var(--display-spacing)',
              margin: 0,
            }}
          >
            {p.band}
          </h3>
          <div style={{ marginTop: 4, fontSize: 13, color: 'var(--ink-soft)' }}>{p.genre}</div>
        </div>
        <div
          style={{
            fontFamily: 'var(--mono)',
            fontSize: 11,
            color: isHashLink ? 'var(--accent)' : 'var(--ink-faint)',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            flexShrink: 0,
          }}
        >
          {p.url}
        </div>
      </div>
    </>
  );

  if (isHashLink && p.linkToHash) {
    return (
      <a
        href={p.linkToHash}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={shellStyle}
        aria-label={`${p.band} — ${p.genre}. Go to contact to enquire.`}
      >
        {cardBody}
      </a>
    );
  }

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => onOpen(p)}
      style={{
        gridColumn: col,
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
      }}
    >
      {cardBody}
    </div>
  );
}

// Case detail modal
function CaseDetail({ p, onClose }: { p: PortfolioItem | null; onClose: () => void }) {
  if (!p) return null;

  return (
    <div
      className="case-modal-overlay"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        background: 'color-mix(in srgb, var(--ink) 70%, transparent)',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
        animation: 'fadeIn 0.25s ease',
      }}
      onClick={onClose}
    >
      <div
        className="case-modal-panel"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'var(--bg)',
          maxWidth: 1100,
          width: '100%',
          maxHeight: '90vh',
          overflow: 'auto',
          border: '1px solid var(--rule)',
          position: 'relative',
          animation: 'slideUp 0.3s ease',
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'sticky',
            top: 16,
            float: 'right',
            marginRight: 16,
            marginTop: 16,
            zIndex: 10,
            background: 'var(--bg-card)',
            border: '1px solid var(--rule)',
            width: 36,
            height: 36,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--ink)',
            fontSize: 18,
            cursor: 'pointer',
          }}
        >
          ×
        </button>

        {/* Hero */}
        <div
          className="case-modal-pad case-modal-header"
          style={{ padding: 56, paddingBottom: 32 }}
        >
          <div
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 12,
              color: 'var(--accent)',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              marginBottom: 20,
            }}
          >
            Case · {p.year}
          </div>
          <h2
            style={{
              fontFamily: 'var(--heading)',
              fontSize: 'clamp(40px, 6vw, 80px)',
              fontWeight: 'var(--display-weight)' as unknown as number,
              letterSpacing: 'var(--display-spacing)',
              lineHeight: 1,
              margin: 0,
            }}
          >
            {p.band}
          </h2>
          <div style={{ marginTop: 16, fontSize: 16, color: 'var(--ink-soft)' }}>
            {p.genre}
            {p.placeholder ? (
              <>
                {' '}
                ·{' '}
                <span style={{ color: 'var(--accent)' }}>{p.url}</span>
              </>
            ) : (
              <>
                {' '}
                ·{' '}
                <a
                  href={`https://${p.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'var(--accent)',
                    textDecoration: 'underline',
                    textUnderlineOffset: 3,
                  }}
                >
                  {p.url}
                </a>
              </>
            )}
          </div>
        </div>

        {/* Large preview */}
        <div className="case-modal-pad" style={{ padding: '0 56px' }}>
          <div
            style={{
              aspectRatio: '16/10',
              position: 'relative',
              overflow: 'hidden',
              background: p.palette[0],
              border: '1px solid var(--rule)',
            }}
          >
            <PortfolioPreview p={p} previewContext="modal" />
          </div>
        </div>

        {/* Details */}
        <div
          className="case-modal-pad case-modal-detail-grid"
          style={{
            padding: 56,
            paddingTop: 32,
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gap: 48,
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: 'var(--heading)',
                fontSize: 22,
                fontWeight: 'var(--display-weight)' as unknown as number,
                margin: '0 0 16px',
              }}
            >
              About the project
            </h3>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--ink-soft)', margin: 0 }}>
              {p.blurb}
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <MetaBlock label="Scope" value={p.scope} />
            <MetaBlock label="Year" value={p.year} />
            <div>
              <div
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: 11,
                  color: 'var(--ink-faint)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  marginBottom: 10,
                }}
              >
                Palette
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                {p.palette.map((c) => (
                  <div
                    key={c}
                    style={{
                      width: 36,
                      height: 36,
                      background: c,
                      border: '1px solid var(--rule)',
                    }}
                    title={c}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="case-modal-pad" style={{ padding: '0 56px 56px' }}>
          <div
            style={{
              height: 1,
              background: 'var(--rule)',
              marginBottom: 32,
            }}
          />
          <div
            className="case-modal-cta"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 16,
              flexWrap: 'wrap',
            }}
          >
            <div style={{ fontSize: 15, color: 'var(--ink-soft)', maxWidth: '40ch' }}>
              Want a site like this for your band? Start with a 20-min call.
            </div>
            <div className="case-modal-cta-btns" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              {!p.placeholder && (
                <Button href={`https://${p.url}`}>Visit live site</Button>
              )}
              <Button
                primary
                onClick={() => {
                  onClose();
                  setTimeout(() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
              >
                Start a project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MetaBlock({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div
        style={{
          fontFamily: 'var(--mono)',
          fontSize: 11,
          color: 'var(--ink-faint)',
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          marginBottom: 6,
        }}
      >
        {label}
      </div>
      <div style={{ fontSize: 14, color: 'var(--ink)', lineHeight: 1.4 }}>{value}</div>
    </div>
  );
}

const layouts = [
  { col: 'span 3', aspect: '4/3' },
  { col: 'span 3', aspect: '4/3' },
  { col: 'span 2', aspect: '3/4' },
  { col: 'span 2', aspect: '3/4' },
  { col: 'span 2', aspect: '3/4' },
];

export default function Portfolio() {
  const [activeCase, setActiveCase] = useState<PortfolioItem | null>(null);

  return (
    <>
      <section id="work" className="section-pad" style={{ padding: '120px 0' }}>
        <Container>
          <div
            className="split-intro"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.5fr',
              gap: 64,
              marginBottom: 64,
              alignItems: 'end',
            }}
          >
            <EditorialHeader eyebrow="Selected work">
              Sites that are <Italic>already gigging.</Italic>
            </EditorialHeader>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.6,
                color: 'var(--ink-soft)',
                maxWidth: '55ch',
                margin: 0,
              }}
            >
              Click any project to see the full case — design direction, what it does, and what it
              achieves for the band.
            </p>
          </div>

          <div
            className="portfolio-cards"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(6, 1fr)',
              gap: 24,
            }}
          >
            {PORTFOLIO.map((p, i) => {
              const layout = layouts[i] || { col: 'span 3', aspect: '4/3' };
              return (
                <PortfolioCard
                  key={p.id}
                  p={p}
                  onOpen={setActiveCase}
                  col={layout.col}
                  aspect={layout.aspect}
                />
              );
            })}
          </div>
        </Container>
      </section>

      <CaseDetail p={activeCase} onClose={() => setActiveCase(null)} />
    </>
  );
}
