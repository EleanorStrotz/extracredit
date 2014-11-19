function parallaxIt() {
  'use strict';

  var $fwindow = $(window);
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  $fwindow.on('scroll resize', function() {
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  }); 

  $('[data-type="content"]').each(function (index, e) {
    var $contentObj = $(this);
    var fgOffset = parseInt($contentObj.offset().top);
    var yPos;

    $fwindow.on('scroll resize', function (){
      yPos = fgOffset - scrollTop / ($contentObj.data('speed') || 1 ); 

      $contentObj.css('top', yPos);
    });
  });

  $('[data-type="background"]').each(function(){
    var $backgroundObj = $(this);
    var bgOffset = parseInt($backgroundObj.offset().top);
    var yPos;
    var coords;

    $fwindow.on('scroll resize', function() {
      yPos = - ((scrollTop - bgOffset) / ($backgroundObj.data('speed') || 0 )); 
      coords = '50% '+ yPos + 'px';

      $backgroundObj.css({ backgroundPosition: coords });
    }); 
  }); 

  $fwindow.trigger('scroll');
};

parallaxIt();
