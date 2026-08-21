/**
 * Wardrobe Items and Groups Data Types
 * 
 * Formal TypeScript interfaces for modular wardrobe catalogues and prompt definitions.
 */

export interface WardrobePiece {
  name: string;
  description: string;
  color: string;
}

export interface WardrobeItem {
  id: string;
  name: string;
  label: string;
  description: string;
  footwear: string;
  clothes: WardrobePiece[];
  prompt: string;
  category: string;
  groupId: string;
  singerPrompts?: Record<string, string>;
}

export interface WardrobeGroup {
  id: string;
  name: string;
  icon: string;
  description: string;
  items: WardrobeItem[];
}

export interface WardrobeItemSummary {
  id: string;
  title: string;
  groupId: string;
}

/**
 * Factory helper to construct a WardrobeItem with consistent structure and inclusive prompt
 */
export function createWardrobeItem(
  id: string,
  name: string,
  description: string,
  footwear: string,
  clothes: WardrobePiece[],
  prompt: string,
  category: string,
  singerPrompts?: Record<string, string>
): WardrobeItem {
  return {
    id,
    name,
    label: name,
    description,
    footwear,
    clothes,
    prompt,
    category,
    groupId: category,
    singerPrompts
  };
}
