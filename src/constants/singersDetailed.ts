import singersDetailedData from '../../public/singers_detailed.json';

export interface SingerDetailedProfile {
  id: string;
  name: string;
  role: string;
  Base: string;
  Face: string;
  Torso: string;
  Body: string;
  appearance: {
    ethnicity?: string;
    height: string;
    weight: string;
    build: string;
    skinColor: string;
    eyeColor: string;
    hairColorStyle: string;
    faceDetails: string;
    breasts: string;
    genitals: string;
  };
  personality: {
    traits: string[];
    advantages: string[];
    disadvantages: string[];
  };
  otherDetails: {
    birthDate: string;
    birthplace: string;
    nationality: string;
    sexuality: string;
    relationship: string;
    instrument: string;
    vocalSpecialty: string;
    languages: string[];
    lifestyle: string;
  };
}

export const SINGERS_DETAILED: SingerDetailedProfile[] = singersDetailedData.singers as SingerDetailedProfile[];

export function getSingerDetailedById(id: string): SingerDetailedProfile | undefined {
  return SINGERS_DETAILED.find(s => s.id === id);
}

export function downloadSingersDetailedJson(): void {
  try {
    const dataStr = JSON.stringify(singersDetailedData, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'singers_detailed.json';
    a.click();
    URL.revokeObjectURL(url);
  } catch (err) {
    console.error('Failed to download singers_detailed.json:', err);
  }
}
