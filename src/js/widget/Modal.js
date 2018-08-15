export default class Modal {
  constructor($c) {
    this.$modal = $c.get(0).tagName === 'A' ? $($c.attr('href')) : $($c.data('modal'));
    this.$close = this.$modal.find('.js-modal-close');
    this.type = $c.data('modal-type') || 'button';

    $c.on('click', (e) => {
      Modal.open(this.$modal);
    });


    this.$close.on('click', (e) => {
      e.preventDefault();
      Modal.close();
    });
  }

  static options(params = '') {
    return Object.assign(params, {
      blockerClass: 'overlay',
      clickClose: true,
      closeExisting: false,
      escapeClose: true,
      showClose: false,
      fadeDuration: 250,
      fadeDelay: 0.80
    });
  }

  static open($modal) {
    $modal.modal(Modal.options());
  }

  static close() {
    $.modal.close();
  }

  static createModal(nameId, content) {
    if (Modal.$body.length) {
      const modal = Modal.$body.find(`#${nameId}`);

      if (modal.length) {
        return `Модальное окно с id равным ${nameId} уже существует`;
      }
      const modalHtml = `
          <div class="modal" id="${nameId}">
              <a class="modal__close js-modal-close" rel="modal:close">
                  <svg class="modal__close-icon" role="img" width="12" height="12">
                      <use xlink:href="#close-extra"></use>
                  </svg>
              </a>
              <div class="modal__container">
                  ${content}
              </div>
          </div>
        `;

      Modal.$body.find('.js-modal-append').append(modalHtml);

      return Modal.$body.find(`#${nameId}`);
    }
  }
}

Modal.$body = $('.js-body');
