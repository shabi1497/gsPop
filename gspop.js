; (function ($) {
  var defaults =
  {
    position: "center centered", // 'top center', 'bottom center',
    backdrop: {
      show: true,
      clickable: true
    }
  }

  function gsPop(element, options) {
    this.element = $(element);
    this.options = $.extend({}, defaults, options);
    this.init();
    this.bindEvents();
  }

  gsPop.prototype.bindEvents = function () {
    var $element = this.element;
    $element.on('gspop.open', function () {
      $('body').addClass('gs-body-settings');
      $element.parent().show();
    });

    $element.next('.gs-Overlay').on('click', this.close.bind(this));
    $element.find('.gs-cancel').on('click', this.close.bind(this));

    $element.on('gspop.close', function () {
      $element.parent().hide();
      $('body').removeClass('gspop-opened');
    });
    
  }
  gsPop.prototype.close = function(){
    this.element.trigger('gspop.close');
  }
  gsPop.prototype.init = function () {
    var $element = this.element;
    $element.wrap("<div class='gs-Modal-Wrapper'></div>");
    $element.addClass(this.options.position);
    $(`<div class='gs-Overlay'></div>`).appendTo('.gs-Modal-Wrapper');
    $element.parent().hide();
  }

  $.fn.gsPop = function (options) {
    return this.each(function (i, elm) {
      new gsPop(elm, options);
    });
  }
}(jQuery));