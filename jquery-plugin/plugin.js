;(function($){
    $.fn.myplugin= function(options,yesCallBack,noCallBack)
    {
        var defaults =
        {
          bodyText:"Do you confirm this Action?",
          headerText:"Confirmation Dialog",
          themeColor:"#38b9ff",
          dialogPosition:"centered"
        }  

        var config=$.extend({},defaults,options);

        this.on('click',dothis);

        function dothis()
        {
          var template=
          $(`<div id="myModal" class="modal">    
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
               
          template.find('.modal-content').addClass(config.dialogPosition);
          template.find('.modal-header h2').text(config.headerText);
          template.find('.modal-body p').text(config.bodyText);
          template.find('#conf').css('background',config.themeColor).on('click',yes);
          template.find('#canc').on('click',no);        
          template.find('.modal-header').css('background',config.themeColor);
  
          $('body').append(template);
  
        }

        function yes(){
          
          if($.isFunction(yesCallBack))
            yesCallBack();
          else
          alert('confirm Clicked');
          $('#myModal').remove();     

        }

        function no(){
          if($.isFunction(noCallBack))
            noCallBack();
          else
          alert('cancel Clicked');
          $('#myModal').remove();
        }
 
        }
}(jQuery))



