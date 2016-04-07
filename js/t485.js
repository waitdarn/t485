/* global Firebase */

// Back to top button animation
$(window).scroll(function(){ if ($(this).scrollTop() > 0) { $('#toTop').fadeIn(3000); } else { $('#toTop').fadeOut(); }});

// Set LESS async to true to prevent warning on Chrome
less = {async: true};

// Init skrollr
skrollr.init();



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


function setCookie(e,o,i){if(null===i||''===i||'browser'===i||0===i)document.cookie=e+'='+o+'; ';else{var t=new Date;t.setTime(t.getTime()+24*i*60*60*1e3);var n='expires='+t.toUTCString();document.cookie=e+'='+o+'; '+n}}


function getCookie(t){for(var n=t+'=',r=document.cookie.split(';'),e=0;e<r.length;e++){for(var i=r[e];' '==i.charAt(0);)i=i.substring(1);if(0==i.indexOf(n))return i.substring(n.length,i.length)}return''}


function getVarsFromUrl() {
    var vars = {};
    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
        vars[key] = value;
    });
    return vars;
}



/* BEGIN LOGIN FUNCTIONS */


// Checks if the user is logged in
/* Prefered: Firebase */
function auth(onAuthed, onUnauthed) {
    console.log('running auth');
    // Get necessary scripts (Firebase)
    if (typeof Firebase !== 'function') {
        $.getScript('https://cdn.firebase.com/js/client/2.4.0/firebase.js', function() {
            mainAuth(onAuthed, onUnauthed);
        });
    } else {
        mainAuth(onAuthed, onUnauthed);
    }
}


function mainAuth(onAuthed, onUnauthed) {
    console.log('running mainAuth');
    var ref = new Firebase("https://t485auth.firebaseio.com");
    
    $.get('members', function(response) {
        var members = response.split('\n');
    
        ref.onAuth(function(authData) {
            console.log(authData);
            var authed;
            
            if (authData === null || authData === undefined) {
                authed = false;
            } else if (members.indexOf(authData.google.email) > -1 && ref.getAuth() !== null) {
                authed = true;
            }
            
            console.log('auth status: ' + authed);
    
            /* USE IN EMERGENCY: DISABLE LOGIN */
            // authed = true;
            // Run callbacks
            if (authed) {
                if (typeof onAuthed === 'function') onAuthed();
            } else {
                if (typeof onUnauthed === 'function') onUnauthed();
            }
        });
    });
}

/* END LOGIN FUNCTIONS */



// Fisher-Yates shuffle
function generateRandomNums(r){for(var a=[],n=0;r>n;n++)a[n]=n;for(var o,e,t=r;t;)e=~~(Math.random()*t),t-=1,o=a[t],a[t]=a[e],a[e]=o;return a}


// http://stackoverflow.com/questions/20618355/the-simplest-possible-javascript-countdown-timer
function countdown(n,t,e){function o(){a=n-((Date.now()-c)/1e3|0),u=a/60|0,w=a%60|0,u=10>u?'0'+u:u,w=10>w?'0'+w:w,t.textContent=u+':'+w,0>=a&&('reset'===e||null===e?c=Date.now()+1e3:e())}var a,u,w,c=Date.now();o(),setInterval(o,1e3)}


// http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
function getQuery(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var c=new RegExp("[\\?&]"+e+"=([^&#]*)"),n=c.exec(location.search);return null===n?"":decodeURIComponent(n[1].replace(/\+/g," "))}

function checkIfName(name) {
    return /^(?:(([A-Z]{1}[a-z]{1,})|([a-z]{2,})) (([A-Z]{1}[a-z]{1,})|([a-z]{2,})))$/gm.test(name);
}

function mail(recipents, subject, content, from) {
    $.post('mail.php', {
        'recipents': recipents,
        'subject': subject,
        'content': content,
        'from': from
    }, function(result) {});
}