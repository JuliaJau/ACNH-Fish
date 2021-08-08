import './style.css';
import { createElement } from './utils/createElement';
import { createCharacterCard } from './components/character/character';
import type { Character } from './types';
import { getCharacters, searchCharacter } from './utils/api';

const app = document.querySelector<HTMLDivElement>('#app');

const allCharacters: Character[] = await getCharacters();

const characterContainer = createElement('div', {
  className: 'characterContainer',
  childElements: allCharacters.map((character) =>
    createCharacterCard(character)
  ),
});

const searchBar = createElement('input', {
  className: 'searchBar',
  placeholder: 'Find your fish',
});

searchBar.oninput = () => {
  const name = searchBar.value;
  const characters: Character[] = searchCharacter(allCharacters, name);

  //replace list of characters with filtered list
  characterContainer.innerHTML = '';

  const filteredCharactersElements = characters.map((character) =>
    createCharacterCard(character)
  );

  characterContainer.append(...filteredCharactersElements);
};

const mainElement = createElement('main', {
  childElements: [
    createElement('div', {
      className: 'header',
    }),

    createElement('h2', { innerText: 'Fish your fish' }),
    searchBar,
    characterContainer,
  ],
});

if (app !== null) {
  app.append(mainElement);
}
