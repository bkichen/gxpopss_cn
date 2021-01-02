/**
 * @namespace:
 * @description:
 * @author: lanyf
 * @update: lanyf on 2016/7/12 10:59
 * @version: 1.0
 */
$(function(){
    $('#nav>li').hover(function(){
        $(this).children('a').addClass('hover');
        $(this).children('.menu').show();
    },function(){
        $(this).children('a').removeAttr('class');
        $(this).children('.menu').hide ();
    });
    $('.flexslider').flexslider({
        animation: "slide",
        direction:"horizontal",
        easing:"swing"
    });
    /*$('#slider2').flexslider({
        animation: "slide",
        direction:"horizontal",
        easing:"swing"
        //slideshow: false
    });*/
});