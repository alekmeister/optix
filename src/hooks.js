import { useEffect, useRef, useState } from 'react';
export function useCursor(ref) {
    const [pos, setPos] = useState({ x: 0.5, y: 0.5, active: false });
    useEffect(() => {
        const el = ref.current;
        if (!el)
            return;
        const onMove = (e) => {
            const r = el.getBoundingClientRect();
            setPos({
                x: Math.max(0, Math.min(1, (e.clientX - r.left) / r.width)),
                y: Math.max(0, Math.min(1, (e.clientY - r.top) / r.height)),
                active: true,
            });
        };
        const onLeave = () => setPos((p) => ({ ...p, active: false }));
        el.addEventListener('mousemove', onMove);
        el.addEventListener('mouseleave', onLeave);
        return () => {
            el.removeEventListener('mousemove', onMove);
            el.removeEventListener('mouseleave', onLeave);
        };
    }, [ref]);
    return pos;
}
export function useTick() {
    const [t, setT] = useState(0);
    const startRef = useRef(null);
    useEffect(() => {
        let raf;
        const loop = (now) => {
            if (startRef.current === null)
                startRef.current = now;
            setT(now - startRef.current);
            raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);
        return () => cancelAnimationFrame(raf);
    }, []);
    return t;
}
export function useWindowSize() {
    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    useEffect(() => {
        const handler = () => setSize({ width: window.innerWidth, height: window.innerHeight });
        window.addEventListener('resize', handler);
        return () => window.removeEventListener('resize', handler);
    }, []);
    return size;
}
