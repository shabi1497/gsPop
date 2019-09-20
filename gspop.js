; (function ($) {
  var defaults =
  {
    wrapperClasses: "", 
    modalClasses: "gspop-modal-position", 
    backdrop: {
      show: true,
      clickable: true
    },
    animate: {
      apply: true,
      hide: 'animated gp-flipOutX',
      show: 'animated gp-flipIn'
    },
    bodyClass: "gspop-opened",
    modal: "gs-Modal"
  }

  var config= {
    modalPosition: 'gspop-modal-position'
  }

  function gsPop(element, options) {
    this.element = $(element);
    this.options = $.extend(true, {}, defaults, options);
    this.init();
    this.bindEvents();
  }

  /* add events for the plugin*/
  gsPop.prototype.bindEvents = function () {
    var self = this;
    var $element = self.element;
    if(this.options.backdrop.clickable) $element.next('.gs-Overlay').on('click', self.close.bind(self));
    $element.find('.gs-cancel').on('click', self.close.bind(self));

    /* Close event */
    $element.on('gspop.close', function() {
        self.toggle();
    });

    /* Open event */
    $element.on('gspop.open', function()  {
        self.toggle(true);
    });

    if(self.options.animate.apply) {
        $element.on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
          if(!self.showModal) {
            self.element.parent().hide();
            self.clean();
            self.triggerHidden();
          }
          else{
            self.triggerShown();
          }
        });
      }
  }
  
  /* add events for the plugin*/
  gsPop.prototype.close = function() {
    this.element.trigger('gspop.close');
  }

  gsPop.prototype.init = function () {
    var $element = this.element;
    $element.wrap("<div class='gs-Modal-Wrapper "+ this.options.wrapperClasses+"'></div>");
    $element.addClass(this.options.modalClasses + " "+ config.modalPosition);

    if(this.options.backdrop.show) $(`<div class='gs-Overlay'></div>`).appendTo('.gs-Modal-Wrapper');
    $element.parent().hide();
    // to avoid unnecessary hide and shadow
    // By default, user need to add this in their template
    $element.removeClass('hide');
    this.toggle();
  }

  gsPop.prototype.toggle = function(show) {
      var self = this;
      if(show){
        $('body').addClass(self.options.bodyClass);
      } else{
        $('body').removeClass(self.options.bodyClass);
      }

      /*
      *   Show parent
      *   For animation we should not show the Modal
      *   Animation will be shown only on the visibility
      *   So, after adding the animation classes, then add the visibility
      */
      if(show) {
        self.element.parent().show();
        if(!self.options.animate.apply){
          self.showModal();
          setTimeout(function(){
            self.triggerShown();
          },0);
        } else {
          // apply animation
          self.animate(show);
        }
      } else {
        if(!self.options.animate.apply){
          self.hideModal();
          setTimeout(function(){
            self.triggerHidden();
          },0);
        } else {
          // apply animation
          self.animate(show);
        }
      }
  }

  gsPop.prototype.triggerShown = function(){
    this.element.trigger('gspop.shown', this.element);
  }

  gsPop.prototype.triggerHidden = function(){
    this.element.trigger('gspop.hidden', this.element);
  }

  gsPop.prototype.animate = function (show) {
    var visibility = "hidden";
    var self = this;
    var classes = self.options.animate.hide;

    if(show) {
      visibility="visible";
      classes = self.options.animate.show + " " + self.options.modalClasses;
    }

    if(self.options.animate.apply) {
      self.element.removeClass(self.options.animate.hide+" "+ self.options.animate.show);
      self.element.addClass(classes);
      self.showModal = show;
    }
    if(show) self.element.css('visibility', visibility);
  }

  gsPop.prototype.showModal = function(){
    this.element.css('visibility', 'visible');
  }

  gsPop.prototype.hideModal = function(){
    this.element.css('visibility', 'hidden');
    this.element.parent().hide();
  }

  gsPop.prototype.clean = function(){
    var classes = this.options.animate.hide + " " +
                  this.options.animate.show + " " +
                  this.options.modalClasses + " " +
                  config.modalPosition;
    this.element.removeClass(classes);
  }

  $.fn.gsPop = function (options) {
    return this.each(function (i, elm) {
      new gsPop(elm, options);
    });
  }
}(jQuery));
