// Back to top button animation
$(window).scroll(function(){ if ($(this).scrollTop() > 0) { $('#toTop').fadeIn(3000); } else { $('#toTop').fadeOut(); }});
$('#toTop').click(function(){ $('body,html').animate({scrollTop: 0}, 800); });

// Set LESS async to true to prevent warning on Chrome
less = {async: true};

// Fix dropdown menu bug on iOS
$('.dropdown a').click(function() {
    if ($(this).parent().hasClass('open')) {
        $(this).parent().removeClass('open');
    } else {
        $('.dropdown').removeClass('open');
        $(this).parent().addClass('open');
    }
});

function hashPassword(str) {
    var hash = 0;
    if (str.length === 0) return 0;
    for (var i = 0; i < str.length; i++) {
        hash = ((hash<<5) - hash) + str.charCodeAt(i);
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}
