export default class {
  constructor($c) {
    this.$c = $c;
    this.$moreLink = $c.find('.js-more-link');
    this.$moreList = $c.find('.js-more-list');
    this.$moreBox = $c.find('.js-more-box');
    this.$moreClose = $c.find('.js-more-close');
    this.closeType = $c.data('more-close') || 'body';
    this.trigger = $c.data('more-trigger') || 'click';

    this.$moreLink.on('click', (e) => {
      e.preventDefault();

      if (this.$moreList.hasClass('_hidden')) {
        this.show();
      } else {
        this.hide();
      }
    });

    switch (this.closeType) {
      case 'body': {
        this.closeBody();

        break;
      }
      case 'close': {
        this.closeClose();

        break;
      }
      case 'all': {
        this.closeClose();
        this.closeBody();

        break;
      }
    }
  }

  show() {
    this.$moreList.removeClass('_hidden');
    this.$moreBox.removeClass('_hidden');
    this.$moreLink.addClass('_active');
  }

  hide() {
    this.$moreList.addClass('_hidden');
    this.$moreBox.addClass('_hidden');
    this.$moreLink.removeClass('_active');
  }

  closeBody() {
    $(document).on('click', (e) => {
      if (!this.$moreList.hasClass('_hidden')) {
        // если клик был не по нашему блоку и не по его дочерним элементам
        if (!this.$c.is(e.target) && this.$c.has(e.target).length === 0) {
          this.hide();
        }
      }
    });
  }

  closeClose() {
    this.$moreClose.on('click', (e) => {
      e.preventDefault();

      this.hide();
    });
  }
}
