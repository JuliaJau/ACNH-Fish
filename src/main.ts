import './style.css';
import { createElement } from './utils/createElement';

const app = document.querySelector<HTMLDivElement>('#app');

const mainElement = createElement('main', {
  childElements: [
    createElement('h1', { innerText: 'Animal Crossing: New Horizons' }),
    createElement('input', { placeholder: 'Search for a character' }),
  ],
});

if (app !== null) {
  app.append(mainElement);
}
