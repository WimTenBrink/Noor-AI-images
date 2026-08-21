import { 
  ImageStyleCategory, 
  ImageStyleOption, 
  IMAGE_STYLE_CATEGORIES 
} from './imageStyles/types';

import { PHOTOGRAPHY_STYLES } from './imageStyles/photographyStyles';
import { BLACK_AND_WHITE_STYLES } from './imageStyles/blackAndWhiteStyles';
import { DRAWINGS_STYLES } from './imageStyles/drawingsStyles';
import { PAINTINGS_STYLES } from './imageStyles/paintingsStyles';
import { CGI_AND_3D_STYLES } from './imageStyles/cgiAnd3dStyles';
import { ILLUSTRATION_STYLES } from './imageStyles/illustrationStyles';
import { FRANCO_BELGIAN_STYLES } from './imageStyles/francoBelgianStyles';
import { ITALIAN_COMIC_STYLES } from './imageStyles/italianComicStyles';
import { DUTCH_COMIC_STYLES } from './imageStyles/dutchComicStyles';
import { SPANISH_COMIC_STYLES } from './imageStyles/spanishComicStyles';
import { AMERICAN_COMIC_STYLES } from './imageStyles/americanComicStyles';
import { VINTAGE_RETRO_STYLES } from './imageStyles/vintageRetroStyles';
import { EXOTIC_STYLES } from './imageStyles/exoticStyles';

export type { ImageStyleCategory, ImageStyleOption };
export { IMAGE_STYLE_CATEGORIES };

export const IMAGE_STYLES: ImageStyleOption[] = [
  ...PHOTOGRAPHY_STYLES,
  ...BLACK_AND_WHITE_STYLES,
  ...DRAWINGS_STYLES,
  ...PAINTINGS_STYLES,
  ...CGI_AND_3D_STYLES,
  ...ILLUSTRATION_STYLES,
  ...FRANCO_BELGIAN_STYLES,
  ...ITALIAN_COMIC_STYLES,
  ...DUTCH_COMIC_STYLES,
  ...SPANISH_COMIC_STYLES,
  ...AMERICAN_COMIC_STYLES,
  ...VINTAGE_RETRO_STYLES,
  ...EXOTIC_STYLES
];

/**
 * Helper to get ImageStyleOption by id with fallback to realistic photo
 */
export function getImageStyleById(styleId: string): ImageStyleOption {
  const found = IMAGE_STYLES.find(s => s.id === styleId);
  if (found) return found;
  return IMAGE_STYLES[0]; // photo_realistic
}

/**
 * Helper to get all styles belonging to a specific category/genre
 */
export function getStylesByCategory(category: ImageStyleCategory): ImageStyleOption[] {
  return IMAGE_STYLES.filter(s => s.category === category);
}

/**
 * Helper to get the category name for a given style ID
 */
export function getCategoryForStyleId(styleId: string): ImageStyleCategory {
  const style = getImageStyleById(styleId);
  return style.category;
}
