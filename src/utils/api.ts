import type { AllCharactersFromAPI, Character } from '../../src/types';

export async function getCharacters(): Promise<Character[]> {
  const response = await fetch('http://acnhapi.com/v1/fish/');
  const data: AllCharactersFromAPI = await response.json();

  const characters = Object.values(data);

  const formattedCharacters: Character[] = characters.map((character) => {
    const formattedCharacter: Character = {
      name: character.name['name-EUen'],
      thumbnail: character.image_uri,
      location: character.availability.location,
      rarity: character.availability.rarity,
      catchphrase: character['catch-phrase'],
    };
    return formattedCharacter;
  });

  return formattedCharacters;
}
export function searchCharacter(
  allCharacters: Character[],
  name: string
): Character[] {
  // variable that saves name and put it to lowercase
  const needle = name.toLowerCase();
  // filter by name, avoid typos from upper-/lowercase
  const filteredCharacters = allCharacters.filter(
    (character) => character.name.toLowerCase().indexOf(needle) !== -1
  );
  return filteredCharacters;
}
