export default class {
  constructor($c) {
    $c.on('click', (e) => {
      e.preventDefault();
      const $nav = $(e.target).closest('.js-body').find('.js-burger-nav');
      const $overlay = $(e.target).closest('.js-body').find('.js-overlay');

      $nav.toggleClass('_open');
      $overlay.toggleClass('_visible');
    });
  }
}
