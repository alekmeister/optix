import { jsx as _jsx } from "react/jsx-runtime";
import { useTick } from '../hooks';
import { BLACK } from '../data';
export function EqBars({ count = 26, w, h, color = BLACK, cursorX = 0.5, cursorActive = false }) {
    const t = useTick();
    const gap = 4;
    const bw = (w - gap * (count - 1)) / count;
    const bars = Array.from({ length: count }, (_, i) => {
        const u = i / (count - 1);
        const dist = Math.abs(u - cursorX);
        const proximity = cursorActive ? Math.exp(-dist * dist * 25) : 0;
        const phase = t / 380 + i * 0.45;
        const base = 0.18 + 0.28 * (0.5 + 0.5 * Math.sin(phase));
        const bh = Math.max(2, h * (base + proximity * 0.55));
        return (_jsx("rect", { x: i * (bw + gap), y: h - bh, width: bw, height: bh, fill: color }, i));
    });
    return (_jsx("svg", { width: w, height: h, viewBox: `0 0 ${w} ${h}`, style: { display: 'block' }, children: bars }));
}
