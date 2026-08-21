export type ImageStyleCategory =
  | 'Photography'
  | 'Black & White'
  | 'Drawings & Sketches'
  | 'Paintings & Fine Art'
  | 'CGI & 3D Rendering'
  | 'Illustration & Graphic Art'
  | 'Franco-Belgian Comics (BD)'
  | 'Italian Comics'
  | 'Dutch Comics'
  | 'Spanish Comics'
  | 'American & Classic Comic Books'
  | 'Vintage & Retro'
  | 'Exotic & Experimental';

export interface ImageStyleOption {
  id: string;
  label: string;
  category: ImageStyleCategory;
  description: string;
  promptModifier: string;
  std1Modifier: string;
  std2Modifier: string;
  std3Modifier: string;
}

export const IMAGE_STYLE_CATEGORIES = [
  'Photography',
  'Black & White',
  'Drawings & Sketches',
  'Paintings & Fine Art',
  'CGI & 3D Rendering',
  'Illustration & Graphic Art',
  'Franco-Belgian Comics (BD)',
  'Italian Comics',
  'Dutch Comics',
  'Spanish Comics',
  'American & Classic Comic Books',
  'Vintage & Retro',
  'Exotic & Experimental'
] as const;
