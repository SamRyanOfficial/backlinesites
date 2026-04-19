import Image from 'next/image';
import Container from './ui/Container';
import EditorialHeader, { Italic } from './ui/EditorialHeader';

export default function About() {
  return (
    <section id="about" className="section-pad" style={{ padding: '140px 0' }}>
      <Container>
        <div
          className="about-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.2fr',
            gap: 80,
            alignItems: 'start',
          }}
        >
          {/* Left: copy */}
          <div>
            <EditorialHeader eyebrow="Who's behind this">
              Built by a working <Italic>musician.</Italic>
            </EditorialHeader>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
                fontSize: 17,
                lineHeight: 1.65,
                color: 'var(--ink-soft)',
                maxWidth: '52ch',
              }}
            >
              <p style={{ margin: 0 }}>
                Backline Sites was built by a working musician, not a web agency.
              </p>
              <p style={{ margin: 0 }}>
                After years of playing gigs around New Zealand, I kept seeing the same thing: great
                acts missing out on bookings because their websites didn&apos;t show how good they
                actually are.
              </p>
              <p style={{ margin: 0 }}>So I started building better ones.</p>
              <p style={{ margin: 0 }}>
                Simple, clean, and designed to turn visitors into enquiries — no fluff, no
                overcomplicated nonsense. Just websites that actually help you get more gigs.
              </p>
              <p
                className="type-heading"
                style={{
                  margin: '16px 0 0',
                  fontSize: 22,
                  color: 'var(--ink)',
                  fontWeight: 400,
                  fontStyle: 'normal',
                }}
              >
                Built for musicians, by someone in the industry.
              </p>
            </div>
          </div>

          {/* Right: portrait */}
          <div className="about-portrait">
            <Image
              src="/images/profile.jpg"
              alt="Sam Fisher — Backline Sites"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center center' }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 480px"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
