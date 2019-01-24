$(() => {
  $('.accordion').on('click', '.accordion__title', e => {
    let $this = $(e.target);
    let $accordion = $this.closest('.accordion');

    // just toggle current item
    if (!$accordion.hasClass('accordion--single')) {
      $this.closest('.accordion__item').toggleClass('accordion__item--opened');
      return;
    }

    $accordion.find('.accordion__item').removeClass('accordion__item--opened');
    $this.closest('.accordion__item').addClass('accordion__item--opened');

  });
});