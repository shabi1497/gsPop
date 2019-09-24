
    $(document).ready(function(){
        var modal = $('#gs-Modal-default').gsPop();
        $('#default-config-btn').on('click',function(){
          modal.trigger('gspop.open');
        });

        modal.on('gspop.shown', function(e, elem){
            console.log('gspop showed');
        });
        modal.on('gspop.hidden', function(e, elem){
          console.log('gspop hidden');
        });

        $('#anime-config-btn').on('click',function(){
          var animeIn = $('#anime-in').val();
          var animeOut = $('#anime-out').val();
          var position = $('#position').val();

          $('#gs-Modal-anime').gsPop({
            wrapperClasses: "gspop-position "+position,
            animate: {
              apply: true,
              hide: 'animated '+animeOut,
              show: 'animated '+animeIn
            }
          }).trigger('gspop.open');
         
        });
    });