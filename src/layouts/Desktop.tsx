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

export function Desktop() {
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
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Top meta bar */}
      <div style={{
        borderBottom: `3px solid ${BLACK}`,
        padding: '14px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexShrink: 0,
      }}>
        <span style={mono}>OPTIX</span>
        <span style={mono}>OPTIX × OPTIX × OPTIX × OPTIX</span>
        <span style={mono}>{OPTIX.basedEN} · BPM {OPTIX.bpm}</span>
      </div>

      {/* Main area */}
      <div style={{ flex: 1, display: 'flex', minHeight: 0 }}>
        {/* Stacked OPTIX rows */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {(['OPTIX', 'OPTIX', 'OPTIX'] as const).map((word, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                position: 'relative',
                borderBottom: i < 2 ? `3px solid ${BLACK}` : 'none',
                display: 'flex',
                alignItems: 'center',
                padding: '0 40px',
                overflow: 'hidden',
              }}
            >
              <div style={{
                fontFamily: "'Archivo Black', sans-serif",
                fontSize: 'clamp(120px, 18vw, 240px)',
                letterSpacing: '-0.06em',
                lineHeight: 0.86,
                color: i === 1 ? 'transparent' : BLACK,
                WebkitTextStroke: i === 1 ? `3px ${BLACK}` : 'none',
                userSelect: 'none',
              }}>
                {word}
              </div>
              <span style={{
                ...mono,
                position: 'absolute',
                right: 12,
                top: 12,
              }}>
                {String(i + 1).padStart(2, '0')} / 03
              </span>
            </div>
          ))}
        </div>

        {/* Right stub */}
        <aside style={{
          width: 340,
          flexShrink: 0,
          borderLeft: `3px solid ${BLACK}`,
          padding: '20px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: 18,
          overflowY: 'auto',
        }}>
          {/* Tag */}
          <div>
            <span style={mono}>{OPTIX.tagEN}</span><br />
            <span style={{ ...mono, opacity: 0.65 }}>{OPTIX.tagRU}</span>
          </div>

          {/* Signal */}
          <div style={{ borderTop: `2px solid ${BLACK}`, paddingTop: 12 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span style={mono}>Signal</span>
              <span style={{ ...mono, opacity: 0.65 }}>{active ? '● LIVE' : '○ IDLE'}</span>
            </div>
            <div style={{ marginTop: 8 }}>
              <EqBars count={26} w={292} h={64} cursorX={cx} cursorActive={active} color={BLACK} />
            </div>
          </div>

          {/* Latest mix */}
          <div style={{ borderTop: `2px solid ${BLACK}`, paddingTop: 12 }}>
            <span style={mono}>Latest · {OPTIX.mix.num}</span>
            <div style={{
              fontSize: 26,
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
                padding: '6px 10px',
                marginTop: 8,
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

          {/* Tour */}
          <div style={{ borderTop: `2px solid ${BLACK}`, paddingTop: 12 }}>
            <span style={mono}>Tour 2026</span>
            <ol style={{ listStyle: 'none', margin: '6px 0 0', padding: 0 }}>
              {OPTIX.gigs.map((g, i) => (
                <li
                  key={g.d}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '14px 1fr auto',
                    gap: 8,
                    padding: '5px 0',
                    alignItems: 'baseline',
                    borderTop: i === 0 ? 'none' : '1px dashed rgba(0,0,0,0.25)',
                  }}
                >
                  <span style={{ ...mono, fontSize: 9 }}>0{i + 1}</span>
                  <div style={{ fontSize: 12 }}>
                    <span style={{ fontWeight: 700 }}>{g.v}</span>
                    <span style={{ opacity: 0.7 }}> · {g.c}</span>
                  </div>
                  <span style={{ ...mono, fontSize: 10 }}>{g.d}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Channels */}
          <div style={{ borderTop: `2px solid ${BLACK}`, paddingTop: 12, marginTop: 'auto' }}>
            <span style={mono}>Channels</span>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '6px 16px',
              marginTop: 6,
            }}>
              {OPTIX.socials.map((s) => (
                <a
                  key={s.n}
                  href={s.u}
                  target="_blank"
                  rel="noreferrer"
                  style={{ display: 'flex', flexDirection: 'column' }}
                >
                  <span style={{ ...mono, fontSize: 9 }}>{s.n}</span>
                  <span style={{ fontSize: 13, fontWeight: 700 }}>{s.h}</span>
                </a>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: `3px solid ${BLACK}`,
        padding: '14px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexShrink: 0,
      }}>
        <a href={`mailto:${OPTIX.booking}`} style={mono}>
          BOOKING ▸ {OPTIX.booking}
        </a>
        <span style={{ ...mono, opacity: 0.65 }}>EST. 2019 · RESIDENT · S04</span>
        <span style={mono}>EDITION 047 / 2026</span>
      </div>
    </div>
  );
}
