$(document).ready(function(){
    $('.mouse').mouseenter(function(){
        $(this).fadeTo('fast','0.25');
        });
    $('.mouse').mouseleave(function(){
        $(this).fadeTo('fast', '1');
        });

    $('input').focus(function(){
        $(this).css('background-color','#8D0FC1');
        });
    $('input').blur(function(){
        $(this).css('background-color','#918996');
        });
    });