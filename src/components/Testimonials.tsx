import { TESTIMONIALS } from '@/lib/data';
import Container from './ui/Container';
import EditorialHeader, { Italic } from './ui/EditorialHeader';

export default function Testimonials() {
  return (
    <section
      style={{
        padding: '120px 0',
        background: 'var(--bg-alt)',
        borderTop: '1px solid var(--rule)',
        borderBottom: '1px solid var(--rule)',
      }}
    >
      <Container>
        <EditorialHeader eyebrow="What bands say">
          Client <Italic>reviews.</Italic>
        </EditorialHeader>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 32,
          }}
        >
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={i}
              style={{ margin: 0, display: 'flex', flexDirection: 'column', gap: 24 }}
            >
              <div
                style={{
                  fontFamily: 'var(--heading)',
                  fontSize: 56,
                  lineHeight: 0.5,
                  color: 'var(--accent)',
                  height: 24,
                }}
              >
                &ldquo;
              </div>
              <blockquote
                style={{
                  margin: 0,
                  fontFamily: 'var(--heading)',
                  fontSize: 22,
                  lineHeight: 1.3,
                  fontWeight: 400,
                  letterSpacing: '-0.01em',
                  color: 'var(--ink)',
                  fontStyle: 'italic',
                }}
              >
                {t.quote}
              </blockquote>
              <figcaption
                style={{
                  marginTop: 'auto',
                  paddingTop: 16,
                  borderTop: '1px solid var(--rule)',
                }}
              >
                <div style={{ fontSize: 14, fontWeight: 600 }}>{t.name}</div>
                <div
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: 11,
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                    color: 'var(--ink-faint)',
                    marginTop: 4,
                  }}
                >
                  {t.band}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
