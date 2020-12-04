$(function(){
    alert('content 1: ' + $('#my_div1').hasScrollBar());
    alert('content 2: ' + $('#my_div2').hasScrollBar());
});

(function($) {
    $.fn.hasScrollBar = function() {
        return this.get(0).scrollHeight > this.height();
    }
})(jQuery);