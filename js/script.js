(document).ready(function(){
    $('.mouse').mouseenter(function(){
        $(this).fadeTo('fast','1');
        });
    $('.mouse').mouseleave(function(){
        $(this).fadeTo('fast', '0.25');
        });
    });