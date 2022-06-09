import {MAX_CARDS} from './constants';

import Menu from './components/menu';
import Filter from './components/filter';
import Board from './components/board';

import {getCardsData} from './mocks/cards';
import {getFilterItems} from './mocks/filter';

const controlElem = document.querySelector(`.control`);
const mainElem = document.querySelector(`.main`);

const cardsData = getCardsData(MAX_CARDS);
console.log(cardsData);
const filterItems = getFilterItems(cardsData);
console.log(filterItems);

const menu = new Menu();
console.log(menu);
const filter = new Filter({items: filterItems, currentFilter: `all`});
console.log(filter);
const board = new Board(cardsData);
console.log(board);


const render = (target, elem) => {
  target.append(elem);
};

render(controlElem, menu.getElement());
render(mainElem, filter.getElement());
render(mainElem, board.getElement());
