; (function ($) {
  var defaults =
  {
    bodyText: undefined,
    headerText: undefined,
    theme: "#38b9ff",
    position: "center centered" // 'top center', 'bottom center', 
  }
  var template = $(`<div id="myModal" class="modal gspop">    
          <!-- Modal content -->
          <div class="modal-content">
            <div class="modal-header">
              <h2></h2>
            </div>
            <div class="modal-body">
              <p></p>
            </div>
            <div class="modal-footer">
              <button class="confirm">Confirm</button>
              <button class="cancel">Cancel</button>
            </div>
          </div>      
        </div>`);

  function gsPop(element, options) {
    this.element = element.clone();
    element.remove();
    this.options = options;
    this.config = $.extend({}, defaults, this.options);
    // this.element.on('click', this.$init.bind(this));
    this.$init();
  }

  gsPop.prototype.$init = function () {
    // template.find('.modal-content').addClass(this.config.position);
    // template.find('.modal-header h2').text(this.config.headerText);
    // template.find('.modal-body p').text(this.config.bodyText);
    // template.find('.modal-header').css('background', this.config.theme);
    // template.find('.confirm').css('background',this.config.theme).on('click', yes);
    // template.find('.cancel').on('click', no);
    $('body').append(this.element);
  }

  function yes() {
    // if ($.isFunction(this.yesCallBack))
    //   yesCallBack();
    // else
    alert('confirm Clicked');
    template.remove();

  }

  function no() {
    // if ($.isFunction(this.noCallBack))
    //   noCallBack();
    // else
    alert('cancel Clicked');
    template.remove();
  }
  $.fn.gsPop = function (options) {
   new gsPop(this,options)
     return this;
  }
}
(jQuery))



