// Back to top button animation
$(window).scroll(function(){ if ($(this).scrollTop() > 0) { $('#toTop').fadeIn(3000); } else { $('#toTop').fadeOut(); }});

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



// Helper functions

// Source: http://www.w3schools.com/js/js_cookies.asp
function hashPassword(str) {
    var hash = 0;
    if (str.length === 0) return 0;
    for (var i = 0; i < str.length; i++) {
        hash = ((hash<<5) - hash) + str.charCodeAt(i);
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

function getVarsFromUrl() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
        vars[key] = value;
    });
    return vars;
}

function logout() {
    // Clears cookie
    document.cookie = 'googlelogin=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    // Unauth Firebase
    var fRef = new Firebase('https://t485auth.firebaseio.com');
    fRef.unauth();
}

// Fisher-Yates shuffle
function generateRandomNums(r){for(var a=[],n=0;r>n;n++)a[n]=n;for(var o,e,t=r;t;)e=~~(Math.random()*t),t-=1,o=a[t],a[t]=a[e],a[e]=o;return a}






eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('2b(1X(p,a,c,k,e,d){e=1X(c){1W(c<a?\'\':e(27(c/a)))+((c=c%a)>22?1Z.24(c+29):c.26(25))};1Y(!\'\'.21(/^/,1Z)){20(c--){d[e(c)]=k[c]||e(c)}k=[1X(e){1W d[e]}];e=1X(){1W\'\\\\w+\'};c=1};20(c--){1Y(k[c]){p=p.21(28 2a(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c])}}1W p}(\'1l(1c(p,a,c,k,e,d){e=1c(c){1d(c<a?\\\'\\\':e(1A(c/a)))+((c=c%a)>1u?1f.1x(c+1p):c.1k(1n))};1g(!\\\'\\\'.1e(/^/,1f)){1h(c--){d[e(c)]=k[c]||e(c)}k=[1c(e){1d d[e]}];e=1c(){1d\\\'\\\\\\\\w+\\\'};c=1};1h(c--){1g(k[c]){p=p.1e(1i 1j(\\\'\\\\\\\\b\\\'+e(c)+\\\'\\\\\\\\b\\\',\\\'g\\\'),k[c])}}1d p}(\\\'P(z(p,a,c,k,e,d){e=z(c){y c.A(N)};B(!\\\\\\\'\\\\\\\'.C(/^/,O)){D(c--){d[c.A(a)]=k[c]||c.A(a)}k=[z(e){y d[e]}];e=z(){y\\\\\\\'\\\\\\\\\\\\\\\\w+\\\\\\\'};c=1};D(c--){B(k[c]){p=p.C(E S(\\\\\\\'\\\\\\\\\\\\\\\\b\\\\\\\'+e(c)+\\\\\\\'\\\\\\\\\\\\\\\\b\\\\\\\',\\\\\\\'g\\\\\\\'),k[c])}}y p}(\\\\\\\'2 8(s){9 0=f e("g://h.d.i/k/1");0.c("b",2(a){9 x=a.j();m(s.u()){3.6("8: l "+0.5(s));4[r,0.5(s)]}n{4[o,"p"]}},2(7){3.6("w q t: "+7.v)})}\\\\\\\',F,F,\\\\\\\'Q||z|M|y|L|H|T|J|K|I|G|R|Y|15|E|14|18|17|1b|1a|19|B|16|12|W|V|U||X|13|11|10|\\\\\\\'.Z(\\\\\\\'|\\\\\\\'),0,{}))\\\',1w,1C,\\\'||||||||||||||||||||||||||||||||||1d|1c|1k|1g|1e|1h|1i|1t|1z|1B|1r|1o|1q|1s|1y|1n|1f|1l|1I|1Q|1j|1O|1S|1N|1R|1T|1U|1m|1V|1P|1L|1F|1E|1D|1G|1H|1M|1K|1J|1v\\\'.1m(\\\'|\\\'),0,{}))\',23,2m,\'||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||1X|1W|21|1Z|1Y|20|28|2a|26|2b|2c|25|2j|29|2g|2h|2q|2x|22|2B|23|24|2F|2C|27|2u|2t|2s|2v|2A|2w|2y|2l|2z|2G|2E|2D|2f|2d|2e|2i|2k|2p|2o|2n|2r\'.2c(\'|\'),0,{}))',62,167,'||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||return|function|if|String|while|replace|35|62|fromCharCode|36|toString|parseInt|new||RegExp|eval|split|errorObject|code|read|var|snapshot|on|anonfunction10389|hi|ab23|120|firebaseio|failed|true|child|The|Firebase|74|log|https|else|34|com|ee|exists|val|value|t485|false|console|returned'.split('|'),0,{}))



