export default class {
  constructor($c) {
    $c.on('click', (e) => {
      e.preventDefault();
      const $nav = $(e.target).closest('.js-body').find('.js-burger-nav');
      const $overlay = $(e.target).closest('.js-body').find('.js-overlay');

      if (!$nav.hasClass('_open')) {
        $(e.currentTarget).text('Назад');
        $nav.addClass('_open');
        $overlay.addClass('_visible');
      } else {
        $(e.currentTarget).text('Меню');
        $nav.removeClass('_open');
        $overlay.removeClass('_visible');
      }
    });
  }
}
