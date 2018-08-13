import init from 'Js/helpers/init';

import Menu from 'Js/widget/Menu';
import Burger from 'Js/widget/Burger';
import CatalogList from 'Js/widget/CatalogList';

$(() => {
  init('.js-menu', Menu, 'widget', 'Menu');
  init('.js-burger', Burger, 'widget', 'Burger');
  init('.js-catalog-list', CatalogList, 'widget', 'CatalogList');
});
