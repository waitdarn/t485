


/* Initializers */
/* global firebase $ Singulr */

// Back to top button animation
$(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
        $('#toTop').fadeIn(3000);
    } else {
        $('#toTop').fadeOut();
    }
});


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




/* Helpers */


// Checks if the user is logged in
function auth(onAuthed = () => {}, onUnauthed = () => {}) {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            onAuthed(user);
        } else {
            onUnauthed();
        }
    });
}

$('#eel-289371845').click(() => {
    Singulr.loadPage('easter-eggs.html');
});
$("#eel-2891409832478273094").click(() => Singulr.loadPage('ee.html?token=1XAYiBDXGb6MouIrPZJHBk2ykV6fK2T-ic9A6M7vHef4'));
// Source: http://www.w3schools.com/js/js_cookies.asp
function hashPassword(str) {
    let hash = 0;
    if (str.length === 0) return 0;
    for (let i = 0; i < str.length; i++) {
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

function generateEEID(s1, s2, s3, s4, callback, uid) {

    firebase.database().ref("/ee/u/" + uid + "/ueeid/").once("value").then(function(snapshot){
        var data = snapshot.val();
        callback(s1 + data[1] + "-" + s2 + data[2] + "-" + s3 + data[3] + "-" + s4 + data[4]); 
    });
}

// Fisher-Yates shuffle
function generateRandomNums(r){for(var a=[],n=0;r>n;n++)a[n]=n;for(var o,e,t=r;t;)e=~~(Math.random()*t),t-=1,o=a[t],a[t]=a[e],a[e]=o;return a}


// http://stackoverflow.com/questions/20618355/the-simplest-possible-javascript-countdown-timer
function countdown(n,t,e){function o(){a=n-((Date.now()-c)/1e3|0),u=a/60|0,w=a%60|0,u=10>u?'0'+u:u,w=10>w?'0'+w:w,t.textContent=u+':'+w,0>=a&&('reset'===e||null===e?c=Date.now()+1e3:e())}var a,u,w,c=Date.now();o(),setInterval(o,1e3)}


// http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
function getQuery(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var c=new RegExp("[\\?&]"+e+"=([^&#]*)"),n=c.exec(location.search);return null===n?"":decodeURIComponent(n[1].replace(/\+/g," "))}


// Code from https://gist.github.com/andrei-m/982927#file-levenshtein-js
function compare(t,n){if(0==t.length)return n.length;if(0==n.length)return t.length;var r,e=[];for(r=0;r<=n.length;r++)e[r]=[r];var h;for(h=0;h<=t.length;h++)e[0][h]=h;for(r=1;r<=n.length;r++)for(h=1;h<=t.length;h++)n.charAt(r-1)==t.charAt(h-1)?e[r][h]=e[r-1][h-1]:e[r][h]=Math.min(e[r-1][h-1]+1,Math.min(e[r][h-1]+1,e[r-1][h]+1));return e[n.length][t.length];}

