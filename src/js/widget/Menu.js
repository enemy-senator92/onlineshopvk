export default class {
  constructor($c) {
    $c.on('click', '.js-menu-button', (e) => {
      e.preventDefault();
      const level = $(e.currentTarget).data('level');
      const $parent = $(e.currentTarget).closest(`.js-menu-parent[data-level=${level}]`);
      const $category = $parent.find(`.js-menu-category[data-level=${level}]`);

      console.log($category);
      if (!$(e.currentTarget).hasClass('_open')) {
        $(e.currentTarget).addClass('_open');
        $category.addClass('_open');
        $parent.addClass('_open');
      } else {
        $(e.currentTarget).removeClass('_open');
        $category.removeClass('_open');
        $parent.removeClass('_open');
      }
    });
  }
}
