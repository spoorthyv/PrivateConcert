(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery||window.Zepto);
 $.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

$(document).ready(function() {
r = function() {
if($(window).width() >= 960) {
$('.img').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/p-copy-oval-1-copy-306.png' : 'images/p-copy-oval-1-copy-204.png') : 'images/p-copy-oval-1-copy-102-2.png');
var a='data-lazy'; if($('.gallery .slide0').hasAttr('src')) { a='src'; } $('.gallery .slide0').attr(a, (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/rsz_group_1-933.png' : 'images/rsz_group_1-622.png') : 'images/rsz_group_1-311.png');
var a='data-lazy'; if($('.gallery .slide1').hasAttr('src')) { a='src'; } $('.gallery .slide1').attr(a, (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/rsz_group_2-933.png' : 'images/rsz_group_2-622.png') : 'images/rsz_group_2-311.png');
var a='data-lazy'; if($('.gallery .slide2').hasAttr('src')) { a='src'; } $('.gallery .slide2').attr(a, (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/rsz_group_4-933.png' : 'images/rsz_group_4-622.png') : 'images/rsz_group_4-311.png');
var a='data-lazy'; if($('.gallery .slide3').hasAttr('src')) { a='src'; } $('.gallery .slide3').attr(a, (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/rsz_group_1_copyicon-933.png' : 'images/rsz_group_1_copyicon-622.png') : 'images/rsz_group_1_copyicon-311.png');
$('.img-2').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/madewithsparkle-3-2.png' : 'images/madewithsparkle-2-2.png') : 'images/madewithsparkle-1-2.png');
} else {
$('.img').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/p-copy-oval-1-copy-102.png' : 'images/p-copy-oval-1-copy-68.png') : 'images/p-copy-oval-1-copy-34.png');
var a='data-lazy'; if($('.gallery .slide0').hasAttr('src')) { a='src'; } $('.gallery .slide0').attr(a, (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/rsz_group_1-312.png' : 'images/rsz_group_1-208.png') : 'images/rsz_group_1-104.png');
var a='data-lazy'; if($('.gallery .slide1').hasAttr('src')) { a='src'; } $('.gallery .slide1').attr(a, (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/rsz_group_2-312.png' : 'images/rsz_group_2-208.png') : 'images/rsz_group_2-104.png');
var a='data-lazy'; if($('.gallery .slide2').hasAttr('src')) { a='src'; } $('.gallery .slide2').attr(a, (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/rsz_group_4-312.png' : 'images/rsz_group_4-208.png') : 'images/rsz_group_4-104.png');
var a='data-lazy'; if($('.gallery .slide3').hasAttr('src')) { a='src'; } $('.gallery .slide3').attr(a, (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/rsz_group_1_copyicon-312.png' : 'images/rsz_group_1_copyicon-208.png') : 'images/rsz_group_1_copyicon-104.png');
$('.img-2').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/madewithsparkle-3.png' : 'images/madewithsparkle-2.png') : 'images/madewithsparkle-1.png');
}
};
$(window).resize(r);
r();
$('.gallery .slider').slick({lazyLoad: 'ondemand',slidesToShow: 1,slidesToScroll: 1,fade: true,slide: 'div',cssEase: 'linear',speed: 300,dots: false,arrows: true,infinite: true});
});