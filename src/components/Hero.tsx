import Container from './ui/Container';
import Button from './ui/Button';

const HEADLINE = 'Websites that book more gigs.';
const ITALIC_WORD = 'book';

function ItalicHeadline({ headline, italicWord }: { headline: string; italicWord: string }) {
  const regex = new RegExp(`\\b(${italicWord})\\b`, 'i');
  const parts = headline.split(regex);

  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <span key={i} style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

const stats = [
  ['1-2 wks', 'Live and booking'],
  ['100%', 'Built by a gigging musician'],
  ['NZ · AU', 'Where my clients are'],
] as const;

export default function Hero() {
  return (
    <section
      id="top"
      style={{
        position: 'relative',
        paddingTop: 'calc(var(--nav-h) + 64px)',
        paddingBottom: 80,
      }}
    >
      <div
        className="hero-bg"
        style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
      />

      <Container>
        {/* Eyebrow */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            marginBottom: 36,
            fontFamily: 'var(--mono)',
            fontSize: 12,
            textTransform: 'uppercase',
            letterSpacing: '0.18em',
            color: 'var(--ink-soft)',
          }}
        >
          <span
            style={{
              display: 'inline-block',
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: 'var(--accent)',
              boxShadow: '0 0 12px var(--accent)',
            }}
          />
          <span>NOW BOOKING SUMMER &apos;26 — LIMITED SPOTS</span>
          <span style={{ color: 'var(--rule)' }}>·</span>
          <span>Based in Aotearoa, NZ</span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: 'var(--heading)',
            fontWeight: 'var(--display-weight)' as unknown as number,
            fontSize: 'clamp(56px, 9vw, 132px)',
            lineHeight: 0.96,
            letterSpacing: 'var(--display-spacing)',
            margin: 0,
            maxWidth: '15ch',
            color: 'var(--ink)',
          }}
        >
          <ItalicHeadline headline={HEADLINE} italicWord={ITALIC_WORD} />
        </h1>

        {/* Sub copy + CTAs */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: 48,
            alignItems: 'end',
            marginTop: 56,
            maxWidth: 1100,
          }}
        >
          <p
            style={{
              fontSize: 20,
              lineHeight: 1.5,
              color: 'var(--ink-soft)',
              maxWidth: '48ch',
              margin: 0,
              fontWeight: 400,
            }}
          >
            Built by a musician who knows what actually gets you booked
          </p>
          <div style={{ display: 'flex', gap: 12 }}>
            <Button primary href="#contact">
              Book More Gigs
            </Button>
            <Button href="#work">See the work</Button>
          </div>
        </div>

        {/* Stats strip */}
        <div
          style={{
            marginTop: 96,
            paddingTop: 32,
            borderTop: '1px solid var(--rule)',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 32,
          }}
        >
          {stats.map(([k, v]) => (
            <div key={v}>
              <div
                style={{
                  fontFamily: 'var(--heading)',
                  fontSize: 42,
                  fontWeight: 'var(--display-weight)' as unknown as number,
                  letterSpacing: 'var(--display-spacing)',
                  color: 'var(--ink)',
                  lineHeight: 1,
                }}
              >
                {k}
              </div>
              <div
                style={{
                  marginTop: 10,
                  fontSize: 13,
                  color: 'var(--ink-soft)',
                  fontFamily: 'var(--mono)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}
              >
                {v}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
