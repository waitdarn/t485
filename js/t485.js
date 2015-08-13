// Back to top button animation
$(function() {
    $(window).scroll(function() {
        var x = $(this).scrollTop();
        var ver = getInternetExplorerVersion();
        // no fade animation (transparency) if IE8 or below
        if ( ver > -1 && ver <= 8 ) {
            if(x !== 0) {
                $('#toTop').show();
            } else {
                $('#toTop').hide();
            }
        // fade animation if not IE8 or below
        } else {
            if(x !== 0) {
                $('#toTop').fadeIn(3000);
            } else {
                $('#toTop').fadeOut();
            }
        }
    });
    $('#toTop').click(function() {
        $('body,html').animate({ scrollTop: 0 }, 800);
    });
});

// Returns the version of Internet Explorer or a -1
// (indicating the use of another browser).
function getInternetExplorerVersion() {
    var rv = -1; // Return value assumes failure.
    if (navigator.appName == 'Microsoft Internet Explorer') {
        var ua = navigator.userAgent;
        var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) !== null) {
            rv = parseFloat( RegExp.$1 );
        }
    }
    return rv;
}
