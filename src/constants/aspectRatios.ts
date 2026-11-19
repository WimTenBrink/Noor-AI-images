export interface AspectRatioOption {
  id: string;
  label: string;
  ratio: string;
  orientation: 'landscape' | 'square' | 'portrait' | 'ultrawide';
  description: string;
  resolutionHint: string;
  usage: string;
}

export const ASPECT_RATIO_OPTIONS: AspectRatioOption[] = [
  {
    id: '21:9',
    label: '21:9 — Ultrawide Cinematic',
    ratio: '21:9',
    orientation: 'ultrawide',
    description: 'Anamorphic widescreen cinema format for panoramic vistas and cinematic group landscapes.',
    resolutionHint: '2560 × 1080 / 3840 × 1645',
    usage: 'Cinematic panoramas, stage performances, epic environments'
  },
  {
    id: '16:9',
    label: '16:9 — Standard Landscape (Widescreen)',
    ratio: '16:9',
    orientation: 'landscape',
    description: 'Standard high-definition widescreen video and desktop wallpaper composition.',
    resolutionHint: '1920 × 1080 / 3840 × 2160 (4K UHD)',
    usage: 'WAN Video, YouTube, 4K cover art landscapes, desktop wallpapers'
  },
  {
    id: '3:2',
    label: '3:2 — 35mm Classic Photography',
    ratio: '3:2',
    orientation: 'landscape',
    description: 'Traditional 35mm film SLR landscape proportion with balanced horizontal framing.',
    resolutionHint: '1800 × 1200 / 3000 × 2000',
    usage: 'Editorial music journalism, DSLR photo studies, magazine spreads'
  },
  {
    id: '4:3',
    label: '4:3 — Traditional Photography / TV',
    ratio: '4:3',
    orientation: 'landscape',
    description: 'Medium landscape frame reminiscent of retro monitors and medium-format film cameras.',
    resolutionHint: '1600 × 1200 / 2048 × 1536',
    usage: 'Retro photography, vintage art prints, Franco-Belgian comic panels'
  },
  {
    id: '5:4',
    label: '5:4 — Medium Format Landscape',
    ratio: '5:4',
    orientation: 'landscape',
    description: 'Near-square balanced landscape commonly used in gallery fine art framing.',
    resolutionHint: '1500 × 1200 / 2500 × 2000',
    usage: 'Fine art gallery prints, studio portraits'
  },
  {
    id: '1:1',
    label: '1:1 — Square Format',
    ratio: '1:1',
    orientation: 'square',
    description: 'Equal width and height ideal for vinyl record album covers, CD inserts, and icons.',
    resolutionHint: '1024 × 1024 / 2048 × 2048',
    usage: 'Album cover art, CD jackets, profile photos, square art prints'
  },
  {
    id: '4:5',
    label: '4:5 — Social Portrait / Photo Art',
    ratio: '4:5',
    orientation: 'portrait',
    description: 'Standard medium-height vertical frame with harmonious vertical aesthetic.',
    resolutionHint: '1200 × 1500 / 2000 × 2500',
    usage: 'Portrait photography, editorial fashion shoots'
  },
  {
    id: '3:4',
    label: '3:4 — Classic Vertical Portrait',
    ratio: '3:4',
    orientation: 'portrait',
    description: 'Traditional vertical composition matching portrait paintings and book illustration plates.',
    resolutionHint: '1200 × 1600 / 1536 × 2048',
    usage: 'Book illustrations, full standing portraits, comic book covers'
  },
  {
    id: '2:3',
    label: '2:3 — 35mm Vertical Portrait',
    ratio: '2:3',
    orientation: 'portrait',
    description: 'Tall 35mm DSLR vertical framing capturing full-length figures with head-to-toe headroom.',
    resolutionHint: '1200 × 1800 / 2000 × 3000',
    usage: 'Full-length fashion photography, movie posters, standing performer shots'
  },
  {
    id: '9:16',
    label: '9:16 — Vertical Story & Mobile Reel',
    ratio: '9:16',
    orientation: 'portrait',
    description: 'Full vertical mobile aspect ratio for smartphones, vertical video generators, and stories.',
    resolutionHint: '1080 × 1920 / 2160 × 3840 (4K Vertical)',
    usage: 'Vertical video generation (WAN Video portrait), smartphone wallpapers, mobile reels'
  },
  {
    id: '9:21',
    label: '9:21 — Ultra-Tall Vertical Banner',
    ratio: '9:21',
    orientation: 'portrait',
    description: 'Ultra-slim skyscraper banner format for vertical scroll scenes and bookmark prints.',
    resolutionHint: '1080 × 2520',
    usage: 'Tall bookmark art, Japanese scroll formats, vertical banner displays'
  }
];

export const DEFAULT_ASPECT_RATIO = '16:9';

export function getAspectRatioById(id: string): AspectRatioOption {
  const found = ASPECT_RATIO_OPTIONS.find(a => a.id === id || a.ratio === id);
  return found || ASPECT_RATIO_OPTIONS[1]; // default 16:9
}
