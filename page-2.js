(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery||window.Zepto);
 $.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

$(document).ready(function() {
r = function() {
if($(window).width() >= 960) {
$('.img-3').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/madewithsparkle-12-2.png' : 'images/madewithsparkle-8-2.png') : 'images/madewithsparkle-4-2.png');
} else {
$('.img-3').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/madewithsparkle-12.png' : 'images/madewithsparkle-8.png') : 'images/madewithsparkle-4.png');
}
};
$(window).resize(r);
r();

});