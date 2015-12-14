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
//If you are in the easter egg hunt, looking here is aganist the rules, so get out of here.
// We're watching you!

function anonfunction10389(s){
    eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('1l(1c(p,a,c,k,e,d){e=1c(c){1d(c<a?\'\':e(1y(c/a)))+((c=c%a)>1q?1h.1s(c+1r):c.1i(1k))};1g(!\'\'.1f(/^/,1h)){1e(c--){d[e(c)]=k[c]||e(c)}k=[1c(e){1d d[e]}];e=1c(){1d\'\\\\w+\'};c=1};1e(c--){1g(k[c]){p=p.1f(1m 1j(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c])}}1d p}(\'P(z(p,a,c,k,e,d){e=z(c){y c.B(O)};A(!\\\'\\\'.E(/^/,M)){F(c--){d[c.B(a)]=k[c]||c.B(a)}k=[z(e){y d[e]}];e=z(){y\\\'\\\\\\\\w+\\\'};c=1};F(c--){A(k[c]){p=p.E(D N(\\\'\\\\\\\\b\\\'+e(c)+\\\'\\\\\\\\b\\\',\\\'g\\\'),k[c])}}y p}(\\\'8 0=f e("g://h.d.i/k/1");0.c("b",3(9){8 x=9.a();j(x.t(s)){2.6("u: l "+0.5(s));4[r,0.5(s)]}n{4[o,"p"]}},3(7){2.6("w m q: "+7.v)})}\\\',C,C,\\\'R||L|z|y|S|H|T|I|J|K|G|Q|Y|15|D|14|18|17|A|1b|1a|19|16|12|W|V|U||X|13|11|10|\\\'.Z(\\\'|\\\'),0,{}))\',1x,1B,\'||||||||||||||||||||||||||||||||||1d|1c|1g|1i|1w|1m|1f|1e|1z|1u|1A|1t|1o|1p|1h|1j|1k|1l|1I|1Q|1O|1S|1N|1R|1T|1U|1V|1n|1P|1L|1F|1E|1D|1C|1G|1H|1M|1K|1J|1v\'.1n(\'|\'),0,{}))',62,120,'||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||function|return|while|replace|if|String|toString|RegExp|36|eval|new|split|val|console|35|29|fromCharCode|snapshot|log|ee|34|62|parseInt|value|var|74|Firebase|https|anonfunction10389|false|else|com|on|returned|read|code|t485|true|child|The|ab23|failed|errorObject|hi|indexOf|firebaseio'.split('|'),0,{}))
}


