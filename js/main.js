// code for parallax js

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

//nav bar code js
// Create a clone of the menu, right next to original.
$('.menu').addClass('original').clone().insertAfter('.menu').addClass('cloned').css('position','fixed').css('top','0').css('margin-top','0').css('z-index','500').removeClass('original').hide();

scrollIntervalID = setInterval(stickIt, 10);


function stickIt() {

  var orgElementPos = $('.original').offset();
  orgElementTop = orgElementPos.top;               
