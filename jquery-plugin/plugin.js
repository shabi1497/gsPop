; (function ($) {
  var defaults =
  {
    bodyText: undefined,
    headerText: undefined,
    theme: "#38b9ff",
    position: "center centered" // 'top center', 'bottom center', 
  }
  var template = $(`<div id="myModal" class="modal">    
          <!-- Modal content -->
          <div class="modal-content">
            <div class="modal-header">
              <h2></h2>
            </div>
            <div class="modal-body">
              <p></p>
            </div>
            <div class="modal-footer">
              <button id="conf">Confirm</button>
              <button id="canc">Cancel</button>
            </div>
          </div>      
        </div>`);

  function gsPop(element, options) {
    this.element = element;
    this.options = options;
    this.config = $.extend({}, defaults, this.options);
    this.element.on('click', this.$init.bind(this));
  }

  gsPop.prototype.$init = function () {
    template.find('.modal-content').addClass(this.config.position);
    template.find('.modal-header h2').text(this.config.headerText);
    template.find('.modal-body p').text(this.config.bodyText);
    template.find('.modal-header').css('background', this.config.theme);
    template.find('#conf').css('background',this.config.theme).on('click', yes);
    template.find('#canc').on('click', no);
    $('body').append(template);
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
    new gsPop(this, options)
    return this;
  }
}
(jQuery))



