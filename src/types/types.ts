export interface Country {
    name: { common: string };
    population: number;
    languages: Record<string, string>;
    currencies: Record<string, { name: string }>;
    flags: { svg: string };
    region: string;
    subregion: string;
    capital: string[];
  }
  