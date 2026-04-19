'use client';

import { useState, CSSProperties } from 'react';
import Container from './ui/Container';
import { Arrow } from './ui/Button';

interface FormData {
  bandName: string;
  contactName: string;
  email: string;
  musicLink: string;
  socials: string;
  project: string;
}

const inputBase: CSSProperties = {
  width: '100%',
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid color-mix(in srgb, var(--bg) 20%, var(--ink))',
  color: 'var(--bg)',
  padding: '12px 0',
  fontSize: 16,
  outline: 'none',
  fontFamily: 'var(--body)',
  resize: 'vertical',
};

const primaryBtnStyle: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 10,
  padding: '14px 24px',
  borderRadius: 999,
  background: 'var(--accent)',
  color: 'var(--ink)',
  border: '1px solid var(--accent)',
  fontWeight: 600,
  fontSize: 14,
  fontFamily: 'var(--body)',
  cursor: 'pointer',
};

const ghostBtnStyle: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  padding: '14px 20px',
  borderRadius: 999,
  background: 'transparent',
  color: 'var(--bg)',
  border: '1px solid color-mix(in srgb, var(--bg) 25%, var(--ink))',
  fontWeight: 500,
  fontSize: 14,
  cursor: 'pointer',
  fontFamily: 'var(--body)',
};

function Field({
  label,
  required,
  hint,
  children,
}: {
  label: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div
        style={{
          fontFamily: 'var(--mono)',
          fontSize: 11,
          color: 'color-mix(in srgb, var(--bg) 55%, var(--ink))',
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
        }}
      >
        {label} {required && <span style={{ color: 'var(--accent)' }}>*</span>}
      </div>
      {children}
      {hint && (
        <div
          style={{
            fontSize: 12,
            color: 'color-mix(in srgb, var(--bg) 45%, var(--ink))',
            lineHeight: 1.5,
          }}
        >
          {hint}
        </div>
      )}
    </label>
  );
}

function ContactLine({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div>
      <div
        style={{
          fontFamily: 'var(--mono)',
          fontSize: 10,
          color: 'color-mix(in srgb, var(--bg) 45%, var(--ink))',
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          marginBottom: 4,
        }}
      >
        {label}
      </div>
      <div style={{ fontSize: 16, color: 'var(--bg)' }}>{value}</div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}

function Thanks({ onReset }: { onReset: () => void }) {
  return (
    <div
      className="thanks-panel"
      style={{
        minHeight: 460,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--mono)',
          fontSize: 12,
          color: 'var(--accent)',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          marginBottom: 20,
        }}
      >
        Brief received
      </div>
      <h3
        style={{
          fontFamily: 'var(--heading)',
          fontSize: 'clamp(32px, 4vw, 48px)',
          fontWeight: 'var(--display-weight)' as unknown as number,
          letterSpacing: 'var(--display-spacing)',
          margin: 0,
          lineHeight: 1.05,
        }}
      >
        Thanks — I&apos;ll be in{' '}
        <span className="display-emphasis display-emphasis--accent">touch</span>.
      </h3>
      <p
        style={{
          marginTop: 20,
          fontSize: 16,
          lineHeight: 1.6,
          color: 'color-mix(in srgb, var(--bg) 70%, var(--ink))',
          maxWidth: '42ch',
        }}
      >
        I&apos;ll reply within 24 hours with a direction, a rough price, and a time for a call if
        it&apos;s a fit.
      </p>
      <div style={{ marginTop: 32 }}>
        <button onClick={onReset} style={ghostBtnStyle}>
          Send another
        </button>
      </div>
    </div>
  );
}

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState<FormData>({
    bandName: '',
    contactName: '',
    email: '',
    musicLink: '',
    socials: '',
    project: '',
  });

  const update = (k: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const canSubmit =
    Boolean(form.bandName.trim()) &&
    Boolean(form.contactName.trim()) &&
    form.email.includes('@') &&
    form.project.trim().length > 20;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSent(true);
      }
    } catch {
      // still show thanks — fail gracefully
      setSent(true);
    } finally {
      setSubmitting(false);
    }
  };

  const reset = () => {
    setSent(false);
    setForm({ bandName: '', contactName: '', email: '', musicLink: '', socials: '', project: '' });
  };

  return (
    <section
      id="contact"
      className="section-pad-contact"
      style={{
        padding: '140px 0 120px',
        background: 'var(--ink)',
        color: 'var(--bg)',
      }}
    >
      <Container>
        <div
          className="contact-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.4fr',
            gap: 80,
            alignItems: 'start',
          }}
        >
          {/* Left: context */}
          <div className="contact-sticky" style={{ position: 'sticky', top: 'calc(var(--nav-h) + 32px)' }}>
            <div
              style={{
                fontFamily: 'var(--mono)',
                fontSize: 12,
                textTransform: 'uppercase',
                letterSpacing: '0.18em',
                color: 'var(--accent)',
                marginBottom: 20,
              }}
            >
              Let&apos;s talk
            </div>
            <h2
              style={{
                fontFamily: 'var(--heading)',
                fontSize: 'clamp(40px, 5.5vw, 80px)',
                fontWeight: 'var(--display-weight)' as unknown as number,
                letterSpacing: 'var(--display-spacing)',
                lineHeight: 0.98,
                margin: 0,
              }}
            >
              Tell me about{' '}
              <span className="display-emphasis display-emphasis--accent">your band.</span>
            </h2>
            <p
              style={{
                marginTop: 28,
                fontSize: 17,
                lineHeight: 1.6,
                color: 'color-mix(in srgb, var(--bg) 70%, var(--ink))',
                maxWidth: '42ch',
              }}
            >
              A quick brief is all I need. I&apos;ll reply within a day.
            </p>

            <div
              style={{
                marginTop: 48,
                display: 'flex',
                flexDirection: 'column',
                gap: 18,
              }}
            >
              <ContactLine
                label="Email"
                value="backlinesites@gmail.com"
                href="mailto:backlinesites@gmail.com"
              />
              <ContactLine label="Phone" value="+64 20 4091 7577" href="tel:+6420409177" />
              <ContactLine label="Based in" value="Bay of Plenty, NZ" />
            </div>
          </div>

          {/* Right: form */}
          <div
            className="contact-form-panel"
            style={{
              background: 'color-mix(in srgb, var(--bg) 8%, var(--ink))',
              border: '1px solid color-mix(in srgb, var(--bg) 15%, var(--ink))',
              padding: 40,
              minHeight: 540,
            }}
          >
            {sent ? (
              <Thanks onReset={reset} />
            ) : (
              <form onSubmit={submit}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                  <Field label="Band or artist name" required>
                    <input
                      style={inputBase}
                      value={form.bandName}
                      onChange={update('bandName')}
                      placeholder="e.g. Copper Skies"
                    />
                  </Field>
                  <div
                    className="contact-name-email-grid"
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: 24,
                    }}
                  >
                    <Field label="Your name" required>
                      <input
                        style={inputBase}
                        value={form.contactName}
                        onChange={update('contactName')}
                        placeholder="Sam"
                      />
                    </Field>
                    <Field label="Email" required>
                      <input
                        style={inputBase}
                        type="email"
                        value={form.email}
                        onChange={update('email')}
                        placeholder="sam@band.com"
                      />
                    </Field>
                  </div>
                  <Field
                    label="Link to your music"
                    hint="Spotify, Bandcamp, SoundCloud, YouTube — whatever's current"
                  >
                    <input
                      style={inputBase}
                      value={form.musicLink}
                      onChange={update('musicLink')}
                      placeholder="https://open.spotify.com/artist/..."
                    />
                  </Field>
                  <Field
                    label="Socials / existing website"
                    hint="Optional. Instagram, existing site, Linktree, anything."
                  >
                    <textarea
                      style={inputBase}
                      value={form.socials}
                      onChange={update('socials')}
                      placeholder={`@yourband on Instagram\nyourband.bandcamp.com`}
                      rows={3}
                    />
                  </Field>
                  <Field
                    label="Tell me about your project"
                    required
                    hint="The more you tell me, the better. What's working, what's not, what it needs to do for you."
                  >
                    <textarea
                      style={inputBase}
                      value={form.project}
                      onChange={update('project')}
                      rows={8}
                      placeholder={`We're a 4-piece from Wellington. Currently we don't have a site — just a Linktree. We want bookers and venues to take us more seriously and make it easy to get in touch...`}
                    />
                  </Field>
                </div>

                <div
                  className="contact-form-controls"
                  style={{
                    marginTop: 40,
                    paddingTop: 24,
                    borderTop:
                      '1px solid color-mix(in srgb, var(--bg) 12%, var(--ink))',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: 16,
                  }}
                >
                  <button
                    type="submit"
                    disabled={!canSubmit || submitting}
                    style={{
                      ...primaryBtnStyle,
                      opacity: canSubmit && !submitting ? 1 : 0.4,
                      cursor: canSubmit && !submitting ? 'pointer' : 'not-allowed',
                    }}
                  >
                    {submitting ? 'Sending…' : 'Send brief'} <Arrow />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
