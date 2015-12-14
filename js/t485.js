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





// you should'nt be looking here. You won't find anything.
//If you are n the easter egg hunt, looking here is aganist the rules, so get out of here.
// We're watching you!

function anonfunction10389(s){
    eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('2b(1X(p,a,c,k,e,d){e=1X(c){1W(c<a?\'\':e(22(c/a)))+((c=c%a)>23?1Y.24(c+29):c.28(2a))};21(!\'\'.20(/^/,1Y)){1Z(c--){d[e(c)]=k[c]||e(c)}k=[1X(e){1W d[e]}];e=1X(){1W\'\\\\w+\'};c=1};1Z(c--){21(k[c]){p=p.20(25 26(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c])}}1W p}(\'1l(1c(p,a,c,k,e,d){e=1c(c){1d(c<a?\\\'\\\':e(1q(c/a)))+((c=c%a)>1r?1g.1t(c+1s):c.1i(1j))};1e(!\\\'\\\'.1h(/^/,1g)){1f(c--){d[e(c)]=k[c]||e(c)}k=[1c(e){1d d[e]}];e=1c(){1d\\\'\\\\\\\\w+\\\'};c=1};1f(c--){1e(k[c]){p=p.1h(1m 1k(\\\'\\\\\\\\b\\\'+e(c)+\\\'\\\\\\\\b\\\',\\\'g\\\'),k[c])}}1d p}(\\\'Q(z(p,a,c,k,e,d){e=z(c){y c.B(P)};A(!\\\\\\\'\\\\\\\'.E(/^/,N)){F(c--){d[c.B(a)]=k[c]||c.B(a)}k=[z(e){y d[e]}];e=z(){y\\\\\\\'\\\\\\\\\\\\\\\\w+\\\\\\\'};c=1};F(c--){A(k[c]){p=p.E(D O(\\\\\\\'\\\\\\\\\\\\\\\\b\\\\\\\'+e(c)+\\\\\\\'\\\\\\\\\\\\\\\\b\\\\\\\',\\\\\\\'g\\\\\\\'),k[c])}}y p}(\\\\\\\'9 0=f e("g://h.d.j/c/1");0.a("b",2(7){9 x=7.i();p(0.r(s)){5.6("u: k "+0.4(s));3[q,0.4(s)]}m{3[n,"o"]}},2(8){5.6("w l t: "+8.v)})\\\\\\\',C,C,\\\\\\\'M||z|y|S|K|H|T|J|I|L|G|R|Y|15|D|14|18|17|1b|1a|19|16|12|W|A|V|U||X|13|11|10|\\\\\\\'.Z(\\\\\\\'|\\\\\\\'),0,{}))\\\',1z,1C,\\\'||||||||||||||||||||||||||||||||||1d|1c|1e|1i|1x|1m|1h|1f|1A|1B|1v|1u|1p|1o|1w|1g|1k|1j|1l|1I|1Q|1O|1S|1N|1R|1T|1U|1n|1V|1P|1L|1F|1E|1D|1G|1H|1M|1K|1J|1y\\\'.1n(\\\'|\\\'),0,{}))\',27,2m,\'||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||1X|1W|21|1Z|1Y|20|28|2a|26|2b|25|2c|2j|2g|22|23|29|24|2E|2D|2F|2G|2C|27|2u|2t|2s|2v|2w|2A|2y|2x|2l|2z|2B|2q|2h|2f|2d|2e|2i|2k|2p|2o|2n|2r\'.2c(\'|\'),0,{}))',62,167,'||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||return|function|String|while|replace|if|parseInt|35|fromCharCode|new|RegExp|62|toString||36|eval|split|snapshot|code|true|console|t485|child|on|hi|ee|120|firebaseio|failed|indexOf|false|The|74|log|value|Firebase|https|val|else|returned|anonfunction10389|read|com|var|errorObject|ab23|34'.split('|'),0,{}))
}


