import { PROCESS } from '@/lib/data';
import Container from './ui/Container';
import EditorialHeader, { Italic } from './ui/EditorialHeader';

export default function Process() {
  return (
    <section id="process" style={{ padding: '120px 0' }}>
      <Container>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.5fr',
            gap: 64,
            marginBottom: 72,
            alignItems: 'end',
          }}
        >
          <EditorialHeader eyebrow="How it works">
            Four steps. <Italic>Clear &amp; simple.</Italic>
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
            No agency runaround. You talk to the person building the site. Start to finish in 1-2
            weeks.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 0,
            borderTop: '1px solid var(--rule)',
          }}
        >
          {PROCESS.map((p, i) => (
            <div
              key={p.n}
              style={{
                padding: '32px 24px 32px 0',
                borderRight:
                  i < PROCESS.length - 1 ? '1px solid var(--rule)' : 'none',
                paddingLeft: i === 0 ? 0 : 24,
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--heading)',
                  fontSize: 42,
                  fontWeight: 'var(--display-weight)' as unknown as number,
                  margin: '0 0 20px',
                  letterSpacing: 'var(--display-spacing)',
                  color: 'var(--ink)',
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.6,
                  color: 'var(--ink-soft)',
                  margin: 0,
                }}
              >
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
