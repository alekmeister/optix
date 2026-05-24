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
export function Tablet() {
    const ref = useRef(null);
    const { x: cx, active } = useCursor(ref);
    return (_jsxs("div", { ref: ref, style: {
            minHeight: '100vh',
            background: YELLOW,
            color: BLACK,
            fontFamily: "'Space Grotesk', sans-serif",
            overflowX: 'hidden',
        }, children: [_jsxs("div", { style: {
                    borderBottom: `3px solid ${BLACK}`,
                    padding: '14px 32px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }, children: [_jsx("span", { style: mono, children: "OPTIX" }), _jsxs("span", { style: mono, children: [OPTIX.basedEN, " \u00B7 BPM ", OPTIX.bpm] })] }), ['OPTIX', 'OPTIX', 'OPTIX'].map((word, i) => (_jsxs("div", { style: {
                    height: 200,
                    position: 'relative',
                    borderBottom: `3px solid ${BLACK}`,
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 32px',
                    overflow: 'hidden',
                }, children: [_jsx("div", { style: {
                            fontFamily: "'Archivo Black', sans-serif",
                            fontSize: 'clamp(80px, 25vw, 240px)',
                            letterSpacing: '-0.06em',
                            lineHeight: 0.86,
                            color: i === 1 ? 'transparent' : BLACK,
                            WebkitTextStroke: i === 1 ? `3px ${BLACK}` : 'none',
                            userSelect: 'none',
                        }, children: word }), _jsxs("span", { style: { ...mono, position: 'absolute', right: 14, top: 12 }, children: [String(i + 1).padStart(2, '0'), " / 03"] })] }, i))), _jsxs("div", { style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '12px 32px',
                    borderBottom: `3px solid ${BLACK}`,
                }, children: [_jsxs("span", { style: mono, children: ["\u25B8 ", OPTIX.tagEN] }), _jsxs("span", { style: { ...mono, opacity: 0.65 }, children: ["\u25B8 ", OPTIX.tagRU] })] }), _jsxs("div", { style: {
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    borderBottom: `3px solid ${BLACK}`,
                }, children: [_jsxs("div", { style: { borderRight: `3px solid ${BLACK}`, padding: '18px 24px' }, children: [_jsxs("div", { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }, children: [_jsx("span", { style: mono, children: "Signal" }), _jsx("span", { style: { ...mono, opacity: 0.65 }, children: active ? '● LIVE' : '○ IDLE' })] }), _jsx("div", { style: { marginTop: 8 }, children: _jsx(EqBars, { count: 24, w: 280, h: 56, cursorX: cx, cursorActive: active, color: BLACK }) }), _jsxs("div", { style: { marginTop: 18, paddingTop: 14, borderTop: `2px solid ${BLACK}` }, children: [_jsxs("span", { style: mono, children: ["Latest \u00B7 ", OPTIX.mix.num] }), _jsx("div", { style: {
                                            fontSize: 28,
                                            fontWeight: 700,
                                            letterSpacing: '-0.02em',
                                            marginTop: 4,
                                            lineHeight: 1,
                                        }, children: OPTIX.mix.title }), _jsxs("span", { style: { ...mono, opacity: 0.65 }, children: [OPTIX.mix.length, " \u00B7 ", OPTIX.mix.date] }), _jsxs("a", { href: `https://${OPTIX.mix.deck}`, target: "_blank", rel: "noreferrer", style: {
                                            display: 'inline-block',
                                            border: `2px solid ${BLACK}`,
                                            padding: '8px 12px',
                                            marginTop: 10,
                                            fontFamily: 'JetBrains Mono, monospace',
                                            fontWeight: 700,
                                            fontSize: 11,
                                            letterSpacing: '0.12em',
                                            textTransform: 'uppercase',
                                        }, children: ["\u25B8 Play \u00B7 ", OPTIX.mix.deck] })] })] }), _jsxs("div", { style: { padding: '18px 24px' }, children: [_jsx("span", { style: mono, children: "Tour 2026" }), _jsx("ol", { style: { listStyle: 'none', margin: '8px 0 0', padding: 0 }, children: OPTIX.gigs.map((g, i) => (_jsxs("li", { style: {
                                        display: 'grid',
                                        gridTemplateColumns: '20px 1fr auto',
                                        gap: 10,
                                        padding: '9px 0',
                                        alignItems: 'baseline',
                                        borderTop: i === 0 ? 'none' : '1px dashed rgba(0,0,0,0.3)',
                                    }, children: [_jsxs("span", { style: { ...mono, fontSize: 10 }, children: ["0", i + 1] }), _jsxs("div", { style: { fontSize: 14 }, children: [_jsx("span", { style: { fontWeight: 700 }, children: g.v }), _jsxs("span", { style: { opacity: 0.7 }, children: [" \u00B7 ", g.c] })] }), _jsx("span", { style: { ...mono, fontSize: 11 }, children: g.d })] }, g.d))) })] })] }), _jsxs("div", { style: { padding: '16px 32px', borderBottom: `3px solid ${BLACK}` }, children: [_jsxs("div", { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }, children: [_jsx("span", { style: mono, children: "Channels" }), _jsx("span", { style: { ...mono, opacity: 0.6 }, children: "04" })] }), _jsx("div", { style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(4, 1fr)',
                            gap: 16,
                            marginTop: 8,
                        }, children: OPTIX.socials.map((s) => (_jsxs("a", { href: s.u, target: "_blank", rel: "noreferrer", style: { display: 'flex', flexDirection: 'column' }, children: [_jsx("span", { style: { ...mono, fontSize: 10 }, children: s.n }), _jsx("span", { style: { fontSize: 16, fontWeight: 700, marginTop: 2 }, children: s.h })] }, s.n))) })] }), _jsxs("div", { style: {
                    padding: '14px 32px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }, children: [_jsxs("a", { href: `mailto:${OPTIX.booking}`, style: mono, children: ["BOOKING \u25B8 ", OPTIX.booking] }), _jsx("span", { style: { ...mono, opacity: 0.65 }, children: "EDITION 047 / 2026" })] })] }));
}
