// JavaScript Document


//nav toplineを消す
var _window = $(window),
    _header = $('.menu-1-fix'),
    heroBottom;
 
_window.on('scroll',function(){
    heroBottom = $('.topline').height();
    if(_window.scrollTop() > heroBottom){
        _header.addClass('transform');   
    }
    else{
        _header.removeClass('transform');   
    }
});
 
_window.trigger('scroll');






// スムーズスクロール
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});



$('#toggle-switch-1').click(function(){
        $('#toggle-content-1').slideToggle()
    });

$('#toggle-switch-2').click(function(){
        $('#toggle-content-2').slideToggle()
    });

$('#toggle-switch-3').click(function(){
        $('#toggle-content-3').slideToggle()
    });

$('#toggle-switch-4').click(function(){
        $('#toggle-content-4').slideToggle()
    });

$('#toggle-switch-5').click(function(){
        $('#toggle-content-5').slideToggle()
    });

$('#toggle-switch-6').click(function(){
        $('#toggle-content-6').slideToggle()
    });

$('#toggle-switch-7').click(function(){
        $('#toggle-content-7').slideToggle()
    });

$('#toggle-switch-8').click(function(){
        $('#toggle-content-8').slideToggle()
    });

$('#toggle-switch-9').click(function(){
        $('#toggle-content-9').slideToggle()
    });



$('#trade-manner-botton').click(function(){
        $('#trade-manner').slideToggle()
    });

$('#trade-manner-botton2').click(function(){
        $('#trade-manner2').slideToggle()
    });

$('#trade-manner-botton3').click(function(){
        $('#trade-manner3').slideToggle()
    });

$('#trade-manner-botton4').click(function(){
        $('#trade-manner4').slideToggle()
    });

$('#trade-manner-botton5').click(function(){
        $('#trade-manner5').slideToggle()
    });

$('#trade-manner-botton6').click(function(){
        $('#trade-manner6').slideToggle()
    });

$('#trade-manner-botton7').click(function(){
        $('#trade-manner7').slideToggle()
    });

$('#trade-manner-botton8').click(function(){
        $('#trade-manner8').slideToggle()
    });

$('#trade-manner-botton9').click(function(){
        $('#trade-manner9').slideToggle()
    });






















$('#mobile-botton-pet').click(function(){
        $('#mobile-toggle-pet').slideToggle()
    });

$('#mobile-botton-bin').click(function(){
        $('#mobile-toggle-bin').slideToggle()
    });

$('#mobile-botton-kan').click(function(){
        $('#mobile-toggle-kan').slideToggle()
    });


$('#mobile-botton-metal').click(function(){
        $('#mobile-toggle-metal').slideToggle()
    });


$('#mobile-botton-paper').click(function(){
        $('#mobile-toggle-paper').slideToggle()
    });


$('#mobile-botton-cloth').click(function(){
        $('#mobile-toggle-cloth').slideToggle()
    });


$('#mobile-botton-kanen').click(function(){
        $('#mobile-toggle-kanen').slideToggle()
    });


$('#mobile-botton-hunen').click(function(){
        $('#mobile-toggle-hunen').slideToggle()
    });

$('#mobile-botton-yuugai').click(function(){
        $('#mobile-toggle-yuugai').slideToggle()
    });










