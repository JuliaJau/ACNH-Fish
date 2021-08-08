import style from './character.module.css';
import { createElement } from '../../utils/createElement';
import type { Character } from '../../types';

export function createCharacterCard({
  name,
  thumbnail,
  location,
  rarity,
  catchphrase,
}: Character): HTMLElement {
  return createElement('div', {
    className: style.card,
    childElements: [
      createElement('img', {
        className: style['card__image'],
        src: thumbnail,
      }),
      createElement('article', {
        className: style.info,
        childElements: [
          createElement('h3', { innerText: name }),
          createElement('div', {
            childElements: [
              createElement('h5', { innerText: 'Location:' }),
              createElement('p', { innerText: location }),
            ],
          }),

          createElement('h5', { innerText: 'Rarity:' }),
          createElement('p', { innerText: rarity }),

          createElement('h5', { innerText: 'Catch-Phrase:' }),
          createElement('p', {
            innerText: catchphrase,
          }),
        ],
      }),
    ],
  });
}
