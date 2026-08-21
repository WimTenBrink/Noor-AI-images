import { ImageStyleOption } from './types';

export const PHOTOGRAPHY_STYLES: ImageStyleOption[] = [
  {
    id: 'photo_realistic',
    label: 'Photorealistic (Standard Default)',
    category: 'Photography',
    description: 'Crisp photorealistic group portrait with soft warm ambient lighting',
    promptModifier: 'Photorealistic portrait, soft natural ambient lighting, 8k resolution, authentic skin textures, Hasselblad camera quality',
    std1Modifier: 'Photorealistic group portrait, natural balanced ambient lighting, authentic skin textures, 16:9 widescreen composition, 4k ultra-high resolution',
    std2Modifier: 'Crisp commercial portrait photograph, gentle golden hour rim lighting, soft focus depth of field, 16:9 cinematic shot, 4k resolution',
    std3Modifier: 'High-end studio photography, sharp crisp key lighting, refined color grading, editorial composition, 16:9 widescreen, 4k resolution'
  },
  {
    id: 'photo_35mm',
    label: 'Vintage 35mm Analog Film',
    category: 'Photography',
    description: 'Warm organic film grain, natural chromatic depth, Kodak Portra 400',
    promptModifier: 'Vintage 35mm analog film photograph, Kodak Portra 400 aesthetic, organic film grain, soft warm tones, candid snapshot',
    std1Modifier: '35mm analog film photograph, Kodak Portra 400 color science, natural organic film grain, warm golden highlights, 16:9 composition',
    std2Modifier: 'Candid 35mm street film snapshot, subtle lens flare, vintage color palette, soft analog depth of field, 16:9 widescreen',
    std3Modifier: 'Cinematic 35mm motion picture film frame, gentle halation, rich analog grain, Kodak 500T aesthetic, 16:9 widescreen'
  },
  {
    id: 'photo_polaroid',
    label: 'Polaroid / Instant Film',
    category: 'Photography',
    description: 'Instant film aesthetic with soft muted colors, slight vignetting, and flash lighting',
    promptModifier: 'Authentic vintage Polaroid instant photo, chemical emulsion tones, soft nostalgic vignetting, direct on-camera flash warmth',
    std1Modifier: 'Vintage instant Polaroid photograph, soft pastel color shifts, nostalgic paper grain, natural instant camera lighting, 16:9 composition',
    std2Modifier: 'SX-70 Polaroid film snapshot, dreamy soft glow, muted vintage palette, instant film texture, 16:9 framing',
    std3Modifier: 'Wide instant film photograph, warm ambient daylight, slight overexposure in highlights, authentic instant print look, 16:9 widescreen'
  },
  {
    id: 'photo_editorial',
    label: 'Editorial Fashion Magazine Spread',
    category: 'Photography',
    description: 'High-fashion music magazine cover spread, dramatic key lighting, sharp subject focus',
    promptModifier: 'High-fashion music editorial magazine cover spread, dramatic studio key lighting, sharp subject focus, Vogue and Vanity Fair editorial aesthetic',
    std1Modifier: 'High-fashion editorial magazine photograph, sophisticated dual-point key lighting, haute couture art direction, 16:9 spread composition',
    std2Modifier: 'Dramatic fashion editorial portrait, high contrast studio chiaroscuro, sleek color grading, glossy magazine spread, 16:9 widescreen',
    std3Modifier: 'Avant-garde editorial fashion photograph, sleek rim lighting, cinematic depth, polished magazine cover aesthetic, 16:9 composition'
  },
  {
    id: 'photo_golden_hour',
    label: 'Golden Hour Sunset Photography',
    category: 'Photography',
    description: 'Warm low sun, long golden rays, atmospheric lens flare and glowing rim light',
    promptModifier: 'Golden hour sunset photography, warm low sunbeams, glowing backlight rim lighting, atmospheric sun dust haze',
    std1Modifier: 'Golden hour photography, warm amber sunlight washing over the scene, gentle golden rim light, 16:9 cinematic widescreen',
    std2Modifier: 'Sunset dusk photography, deep orange and magenta sky reflections, long soft shadows, glowing atmosphere, 16:9 composition',
    std3Modifier: 'Warm twilight sunset photograph, vibrant atmospheric sky gradient, glowing backlit silhouettes, 16:9 widescreen'
  },
  {
    id: 'photo_cinematic_70mm',
    label: 'Cinematic 70mm IMAX Film Still',
    category: 'Photography',
    description: 'Wide anamorphic lens, shallow depth of field, Panavision 70mm cinematic capture',
    promptModifier: 'Cinematic 70mm Panavision IMAX film still, anamorphic lens flares, master cinematic lighting, shallow depth of field, Hollywood motion picture',
    std1Modifier: '70mm IMAX cinema film still, expansive widescreen framing, dramatic natural lighting, rich dynamic range, 16:9 composition',
    std2Modifier: 'Anamorphic 70mm cinematic capture, horizontal blue lens streak, organic depth of field, epic Hollywood film still, 16:9',
    std3Modifier: 'Cinematic master shot, 70mm film emulsion, atmospheric haze, movie color grade, 16:9 widescreen composition'
  },
  {
    id: 'photo_disposable',
    label: '90s Disposable Camera',
    category: 'Photography',
    description: 'Direct on-camera flash, candid nostalgia, saturated 90s snapshot',
    promptModifier: '1990s disposable camera snapshot, direct flash, authentic film grain, nostalgic candid youth snapshot aesthetic',
    std1Modifier: '1990s disposable 35mm snapshot, direct on-camera flash, authentic candid youth atmosphere, nostalgic 16:9 composition',
    std2Modifier: 'Retro disposable camera photo, saturated flash shadows, authentic snapshot charm, 16:9 widescreen',
    std3Modifier: 'Nostalgic 90s party snapshot, direct flash highlights, vintage Fuji QuickSnap color palette, 16:9 composition'
  },
  {
    id: 'photo_street_candid',
    label: 'Candid Street Documentary',
    category: 'Photography',
    description: 'Candid photojournalism, Leica M rangefinder, natural unscripted life',
    promptModifier: 'Candid street documentary photojournalism, Leica M rangefinder look, natural candid moment, authentic environment',
    std1Modifier: 'Photojournalistic candid street portrait, natural available light, spontaneous human interaction, 16:9 composition',
    std2Modifier: 'Documentary environmental portrait, natural daylight, unscripted genuine expression, Leica 35mm Summicron aesthetic, 16:9',
    std3Modifier: 'Artful photojournalism capture, decisive moment timing, rich atmospheric backdrop, 16:9 widescreen'
  }
];
