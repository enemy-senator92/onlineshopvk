export default class {
  constructor($c) {
    $c.on('click', '.js-more-mobile-link', (e) => {
      e.preventDefault();
      $c.toggleClass('_active');
    });
  }
}
