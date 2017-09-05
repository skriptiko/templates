;(function () {
  'use strict';

    
    function blueasyTabs() {
      let $wrapper = $('.tab-wrapper'),
          $menu = $wrapper.find('.tab-menu li'),
          $content = $wrapper.find('.thumbs-row');
      
      $menu.click(function() {
        let $getWrapper = $(this).closest($wrapper);
        
        $getWrapper.find($menu).find('a').removeClass('active');
        $(this).find('a').addClass('active');
        
      });
        
        let $thumbsCon = $('.thumbs-row div'),
            $thumbsLin = $('.thumbs-row div a');
        
        $('.paronamars').click(function() {
            $thumbsCon.removeClass().addClass('col-md-12');
            $thumbsLin.removeClass().addClass('paronamars-par');
        })
        $('.portreits').click(function() {
            $thumbsCon.removeClass().addClass('col-sm-6');
            $thumbsLin.removeClass().addClass('portreits-par');
        })
        $('.all').click(function() {
            $thumbsCon.removeClass().addClass('col-sm-6 col-md-3');
            $thumbsLin.removeClass();
        })
        
    }
    
    blueasyTabs()
    
    function blueasyMenu() {
      let $trigger = $('.trigger-nav'),
          $menu = $('.trigger-victim');
      
      $trigger.click(function() {
        $(this).next($menu).slideToggle();
      });
      
      $(window).resize(function() {
        if( $(window).width() > 992 ) {
          $menu.removeAttr('style');
        }
      });
    }
    
    blueasyMenu()
  

}());