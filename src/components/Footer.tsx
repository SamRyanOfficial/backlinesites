import Container from './ui/Container';
import BacklineMark from './ui/BacklineMark';

export default function Footer() {
  return (
    <footer
      style={{
        padding: '48px 0 32px',
        background: 'var(--bg)',
        borderTop: '1px solid var(--rule)',
      }}
    >
      <Container
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 16,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <BacklineMark size={20} />
          <span
            style={{
              fontFamily: 'var(--heading)',
              fontWeight: 600,
              fontSize: 16,
            }}
          >
            Backline<span style={{ color: 'var(--accent)' }}>.</span>
          </span>
          <span
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 11,
              color: 'var(--ink-faint)',
              marginLeft: 8,
            }}
          >
            © 2026 · NZ
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            gap: 24,
            fontSize: 13,
            color: 'var(--ink-soft)',
          }}
        >
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
          <a
            href="mailto:backlinesites@gmail.com"
            style={{ color: 'var(--ink-soft)' }}
          >
            backlinesites@gmail.com
          </a>
        </div>
      </Container>
    </footer>
  );
}
