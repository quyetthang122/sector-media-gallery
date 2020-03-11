/**
 * Custom javascript for the gallery carousel
 *
 * TODO conditionally load this JS.
 *
 * attach: Has the onclick behaviours and handles slick events.
 *
 * toggleCarousel: Show/hide the carousel.
 *
 * toggleCaption: Show/Hide the caption and change the aria attrs.
 *
 */
(function ($) {
  Drupal.behaviors.sector_media_gallery = {
    attach: function (context) {
      // Keyboard key.
      var KEYBOARD_ESC = 27;
      $(document).on('keyup', function(e) {
        if (e.keyCode === KEYBOARD_ESC && $('html').hasClass('carousel-is-active')) {
          $('.js-close-carousel').click();
        }
      });

      // Set the correct pager number in the carousel whenever the slide changes.
      $('#slick-views-sector-media-gallery-single-item-block-1-1-slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $('.js-gallery-current-page').text(Number(nextSlide + 1));
        $('.slick-current').focus();
      });

      // Show the carousel with the selected item.
      $('.js-toggle-carousel').once().click(function() {
        var index = $(this).index();
        $('#slick-views-sector-media-gallery-single-item-block-1-1-slider').slick('slickGoTo', index, true);
        Drupal.behaviors.sector_media_gallery.toggleCarousel(context);
        return false;
      });

      // Hide the carousel when clicking the close button.
      $('.js-close-carousel').once().on('click', function() {
        Drupal.behaviors.sector_media_gallery.toggleCarousel(context);
        return false;
      });

      // Show/Hide the caption and change AriaAttrs.
      $('.js-toggle-caption').on('click', function() {
        Drupal.behaviors.sector_media_gallery.toggleCaption(context);
        $('.slick-current').focus();
        return false;
      });
    },
    toggleCarousel: function (context) {
      $('.gallery--carousel', context).toggleClass('carousel-is-active');
      $('html').toggleClass('carousel-is-active');
    },
    toggleCaption: function (context) {
      $('.js-toggle-caption.action--information').attr('aria-pressed', function(index, attr) {
        return attr === true;
      });
      $('.js-toggle-caption.action--information').attr('aria-label', function(index, attr) {
        return attr === 'Show caption' ? 'Hide caption' : 'Show caption';
      });
      $('.js-toggle-caption.action--information').text(function(index, text) {
        return text === 'Show caption' ? 'Hide caption' : 'Show caption';
      });
      $('.gallery__inner', context).toggleClass('caption-is-hidden');
    },
  };
})(jQuery);
