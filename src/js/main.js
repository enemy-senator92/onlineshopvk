import 'slick-carousel/slick/slick.min';
import 'jquery.formstyler/jquery.formstyler.min';
import 'jquery-modal';

import init from 'Js/helpers/init';

import Menu from 'Js/widget/Menu';
import Burger from 'Js/widget/Burger';
import CatalogList from 'Js/widget/CatalogList';
import Slider from 'Js/widget/Slider';
import Collapse from 'Js/widget/Collapse';
import FormStyler from 'Js/widget/FormStyler';
import Counter from 'Js/widget/Counter';
import Order from 'Js/widget/Order';
import Modal from 'Js/widget/Modal';

$(() => {
  init('.js-menu', Menu, 'widget', 'Menu');
  init('.js-burger', Burger, 'widget', 'Burger');
  init('.js-catalog-list', CatalogList, 'widget', 'CatalogList');
  init('.js-slider', Slider, 'widget', 'Slider');
  init('.js-collapse', Collapse, 'widget', 'Collapse');
  init('.js-formstyler', FormStyler, 'widget', 'FormStyler');
  init('.js-counter', Counter, 'widget', 'Counter');
  init('.js-order', Order, 'widget', 'Order');
  init('.js-modal', Modal, 'widget', 'Modal');
});
