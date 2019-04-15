$(".progress-bar").each(function(){
    var bar = $(this).find(".bar");
    var val = $(this).find("span");
    var per = parseInt( val.text(), 10);
    var $right = $('.right');
    var $back = $('.back');

    $({p:0}).animate({p:per}, {
        duration: 3000,
        step: function(p) {
            bar.css({
                transform: "rotate("+ (45+(p*1.8)) +"deg)"
            });
            val.text(p|0);
        }
    }).delay( 200 );

    if (per == 100) {
        $back.delay( 2600 ).animate({'top': '18px'}, 200 );
    }

    if (per == 0) {
        $('.left').css('background', 'gray');
    }


});