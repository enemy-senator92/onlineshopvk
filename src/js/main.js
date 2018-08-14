import 'slick-carousel/slick/slick.min';

import init from 'Js/helpers/init';

import Menu from 'Js/widget/Menu';
import Burger from 'Js/widget/Burger';
import CatalogList from 'Js/widget/CatalogList';
import Slider from 'Js/widget/Slider';
import Collapse from 'Js/widget/Collapse';

$(() => {
  init('.js-menu', Menu, 'widget', 'Menu');
  init('.js-burger', Burger, 'widget', 'Burger');
  init('.js-catalog-list', CatalogList, 'widget', 'CatalogList');
  init('.js-slider', Slider, 'widget', 'Slider');
  init('.js-collapse', Collapse, 'widget', 'Collapse');
});
