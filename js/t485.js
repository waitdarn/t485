// Back to top button animation
$(window).scroll(function(){ x = $(this).scrollTop() > 0 ? $('#toTop').fadeIn(3000) : $('#toTop').fadeOut(); });
$('#toTop').click(function(){ $('body,html').animate({scrollTop: 0}, 800); });

// Set LESS async to true to prevent warning on Chrome
less = {async: true};

// Fix dropdown menu bug on iOS
$('.dropdown a').click(function() { x = $(this).parent().hasClass('open') ? $(this).parent().removeClass('open') : $(this).parent().addClass('open'); });
