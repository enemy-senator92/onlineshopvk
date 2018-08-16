import Modal from 'Js/widget/Modal';

export default class {
  constructor($c) {
    $c.on('change', '.js-order-radio-control', (e) => {
      $c.find('.js-order-radio-box').removeClass('_active');
      $(e.target).closest('.js-order-radio-box').addClass('_active');

      if ($(e.target).data('modal')) {
        const $modal = $($(e.target).data('modal'));

        Modal.open($modal);

        $modal.find('.js-modal-close').on('click', (event) => {
          event.preventDefault();
          Modal.close();
        });
      }
    });
  }
}
