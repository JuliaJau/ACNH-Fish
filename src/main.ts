import './style.css';
import { createElement } from './utils/createElement';
import { createCharacterCard } from './components/character/character';

const app = document.querySelector<HTMLDivElement>('#app');

const mainElement = createElement('main', {
  childElements: [
    createElement('h1', { innerText: 'Animal Crossing: New Horizons' }),
    createElement('p', { innerText: 'Fish Characters' }),
    createElement('input', {
      placeholder: 'Search for a character',
      className: 'searchbar',
    }),
    createElement('div', {
      className: 'characterContainer',
      childElements: [createCharacterCard()],
    }),
  ],
});

if (app !== null) {
  app.append(mainElement);
}
