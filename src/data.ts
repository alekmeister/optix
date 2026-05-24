export const YELLOW = '#FFE000';
export const BLACK = '#000000';

export const OPTIX = {
  name: 'OPTIX',
  tagEN: 'Drum & Bass · UK Garage',
  tagRU: 'Драм-н-бэйс · UK гэридж',
  basedEN: 'Moscow / Tbilisi',
  basedRU: 'Москва · Тбилиси',
  bpm: '140–174',
  mix: {
    title: 'Late Transmission',
    num: '047',
    length: '62:14',
    date: '2026.04.18',
    deck: 'mixcloud.com/optix',
  },
  gigs: [
    { d: '06·06·26', v: 'Tochka',   c: 'Moscow',  t: 'Subnautica III',    tag: 'DnB' },
    { d: '14·06·26', v: 'Mutabor',  c: 'Moscow',  t: 'Lowend Collective', tag: 'DnB' },
    { d: '28·06·26', v: 'Bassiani', c: 'Tbilisi', t: 'Garage Hours',      tag: 'UKG' },
    { d: '12·07·26', v: 'Plan B',   c: 'Berlin',  t: 'UKG Night',         tag: 'UKG' },
  ],
  socials: [
    { n: 'Instagram', h: '@optix.fm',   u: 'https://instagram.com/optix.fm' },
    { n: 'Telegram',  h: '@optixmusic', u: 'https://t.me/optixmusic' },
    { n: 'Mixcloud',  h: '/optix',      u: 'https://mixcloud.com/optix' },
    { n: 'Spotify',   h: 'Optix',       u: 'https://open.spotify.com/artist/optix' },
  ],
  booking: 'booking@optix.fm',
} as const;
