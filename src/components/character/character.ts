import style from './character.module.css';
import { createElement } from '../../utils/createElement';

export function createCharacterCard(): HTMLElement {
  return createElement('div', {
    className: style.card,
    childElements: [
      createElement('img', {
        className: style.image,
        src: 'https://acnhapi.com/v1/images/fish/1',
      }),
      createElement('article', {
        className: style.info,
        childElements: [
          createElement('h2', { innerText: 'Bitterling' }),
          createElement('div', {
            childElements: [
              createElement('h5', { innerText: 'Location:' }),
              createElement('p', { innerText: 'River' }),
            ],
          }),

          createElement('h5', { innerText: 'Rarity:' }),
          createElement('p', { innerText: 'Common' }),

          createElement('h5', { innerText: 'Catch-Phrase:' }),
          createElement('p', {
            innerText:
              'I caught a bitterling! Its mad at me, but only a little.',
          }),
        ],
      }),
    ],
  });
}
