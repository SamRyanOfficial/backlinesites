import { SERVICES, ServiceItem } from '@/lib/data';
import Container from './ui/Container';
import EditorialHeader, { Italic } from './ui/EditorialHeader';

function ServiceCard({ s }: { s: ServiceItem }) {
  return (
    <div
      style={{
        background: s.featured ? 'var(--ink)' : 'var(--bg-card)',
        color: s.featured ? 'var(--bg)' : 'var(--ink)',
        border: '1px solid var(--rule)',
        padding: '28px 32px 32px',
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        position: 'relative',
        minHeight: 520,
      }}
    >
      {/* Badge row */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          minHeight: 22,
          marginBottom: -8,
        }}
      >
        {s.featured && (
          <div
            style={{
              display: 'inline-block',
              fontFamily: 'var(--mono)',
              fontSize: 10,
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              color: 'var(--accent)',
              padding: '4px 8px',
              border: '1px solid var(--accent)',
              borderRadius: 2,
            }}
          >
            Most popular
          </div>
        )}
      </div>

      {/* Title block */}
      <div>
        <div
          style={{
            fontFamily: 'var(--mono)',
            fontSize: 11,
            textTransform: 'uppercase',
            letterSpacing: '0.18em',
            color: s.featured ? 'var(--accent)' : 'var(--ink-faint)',
            marginBottom: 10,
          }}
        >
          {s.sub}
        </div>
        <h3
          style={{
            fontFamily: 'var(--heading)',
            fontSize: 44,
            fontWeight: 'var(--display-weight)' as unknown as number,
            letterSpacing: 'var(--display-spacing)',
            margin: 0,
            lineHeight: 1.05,
          }}
        >
          {s.title}
        </h3>

        {/* Price */}
        {s.price && (
          <div
            style={{
              marginTop: 20,
              paddingTop: 20,
              borderTop: `1px solid ${s.featured ? 'rgba(255,255,255,0.1)' : 'var(--rule)'}`,
              display: 'flex',
              alignItems: 'baseline',
              gap: 10,
            }}
          >
            <span
              style={{
                fontFamily: 'var(--heading)',
                fontSize: 52,
                fontWeight: 'var(--display-weight)' as unknown as number,
                letterSpacing: 'var(--display-spacing)',
                lineHeight: 1,
                color: s.featured ? 'var(--accent)' : 'var(--ink)',
              }}
            >
              {s.price}
            </span>
            <span
              style={{
                fontFamily: 'var(--mono)',
                fontSize: 11,
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: s.featured
                  ? 'color-mix(in srgb, var(--bg) 65%, var(--ink))'
                  : 'var(--ink-faint)',
              }}
            >
              NZD · {s.priceUnit}
            </span>
          </div>
        )}
      </div>

      {/* Blurb */}
      <p
        style={{
          fontSize: 15,
          lineHeight: 1.55,
          margin: 0,
          color: s.featured
            ? 'color-mix(in srgb, var(--bg) 75%, var(--ink))'
            : 'var(--ink-soft)',
        }}
      >
        {s.blurb}
      </p>

      <div style={{ flex: 1 }} />

      {/* Includes list */}
      <ul
        style={{
          listStyle: 'none',
          padding: 0,
          margin: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          borderTop: `1px solid ${s.featured ? 'rgba(255,255,255,0.1)' : 'var(--rule)'}`,
          paddingTop: 20,
        }}
      >
        {s.includes.map((inc) => (
          <li
            key={inc}
            style={{
              fontSize: 13,
              display: 'flex',
              gap: 10,
              alignItems: 'center',
              color: s.featured
                ? 'color-mix(in srgb, var(--bg) 85%, var(--ink))'
                : 'var(--ink-soft)',
            }}
          >
            <span style={{ color: 'var(--accent)' }}>+</span>
            {inc}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      style={{
        padding: '120px 0',
        background: 'var(--bg-alt)',
        borderTop: '1px solid var(--rule)',
        borderBottom: '1px solid var(--rule)',
      }}
    >
      <Container>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.5fr',
            gap: 64,
            marginBottom: 64,
            alignItems: 'end',
          }}
        >
          <EditorialHeader eyebrow="What's on offer">
            Two ways <Italic>in.</Italic>
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
            Own it outright, or let me run it for you. Same quality build either way — pick
            whichever fits how you like to work.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 24,
            maxWidth: 1000,
            margin: '0 auto',
          }}
        >
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} s={s} />
          ))}
        </div>
      </Container>
    </section>
  );
}
