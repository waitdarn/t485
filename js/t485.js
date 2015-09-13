// Back to top button animation
$(window).scroll(function() { var x = $(this).scrollTop() !== 0 ? $('#toTop').fadeIn(3000) : $('#toTop').fadeOut(); });
$('#toTop').click(function() { $('body').animate({scrollTop: 0}, 800); });

// Set LESS async to true to prevent warning on Chrome
less = {async: true};


var faqopen = false;
$('#faq-dropdown').click(function () {
    if (!faqopen) {
        $(".navbar-nav dropdown #faq-dropdown").parent().addClass('open');
        faqopen = true;
    } else {
        $(".navbar-nav dropdown #faq-dropdown").parent().removeClass('open');
    }
});

var resourceopen = false;
$('#resource-dropdown').click(function () {
    if (!resourceopen) {
        $(".navbar-nav dropdown #resource-dropdown").parent().addClass('open');
        resourceopen = true;
    } else {
        $(".navbar-nav dropdown #resource-dropdown").parent().removeClass('open');
    }
});

var directoryopen = false;
$('#directory-dropdown').click(function () {
    if (!directoryopen) {
        $(".navbar-nav dropdown #directory-dropdown").parent().addClass('open');
        directoryopen = true;
    } else {
        $(".navbar-nav dropdown #directory-dropdown").parent().removeClass('open');
    }
});
