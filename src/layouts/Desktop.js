import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from 'react';
import { useCursor } from '../hooks';
import { EqBars } from '../components/EqBars';
import { OPTIX, YELLOW, BLACK } from '../data';
const mono = {
    fontFamily: 'JetBrains Mono, monospace',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    fontSize: 11,
    fontWeight: 700,
};
export function Desktop() {
    const ref = useRef(null);
    const { x: cx, active } = useCursor(ref);
    return (_jsxs("div", { ref: ref, style: {
            minHeight: '100vh',
            background: YELLOW,
            color: BLACK,
            fontFamily: "'Space Grotesk', sans-serif",
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
        }, children: [_jsxs("div", { style: {
                    borderBottom: `3px solid ${BLACK}`,
                    padding: '14px 40px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexShrink: 0,
                }, children: [_jsx("span", { style: mono, children: "OPTIX" }), _jsx("span", { style: mono, children: "OPTIX \u00D7 OPTIX \u00D7 OPTIX \u00D7 OPTIX" }), _jsxs("span", { style: mono, children: [OPTIX.basedEN, " \u00B7 BPM ", OPTIX.bpm] })] }), _jsxs("div", { style: { flex: 1, display: 'flex', minHeight: 0 }, children: [_jsx("div", { style: { flex: 1, display: 'flex', flexDirection: 'column' }, children: ['OPTIX', 'OPTIX', 'OPTIX'].map((word, i) => (_jsxs("div", { style: {
                                flex: 1,
                                position: 'relative',
                                borderBottom: i < 2 ? `3px solid ${BLACK}` : 'none',
                                display: 'flex',
                                alignItems: 'center',
                                padding: '0 40px',
                                overflow: 'hidden',
                            }, children: [_jsx("div", { style: {
                                        fontFamily: "'Archivo Black', sans-serif",
                                        fontSize: 'clamp(120px, 18vw, 240px)',
                                        letterSpacing: '-0.06em',
                                        lineHeight: 0.86,
                                        color: i === 1 ? 'transparent' : BLACK,
                                        WebkitTextStroke: i === 1 ? `3px ${BLACK}` : 'none',
                                        userSelect: 'none',
                                    }, children: word }), _jsxs("span", { style: {
                                        ...mono,
                                        position: 'absolute',
                                        right: 12,
                                        top: 12,
                                    }, children: [String(i + 1).padStart(2, '0'), " / 03"] })] }, i))) }), _jsxs("aside", { style: {
                            width: 340,
                            flexShrink: 0,
                            borderLeft: `3px solid ${BLACK}`,
                            padding: '20px 24px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 18,
                            overflowY: 'auto',
                        }, children: [_jsxs("div", { children: [_jsx("span", { style: mono, children: OPTIX.tagEN }), _jsx("br", {}), _jsx("span", { style: { ...mono, opacity: 0.65 }, children: OPTIX.tagRU })] }), _jsxs("div", { style: { borderTop: `2px solid ${BLACK}`, paddingTop: 12 }, children: [_jsxs("div", { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }, children: [_jsx("span", { style: mono, children: "Signal" }), _jsx("span", { style: { ...mono, opacity: 0.65 }, children: active ? '● LIVE' : '○ IDLE' })] }), _jsx("div", { style: { marginTop: 8 }, children: _jsx(EqBars, { count: 26, w: 292, h: 64, cursorX: cx, cursorActive: active, color: BLACK }) })] }), _jsxs("div", { style: { borderTop: `2px solid ${BLACK}`, paddingTop: 12 }, children: [_jsxs("span", { style: mono, children: ["Latest \u00B7 ", OPTIX.mix.num] }), _jsx("div", { style: {
                                            fontSize: 26,
                                            fontWeight: 700,
                                            letterSpacing: '-0.02em',
                                            marginTop: 4,
                                            lineHeight: 1,
                                        }, children: OPTIX.mix.title }), _jsxs("span", { style: { ...mono, opacity: 0.65 }, children: [OPTIX.mix.length, " \u00B7 ", OPTIX.mix.date] }), _jsxs("a", { href: `https://${OPTIX.mix.deck}`, target: "_blank", rel: "noreferrer", style: {
                                            display: 'inline-block',
                                            border: `2px solid ${BLACK}`,
                                            padding: '6px 10px',
                                            marginTop: 8,
                                            fontFamily: 'JetBrains Mono, monospace',
                                            fontWeight: 700,
                                            fontSize: 11,
                                            letterSpacing: '0.12em',
                                            textTransform: 'uppercase',
                                        }, children: ["\u25B8 Play \u00B7 ", OPTIX.mix.deck] })] }), _jsxs("div", { style: { borderTop: `2px solid ${BLACK}`, paddingTop: 12 }, children: [_jsx("span", { style: mono, children: "Tour 2026" }), _jsx("ol", { style: { listStyle: 'none', margin: '6px 0 0', padding: 0 }, children: OPTIX.gigs.map((g, i) => (_jsxs("li", { style: {
                                                display: 'grid',
                                                gridTemplateColumns: '14px 1fr auto',
                                                gap: 8,
                                                padding: '5px 0',
                                                alignItems: 'baseline',
                                                borderTop: i === 0 ? 'none' : '1px dashed rgba(0,0,0,0.25)',
                                            }, children: [_jsxs("span", { style: { ...mono, fontSize: 9 }, children: ["0", i + 1] }), _jsxs("div", { style: { fontSize: 12 }, children: [_jsx("span", { style: { fontWeight: 700 }, children: g.v }), _jsxs("span", { style: { opacity: 0.7 }, children: [" \u00B7 ", g.c] })] }), _jsx("span", { style: { ...mono, fontSize: 10 }, children: g.d })] }, g.d))) })] }), _jsxs("div", { style: { borderTop: `2px solid ${BLACK}`, paddingTop: 12, marginTop: 'auto' }, children: [_jsx("span", { style: mono, children: "Channels" }), _jsx("div", { style: {
                                            display: 'grid',
                                            gridTemplateColumns: '1fr 1fr',
                                            gap: '6px 16px',
                                            marginTop: 6,
                                        }, children: OPTIX.socials.map((s) => (_jsxs("a", { href: s.u, target: "_blank", rel: "noreferrer", style: { display: 'flex', flexDirection: 'column' }, children: [_jsx("span", { style: { ...mono, fontSize: 9 }, children: s.n }), _jsx("span", { style: { fontSize: 13, fontWeight: 700 }, children: s.h })] }, s.n))) })] })] })] }), _jsxs("div", { style: {
                    borderTop: `3px solid ${BLACK}`,
                    padding: '14px 40px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexShrink: 0,
                }, children: [_jsxs("a", { href: `mailto:${OPTIX.booking}`, style: mono, children: ["BOOKING \u25B8 ", OPTIX.booking] }), _jsx("span", { style: { ...mono, opacity: 0.65 }, children: "EST. 2019 \u00B7 RESIDENT \u00B7 S04" }), _jsx("span", { style: mono, children: "EDITION 047 / 2026" })] })] }));
}
