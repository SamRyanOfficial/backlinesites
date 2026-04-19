'use client';

import { useState } from 'react';
import { FAQ as FAQ_DATA } from '@/lib/data';
import Container from './ui/Container';
import EditorialHeader, { Italic } from './ui/EditorialHeader';

export default function FAQ() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section
      id="faq"
      className="section-pad"
      style={{
        padding: '120px 0',
        background: 'var(--bg-alt)',
        borderTop: '1px solid var(--rule)',
      }}
    >
      <Container>
        <div
          className="faq-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.5fr',
            gap: 80,
            alignItems: 'start',
          }}
        >
          {/* Left */}
          <div>
            <EditorialHeader eyebrow="The details">
              Common <Italic>questions.</Italic>
            </EditorialHeader>
            <p style={{ color: 'var(--ink-soft)', fontSize: 15, lineHeight: 1.6, maxWidth: '38ch' }}>
              Still got questions?{' '}
              <a
                href="#contact"
                style={{
                  color: 'var(--accent)',
                  textDecoration: 'underline',
                  textUnderlineOffset: 3,
                }}
              >
                Send me a message
              </a>{' '}
              — I reply within a day.
            </p>
          </div>

          {/* Right: accordion */}
          <div>
            {FAQ_DATA.map((item, i) => (
              <div
                key={i}
                style={{
                  borderTop: '1px solid var(--rule)',
                  borderBottom:
                    i === FAQ_DATA.length - 1 ? '1px solid var(--rule)' : 'none',
                }}
              >
                <button
                  type="button"
                  className="faq-trigger"
                  onClick={() => setOpen(open === i ? -1 : i)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '24px 0',
                    background: 'transparent',
                    border: 'none',
                    textAlign: 'left',
                    color: 'var(--ink)',
                    cursor: 'pointer',
                  }}
                >
                  <span
                    className="faq-question type-heading"
                    style={{
                      fontSize: 22,
                      fontWeight: 'var(--display-weight)' as unknown as number,
                      letterSpacing: 'var(--display-spacing)',
                    }}
                  >
                    {item.q}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--mono)',
                      fontSize: 20,
                      color: 'var(--accent)',
                      transition: 'transform 0.2s',
                      transform: open === i ? 'rotate(45deg)' : 'none',
                      flexShrink: 0,
                      marginLeft: 16,
                    }}
                  >
                    +
                  </span>
                </button>
                <div
                  style={{
                    maxHeight: open === i ? 2000 : 0,
                    overflow: 'hidden',
                    transition: 'max-height 0.35s ease',
                  }}
                >
                  <div
                    style={{
                      padding: '0 0 24px',
                      fontSize: 16,
                      lineHeight: 1.6,
                      color: 'var(--ink-soft)',
                      maxWidth: '60ch',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 14,
                    }}
                  >
                    {item.a
                      .split(/\n\n+/)
                      .map((para) => para.trim())
                      .filter(Boolean)
                      .map((para, j) => (
                        <p key={j} style={{ margin: 0 }}>
                          {para}
                        </p>
                      ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
