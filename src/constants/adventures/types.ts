export interface AdventureLocationOption {
  id: string;
  label: string;
  type: 'outdoors' | 'indoors';
  description: string;
}

export interface AdventureCategory {
  id: string;
  label: string;
  description: string;
  locations: AdventureLocationOption[];
}
