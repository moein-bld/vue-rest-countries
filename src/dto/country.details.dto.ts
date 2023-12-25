
export type CountryDetailsDto = {
    name: string;
    topLevelDomain: string[];
    capital: string;
    subregion: string;
    region: string;
    population: number;
    borders: string[];
    nativeName: string;
    currencies: string;
    languages: string;
    flag: string;
    flags?: Flags;
    independent: boolean;
}

interface Flags {
    svg: string
    png: string
}