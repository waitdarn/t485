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
    if (exdays === null || exdays === "" || exdays === "browser" || exdays === 0) {
        document.cookie = cname + "=" + cvalue + "; ";
    } else {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    }
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



var KEY = 'knhq5nac69w1w59mg7jy';


// Checks if the user is logged in
function auth() {
    return sessionStorage.getItem('BN') === KEY;
}


// Sets the session storage for login
function setAuth() {
    sessionStorage.setItem('BN', KEY);
}



function logout() {
    // Clears session storage
    sessionStorage.setItem('BN', '');
    // Unauth Firebase
    var fRef = new Firebase('https://t485auth.firebaseio.com');
    fRef.unauth();
}



// Fisher-Yates shuffle
function generateRandomNums(r){for(var a=[],n=0;r>n;n++)a[n]=n;for(var o,e,t=r;t;)e=~~(Math.random()*t),t-=1,o=a[t],a[t]=a[e],a[e]=o;return a}


// http://stackoverflow.com/questions/20618355/the-simplest-possible-javascript-countdown-timer - more acurate timer
function countdown(duration, display, callback) {
    var start = Date.now(),
        diff,
        minutes,
        seconds;
    function timer() {
        // get the number of seconds that have elapsed since 
        // startTimer() was called
        diff = duration - (((Date.now() - start) / 1000) | 0);

        // does the same job as parseInt truncates the float
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds; 

        if (diff <= 0) {
            // add one second so that the count down starts at the full duration
            // example 05:00 not 04:59
            if (callback === "reset" || callback === null) {
                start = Date.now() + 1000;
            } else {
                callback()
            }
                
        }
    };
    // we don't want to wait a full second before the timer starts
    timer();
    setInterval(timer, 1000);
}


// http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
function getQuery(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    
}