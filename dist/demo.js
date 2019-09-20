
    $(document).ready(function(){
        var modal = $('#gs-Modal-default').gsPop();
        $('#here').on('click',function(){
          modal.trigger('gspop.open');
        });

        modal.on('gspop.shown', function(e, elem){
            console.log('gspop showed');
        });
        modal.on('gspop.hidden', function(e, elem){
          console.log('gspop hidden');
        });
    });