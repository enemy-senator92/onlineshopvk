export default class {
  constructor($c) {
    const $control = $c.find('.js-counter-cnt');
    let oldValue = +$control.data('counter');
    const max = 999;

    $c.on('click', '.js-counter-button', (e) => {
      e.preventDefault();

      const action = $(e.currentTarget).data('counter-type');
      let value = +$control.html();
      $c.find('.js-counter-button').attr('disabled', false);

      switch (action) {
        case 'minus':
          value = value <= 1 ? 1 : value - 1;
          if (value <= 1) {
            console.log('minus'+value);
            $(e.currentTarget).attr('disabled', true);
          }
          $control.html(value);
          break;
        case 'plus':
          value += 1;
          $control.html(max < value ? max : value);
          break;
      }

      oldValue = value;
    });
  }
}
