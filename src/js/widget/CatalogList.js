export default class {
  constructor($c) {
    $c.on('mouseenter', '.js-catalog-item', (e) => {
      const $card = $(e.currentTarget).find('.js-catalog-card');
      const pesudo = `<div class="js-pesudo" style="height: ${$card.height()}px"></div>`;

      $(e.currentTarget).append(pesudo);
      $card.addClass('_hover');
    });

    $c.on('mouseleave', '.js-catalog-item', (e) => {
      const $card = $(e.currentTarget).find('.js-catalog-card');

      $card.removeClass('_hover');
      $('.js-pesudo', $(e.currentTarget)).remove();
    });
  }
}
