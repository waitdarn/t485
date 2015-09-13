// Back to top button animation
$(window).scroll(function() { var x = $(this).scrollTop() !== 0 ? $('#toTop').fadeIn(3000) : $('#toTop').fadeOut(); });
$('#toTop').click(function() { $('body').animate({scrollTop: 0}, 800); });

// Set LESS async to true to prevent warning on Chrome
less = {async: true};

toggleMenuOnClick();


function toggleMenuOnClick() {

}
