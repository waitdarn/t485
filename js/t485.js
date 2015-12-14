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

eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('1n(1g(p,a,c,k,e,d){e=1g(c){1h(c<a?\'\':e(1D(c/a)))+((c=c%a)>1A?1j.1B(c+1u):c.1r(1p))};1k(!\'\'.1i(/^/,1j)){1l(c--){d[e(c)]=k[c]||e(c)}k=[1g(e){1h d[e]}];e=1g(){1h\'\\\\w+\'};c=1};1l(c--){1k(k[c]){p=p.1i(1m 1o(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c])}}1h p}(\'R(B(p,a,c,k,e,d){e=B(c){A c.P(D)};C(!\\\'\\\'.G(/^/,Q)){F(c--){d[e(c)]=k[c]||e(c)}k=[B(e){A d[e]}];e=B(){A\\\'\\\\\\\\w+\\\'};c=1};F(c--){C(k[c]){p=p.G(E O(\\\'\\\\\\\\b\\\'+e(c)+\\\'\\\\\\\\b\\\',\\\'g\\\'),k[c])}}A p}(\\\'1 6(s){5 0=h g("i://.j.k/f/l-d/a/b");0.c("e",1(4){5 x=4.v();z(s.u()){9.8("6: y "+0.3(s))2[t,0.3(s)]}o{2[p,"q"]}},1(7){9.8("n r m: "+7.w)})}\\\',D,D,\\\'S|B|A|T|V|N|H|W|J|I|K|M|L|U|12|19|1c|E|18|1b|1f|1d|1e|1a|16|10|Z|Y||X|11|17|15||14|C\\\'.13(\\\'|\\\'),0,{}))\',1z,1F,\'||||||||||||||||||||||||||||||||||||1h|1g|1k|1p|1m|1l|1i|1x|1C|1E|1v|1s|1t|1w|1o|1r|1j|1n|1M|1V|1T|1X|1S|1W|1Z|1Y|21|20|1U|1q|1Q|1J|1I|1H|1G|1K|1L|1R|1P|1O|1N|1y\'.1q(\'|\'),0,{}))',62,126,'||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||function|return|replace|String|if|while|new|eval|RegExp|36|split|toString|on|posts|29|fireblog|var|anonfunction10389|com|62|35|fromCharCode|console|parseInt|log|78|https|val|else|code|web|The|ab23|failed|saving|Firebase|returned|firebaseio|errorObject|data|value|child|true|snapshot|hi|read|exists|false'.split('|'),0,{}))