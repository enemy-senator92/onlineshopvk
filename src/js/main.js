import init from 'Js/helpers/init';

import Menu from 'Js/widget/Menu';
import Burger from 'Js/widget/Burger';

$(() => {
  init('.js-menu', Menu, 'widget', 'Menu');
  init('.js-burger', Burger, 'widget', 'Burger');
});
