import { useRef, CSSProperties } from 'react';
import { useCursor } from '../hooks';
import { EqBars } from '../components/EqBars';
import { OPTIX, YELLOW, BLACK } from '../data';

const mono: CSSProperties = {
  fontFamily: 'JetBrains Mono, monospace',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  fontSize: 11,
  fontWeight: 700,
};

export function Tablet() {
  const ref = useRef<HTMLDivElement>(null);
  const { x: cx, active } = useCursor(ref);

  return (
    <div
      ref={ref}
      style={{
        minHeight: '100vh',
        background: YELLOW,
        color: BLACK,
        fontFamily: "'Space Grotesk', sans-serif",
        overflowX: 'hidden',
      }}
    >
      {/* Top meta */}
      <div style={{
        borderBottom: `3px solid ${BLACK}`,
        padding: '14px 32px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <span style={mono}>OPTIX</span>
        <span style={mono}>{OPTIX.basedEN} · BPM {OPTIX.bpm}</span>
      </div>

      {/* Stacked OPTIX rows */}
      {(['OPTIX', 'OPTIX', 'OPTIX'] as const).map((word, i) => (
        <div
          key={i}
          style={{
            height: 200,
            position: 'relative',
            borderBottom: `3px solid ${BLACK}`,
            display: 'flex',
            alignItems: 'center',
            padding: '0 32px',
            overflow: 'hidden',
          }}
        >
          <div style={{
            fontFamily: "'Archivo Black', sans-serif",
            fontSize: 'clamp(80px, 25vw, 240px)',
            letterSpacing: '-0.06em',
            lineHeight: 0.86,
            color: i === 1 ? 'transparent' : BLACK,
            WebkitTextStroke: i === 1 ? `3px ${BLACK}` : 'none',
            userSelect: 'none',
          }}>
            {word}
          </div>
          <span style={{ ...mono, position: 'absolute', right: 14, top: 12 }}>
            {String(i + 1).padStart(2, '0')} / 03
          </span>
        </div>
      ))}

      {/* Tagline strip */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 32px',
        borderBottom: `3px solid ${BLACK}`,
      }}>
        <span style={mono}>▸ {OPTIX.tagEN}</span>
        <span style={{ ...mono, opacity: 0.65 }}>▸ {OPTIX.tagRU}</span>
      </div>

      {/* Two-column info */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        borderBottom: `3px solid ${BLACK}`,
      }}>
        {/* Left: signal + mix */}
        <div style={{ borderRight: `3px solid ${BLACK}`, padding: '18px 24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <span style={mono}>Signal</span>
            <span style={{ ...mono, opacity: 0.65 }}>{active ? '● LIVE' : '○ IDLE'}</span>
          </div>
          <div style={{ marginTop: 8 }}>
            <EqBars count={24} w={280} h={56} cursorX={cx} cursorActive={active} color={BLACK} />
          </div>

          <div style={{ marginTop: 18, paddingTop: 14, borderTop: `2px solid ${BLACK}` }}>
            <span style={mono}>Latest · {OPTIX.mix.num}</span>
            <div style={{
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: '-0.02em',
              marginTop: 4,
              lineHeight: 1,
            }}>
              {OPTIX.mix.title}
            </div>
            <span style={{ ...mono, opacity: 0.65 }}>{OPTIX.mix.length} · {OPTIX.mix.date}</span>
            <a
              href={`https://${OPTIX.mix.deck}`}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-block',
                border: `2px solid ${BLACK}`,
                padding: '8px 12px',
                marginTop: 10,
                fontFamily: 'JetBrains Mono, monospace',
                fontWeight: 700,
                fontSize: 11,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              ▸ Play · {OPTIX.mix.deck}
            </a>
          </div>
        </div>

        {/* Right: tour */}
        <div style={{ padding: '18px 24px' }}>
          <span style={mono}>Tour 2026</span>
          <ol style={{ listStyle: 'none', margin: '8px 0 0', padding: 0 }}>
            {OPTIX.gigs.map((g, i) => (
              <li
                key={g.d}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '20px 1fr auto',
                  gap: 10,
                  padding: '9px 0',
                  alignItems: 'baseline',
                  borderTop: i === 0 ? 'none' : '1px dashed rgba(0,0,0,0.3)',
                }}
              >
                <span style={{ ...mono, fontSize: 10 }}>0{i + 1}</span>
                <div style={{ fontSize: 14 }}>
                  <span style={{ fontWeight: 700 }}>{g.v}</span>
                  <span style={{ opacity: 0.7 }}> · {g.c}</span>
                </div>
                <span style={{ ...mono, fontSize: 11 }}>{g.d}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Channels */}
      <div style={{ padding: '16px 32px', borderBottom: `3px solid ${BLACK}` }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <span style={mono}>Channels</span>
          <span style={{ ...mono, opacity: 0.6 }}>04</span>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 16,
          marginTop: 8,
        }}>
          {OPTIX.socials.map((s) => (
            <a
              key={s.n}
              href={s.u}
              target="_blank"
              rel="noreferrer"
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              <span style={{ ...mono, fontSize: 10 }}>{s.n}</span>
              <span style={{ fontSize: 16, fontWeight: 700, marginTop: 2 }}>{s.h}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Bottom booking */}
      <div style={{
        padding: '14px 32px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <a href={`mailto:${OPTIX.booking}`} style={mono}>
          BOOKING ▸ {OPTIX.booking}
        </a>
        <span style={{ ...mono, opacity: 0.65 }}>EDITION 047 / 2026</span>
      </div>
    </div>
  );
}
