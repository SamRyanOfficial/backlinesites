import Image from 'next/image';
import Container from './ui/Container';
import EditorialHeader, { Italic } from './ui/EditorialHeader';

export default function About() {
  return (
    <section id="about" style={{ padding: '140px 0' }}>
      <Container>
        <div
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
                style={{
                  margin: '16px 0 0',
                  fontFamily: 'var(--heading)',
                  fontSize: 22,
                  fontStyle: 'italic',
                  color: 'var(--ink)',
                  fontWeight: 400,
                }}
              >
                Built for musicians, by someone in the industry.
              </p>
            </div>
          </div>

          {/* Right: photo grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 16,
            }}
          >
            {/* Profile — spans 2 rows */}
            <div
              style={{
                gridRow: 'span 2',
                overflow: 'hidden',
                border: '1px solid var(--rule)',
                position: 'relative',
                minHeight: 400,
              }}
            >
              <Image
                src="/images/profile.jpg"
                alt="Sam Fisher — Backline Sites"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 300px"
              />
            </div>

            {/* Second photo */}
            <div
              style={{
                overflow: 'hidden',
                border: '1px solid var(--rule)',
                position: 'relative',
                minHeight: 190,
              }}
            >
              <Image
                src="/images/with-band.jpg"
                alt="On stage"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 200px"
              />
            </div>

            {/* Third photo */}
            <div
              style={{
                overflow: 'hidden',
                border: '1px solid var(--rule)',
                position: 'relative',
                minHeight: 190,
              }}
            >
              <Image
                src="/images/live-performance.jpg"
                alt="Live performance"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 200px"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
