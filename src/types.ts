export type Character = {
  name: string;
  thumbnail: string;
  location: string;
  rarity: string;
  catchphrase: string;
};

export type CharacterFromAPI = {
  id: number;
  'file-name': string;
  name: {
    'name-USen': string;
    'name-EUen': string;
    'name-EUde': string;
    'name-EUes': string;
    'name-USes': string;
    'name-EUfr': string;
    'name-USfr': string;
    'name-EUit': string;
    'name-EUnl': string;
    'name-CNzh': string;
    'name-TWzh': string;
    'name-JPja': string;
    'name-KRko': string;
    'name-EUru': string;
  };
  availability: {
    'month-northern': string;
    'month-southern': string;
    time: number;
    isAllDay: boolean;
    isAllYear: boolean;
    location: string;
    rarity: string;
    'month-array-northern': number[];
    'month-array-southern': number[];
    'time-array': number[];
  };
  shadow: string;
  price: number;
  'price-cj': number;
  'catch-phrase': string;
  'museum-phrase': string;
  image_uri: string;
  icon_uri: string;
};

export type AllCharactersFromAPI = {
  [key: string]: CharacterFromAPI;
};
