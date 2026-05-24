import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from 'react';
import { useCursor } from '../hooks';
import { EqBars } from '../components/EqBars';
import { OPTIX, YELLOW, BLACK } from '../data';
const mono = {
    fontFamily: 'JetBrains Mono, monospace',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    fontSize: 10,
    fontWeight: 700,
};
export function Mobile() {
    const ref = useRef(null);
    const { x: cx, active } = useCursor(ref);
    return (_jsxs("div", { ref: ref, style: {
            minHeight: '100vh',
            background: YELLOW,
            color: BLACK,
            fontFamily: "'Space Grotesk', sans-serif",
            overflowX: 'hidden',
        }, children: [_jsxs("div", { style: {
                    borderBottom: `2px solid ${BLACK}`,
                    padding: '12px 16px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }, children: [_jsx("span", { style: mono, children: "OPTIX" }), _jsx("span", { style: mono, children: "S04 \u00B7 047" })] }), ['OPTIX', 'OPTIX', 'OPTIX'].map((word, i) => (_jsxs("div", { style: {
                    height: 96,
                    position: 'relative',
                    borderBottom: `2px solid ${BLACK}`,
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 16px',
                    overflow: 'hidden',
                }, children: [_jsx("div", { style: {
                            fontFamily: "'Archivo Black', sans-serif",
                            fontSize: 96,
                            letterSpacing: '-0.06em',
                            lineHeight: 0.86,
                            color: i === 1 ? 'transparent' : BLACK,
                            WebkitTextStroke: i === 1 ? `2px ${BLACK}` : 'none',
                            userSelect: 'none',
                        }, children: word }), _jsxs("span", { style: { ...mono, position: 'absolute', right: 8, top: 8, fontSize: 9 }, children: [String(i + 1).padStart(2, '0'), "/03"] })] }, i))), _jsxs("div", { style: { padding: '10px 16px', borderBottom: `2px solid ${BLACK}` }, children: [_jsxs("span", { style: mono, children: ["\u25B8 ", OPTIX.tagEN] }), _jsx("br", {}), _jsxs("span", { style: { ...mono, opacity: 0.65 }, children: ["\u25B8 ", OPTIX.tagRU] })] }), _jsxs("div", { style: { padding: '12px 16px', borderBottom: `2px solid ${BLACK}` }, children: [_jsxs("div", { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }, children: [_jsx("span", { style: mono, children: "Signal" }), _jsx("span", { style: { ...mono, opacity: 0.65 }, children: active ? '● LIVE' : '○ IDLE' })] }), _jsx("div", { style: { marginTop: 6 }, children: _jsx(EqBars, { count: 20, w: 343, h: 48, cursorX: cx, cursorActive: active, color: BLACK }) })] }), _jsxs("div", { style: { padding: '14px 16px', borderBottom: `2px solid ${BLACK}` }, children: [_jsxs("span", { style: mono, children: ["Latest \u00B7 ", OPTIX.mix.num] }), _jsx("div", { style: {
                            fontSize: 26,
                            fontWeight: 700,
                            letterSpacing: '-0.02em',
                            marginTop: 4,
                            lineHeight: 1,
                        }, children: OPTIX.mix.title }), _jsxs("span", { style: { ...mono, opacity: 0.65 }, children: [OPTIX.mix.length, " \u00B7 ", OPTIX.mix.date] }), _jsxs("a", { href: `https://${OPTIX.mix.deck}`, target: "_blank", rel: "noreferrer", style: {
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
                        }, children: ["\u25B8 Play \u00B7 ", OPTIX.mix.length] })] }), _jsxs("div", { style: { padding: '14px 16px', borderBottom: `2px solid ${BLACK}` }, children: [_jsxs("div", { style: { display: 'flex', justifyContent: 'space-between' }, children: [_jsx("span", { style: mono, children: "Tour 2026" }), _jsx("span", { style: { ...mono, opacity: 0.6 }, children: "04 dates" })] }), _jsx("ol", { style: { listStyle: 'none', margin: '6px 0 0', padding: 0 }, children: OPTIX.gigs.map((g, i) => (_jsxs("li", { style: {
                                display: 'grid',
                                gridTemplateColumns: '1fr auto',
                                gap: 8,
                                padding: '8px 0',
                                borderTop: i === 0 ? `1px solid ${BLACK}` : '1px dashed rgba(0,0,0,0.3)',
                                alignItems: 'baseline',
                            }, children: [_jsxs("div", { style: { fontSize: 13 }, children: [_jsx("span", { style: { fontWeight: 700 }, children: g.v }), _jsxs("span", { style: { opacity: 0.7 }, children: [" \u00B7 ", g.c] })] }), _jsx("span", { style: { ...mono }, children: g.d })] }, g.d))) })] }), _jsxs("div", { style: { padding: '14px 16px', borderBottom: `2px solid ${BLACK}` }, children: [_jsx("span", { style: mono, children: "Channels" }), _jsx("div", { style: {
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '10px 16px',
                            marginTop: 8,
                        }, children: OPTIX.socials.map((s) => (_jsxs("a", { href: s.u, target: "_blank", rel: "noreferrer", style: { display: 'flex', flexDirection: 'column' }, children: [_jsx("span", { style: { ...mono, fontSize: 9 }, children: s.n }), _jsx("span", { style: { fontSize: 14, fontWeight: 700, marginTop: 1 }, children: s.h })] }, s.n))) })] }), _jsxs("div", { style: {
                    background: BLACK,
                    color: YELLOW,
                    padding: '14px 16px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }, children: [_jsx("span", { style: { ...mono, color: YELLOW }, children: "BOOKING \u25B8" }), _jsx("a", { href: `mailto:${OPTIX.booking}`, style: {
                            fontFamily: 'JetBrains Mono, monospace',
                            fontSize: 13,
                            fontWeight: 700,
                            color: YELLOW,
                            letterSpacing: '0.04em',
                        }, children: OPTIX.booking })] })] }));
}
