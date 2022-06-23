import {MAX_CARDS} from './constants';

import Menu from './components/menu';
import Filter from './components/filter';
import BoardController from './controllers/board-controller';

import {getCardsData} from './mocks/cards';
import {getFilterItems} from './mocks/filter';

import {renderElement} from './helpers';

const controlElem = document.querySelector(`.control`);
const mainElem = document.querySelector(`.main`);

const cardsData = getCardsData(MAX_CARDS);
// console.log(cardsData);
const filterItems = getFilterItems(cardsData);
// console.log(filterItems);

const menu = new Menu();
// console.log(menu);
const filter = new Filter({items: filterItems, currentFilter: `all`});
// console.log(filter);
const boardController = new BoardController(mainElem);

renderElement(controlElem, menu);
renderElement(mainElem, filter);

boardController.render(cardsData);
