// Back to top button animation
$(window).scroll(function() { var x = $(this).scrollTop() !== null ? $('#toTop').fadeIn(3000) : $('#toTop').fadeOut(); });
$('#toTop').click(function() { $('body').animate({scrollTop: 0}, 800); });

// Set LESS async to true to prevent warning on Chrome
less = {async: true};

// Fix dropdown menu bug on iOS
$('.dropdown a').click(function() { var x = $(this).parent().hasClass('open') ? $(this).removeClass('open') : $(this).addClass('open'); });
