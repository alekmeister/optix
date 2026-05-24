import { useRef, CSSProperties } from 'react';
import { useCursor } from '../hooks';
import { EqBars } from '../components/EqBars';
import { OPTIX, YELLOW, BLACK } from '../data';

const mono: CSSProperties = {
  fontFamily: 'JetBrains Mono, monospace',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  fontSize: 10,
  fontWeight: 700,
};

export function Mobile() {
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
        borderBottom: `2px solid ${BLACK}`,
        padding: '12px 16px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <span style={mono}>OPTIX</span>
        <span style={mono}>S04 · 047</span>
      </div>

      {/* Stacked OPTIX rows */}
      {(['OPTIX', 'OPTIX', 'OPTIX'] as const).map((word, i) => (
        <div
          key={i}
          style={{
            height: 96,
            position: 'relative',
            borderBottom: `2px solid ${BLACK}`,
            display: 'flex',
            alignItems: 'center',
            padding: '0 16px',
            overflow: 'hidden',
          }}
        >
          <div style={{
            fontFamily: "'Archivo Black', sans-serif",
            fontSize: 96,
            letterSpacing: '-0.06em',
            lineHeight: 0.86,
            color: i === 1 ? 'transparent' : BLACK,
            WebkitTextStroke: i === 1 ? `2px ${BLACK}` : 'none',
            userSelect: 'none',
          }}>
            {word}
          </div>
          <span style={{ ...mono, position: 'absolute', right: 8, top: 8, fontSize: 9 }}>
            {String(i + 1).padStart(2, '0')}/03
          </span>
        </div>
      ))}

      {/* Tag */}
      <div style={{ padding: '10px 16px', borderBottom: `2px solid ${BLACK}` }}>
        <span style={mono}>▸ {OPTIX.tagEN}</span><br />
        <span style={{ ...mono, opacity: 0.65 }}>▸ {OPTIX.tagRU}</span>
      </div>

      {/* Signal */}
      <div style={{ padding: '12px 16px', borderBottom: `2px solid ${BLACK}` }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <span style={mono}>Signal</span>
          <span style={{ ...mono, opacity: 0.65 }}>{active ? '● LIVE' : '○ IDLE'}</span>
        </div>
        <div style={{ marginTop: 6 }}>
          <EqBars count={20} w={343} h={48} cursorX={cx} cursorActive={active} color={BLACK} />
        </div>
      </div>

      {/* Mix */}
      <div style={{ padding: '14px 16px', borderBottom: `2px solid ${BLACK}` }}>
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
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            background: BLACK,
            color: YELLOW,
            marginTop: 10,
            padding: '10px 12px',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
          }}
        >
          ▸ Play · {OPTIX.mix.length}
        </a>
      </div>

      {/* Tour */}
      <div style={{ padding: '14px 16px', borderBottom: `2px solid ${BLACK}` }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span style={mono}>Tour 2026</span>
          <span style={{ ...mono, opacity: 0.6 }}>04 dates</span>
        </div>
        <ol style={{ listStyle: 'none', margin: '6px 0 0', padding: 0 }}>
          {OPTIX.gigs.map((g, i) => (
            <li
              key={g.d}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                gap: 8,
                padding: '8px 0',
                borderTop: i === 0 ? `1px solid ${BLACK}` : '1px dashed rgba(0,0,0,0.3)',
                alignItems: 'baseline',
              }}
            >
              <div style={{ fontSize: 13 }}>
                <span style={{ fontWeight: 700 }}>{g.v}</span>
                <span style={{ opacity: 0.7 }}> · {g.c}</span>
              </div>
              <span style={{ ...mono }}>{g.d}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* Channels */}
      <div style={{ padding: '14px 16px', borderBottom: `2px solid ${BLACK}` }}>
        <span style={mono}>Channels</span>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '10px 16px',
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
              <span style={{ ...mono, fontSize: 9 }}>{s.n}</span>
              <span style={{ fontSize: 14, fontWeight: 700, marginTop: 1 }}>{s.h}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Booking strip */}
      <div style={{
        background: BLACK,
        color: YELLOW,
        padding: '14px 16px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <span style={{ ...mono, color: YELLOW }}>BOOKING ▸</span>
        <a
          href={`mailto:${OPTIX.booking}`}
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 13,
            fontWeight: 700,
            color: YELLOW,
            letterSpacing: '0.04em',
          }}
        >
          {OPTIX.booking}
        </a>
      </div>
    </div>
  );
}
