export default class {
  constructor($c) {
    this.$c = $c;
    this.type = $c.data('slider-type');
    this.$items = $c.find('.js-slider-slide');

    if (this.$items.length > 1) {
      $c.slick(this.getParams());
    }

    if (this.$items.length === 1 && this.type === 'thumbnails') {
      $c.remove();
    }
  }

  getParams() {
    const params = {};
    const navFor = this.$c.data('slider-for');

    switch (this.type) {
      case 'cover': {
        Object.assign(params, {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          mobileFirst: true,
          dots: true,
          dotsClass: 'cover__dots',
          responsive: [
            {
              breakpoint: 800,
              settings: {
                dots: false
              }
            }
          ]
        });
        break;
      }
      case 'thumbnails': {
        Object.assign(params, {
          slidesToShow: 6,
          slidesToScroll: 1,
          focusOnSelect: true
        });
        break;
      }
    }

    if (navFor) {
      Object.assign(params, {
        asNavFor: navFor
      });
    }

    return params;
  }
}
