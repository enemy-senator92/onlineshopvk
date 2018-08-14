export default class {
  constructor($c) {
    this.$panel = $c.find('.js-collapse-panel');
    this.$text = $c.find('.js-collapse-text');
    this.$moreButton = $c.find('.js-collapse-more-button');
    this.$moreBox = $c.find('.js-collapse-more-box');
    this.newPanelHeight = $c.data('collapse-height') || 300;
    this.moreText = $c.data('collapse-text') || 'Свернуть';
    this.$scrollerBlock = $($c.data('collapse-scroll'));

    this.init();

    this.$moreButton.on('click', (e) => {
      e.preventDefault();
      this.toggleHeight();
    });
  }

  init() {
    const textHeight = this.$text.outerHeight();

    if (textHeight > this.newPanelHeight) {
      this.$panel.css('height', this.newPanelHeight).addClass('_hide');
      this.$moreBox.removeClass('_hidden');
    }
  }

  toggleHeight() {
    const panelHeight = this.$panel.outerHeight();
    const textHeight = this.$text.outerHeight();

    if (panelHeight < textHeight) {
      this.$panel.css('height', textHeight).removeClass('_hide');
      this.changeCaption();
    } else {
      this.$panel.css('height', this.newPanelHeight).addClass('_hide');
      this.changeCaption();
      if (this.$scrollerBlock.length) {
        $('.js-body, .js-html').animate({ scrollTop: this.$scrollerBlock.offset().top }, 300);
      }
    }
  }

  changeCaption() {
    const oldText = this.$moreButton.text();

    this.$moreButton.text(this.moreText);
    this.moreText = oldText;
  }
}
