/* global Fingerprint2 */
/* global Firebase */

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


// Updated 2/19/2016, 202 members
var members = [
    '12345ryanwang@gmail.com', 'acfkong@yahoo.com', 'albertwang0214@gmail.com', 'alexz12398@gmail.com', 'andrewzheng8@gmail.com', 'anitaylin@yahoo.com',
    'annie.zhu.ouyang@gmail.com', 'artbowong@gmail.com', 'baronwang1021@gmail.com', 'bowenjiang@gmail.com', 'brandon_z_zhang@yahoo.com', 'brandonykli@gmail.com',
    'bsa485@gmail.com', 'chang_chiwei@yahoo.com', 'chenchen4937@gmail.com', 'chhuangw@msn.com', 'cindycui1239@gmail.com', 'cindycui4461239@yahoo.com.cn',
    'clarawong.ss@gmail.com', 'clpcl88@gmail.com', 'cnlau1235@yahoo.com', 'conan1235@gmail.com', 'cooperred@gmail.com', 'ct_kao@yahoo.com', 'dalunbao@yahoo.com',
    'danielcyao@gmail.com', 'danielningx80@gmail.com', 'danielzlin@yahoo.com', 'danimal0221@gmail.com', 'daping.zhang@gmail.com', 'david021301@gmail.com',
    'davidccho@gmail.com', 'davidleemail12@gmail.com', 'dday4040@gmail.com', 'djy20w@gmail.com', 'dylantsai1999@yahoo.com', 'eaglebenjamint@gmail.com',
    'edbertjao@gmail.com', 'eric.z.car@gmail.com', 'ethan_lian@tsmc.com', 'ethanlian@gmail.com', 'euray4201@gmail.com', 'fchen1991@gmail.com',
    'forestyang80@gmail.com', 'frankyao333@gmail.com', 'fwong94306@gmail.com', 'garrick.chang@gmail.com', 'gcao_99@yahoo.com', 'glenchen1056@gmail.com',
    'gogodandan@gmail.com', 'guan.jonathan1@gmail.com', 'guandenise@sbcglobal.net', 'guolin.yang@gmail.com', 'guoshu8101@gmail.com', 'gxxk.max@gmail.com',
    'hagenzhang2015@gmail.com', 'haimingt@yahoo.com', 'hjacobho@gmail.com', 'hnie71@gmail.com', 'ho.calvin3@gmail.com', 'hong.chen@gmail.com',
    'hongz2002@gmail.com', 'huis.family@gmail.com', 'humbbringer@gmail.com', 'icestormf1@gmail.com', 'itachijc@yahoo.com', 'jacobnie2008@gmail.com',
    'jamesouyang2003@gmail.com', 'janet_yau@yahoo.com', 'jed.lee9@gmail.com', 'jeddhui@gmail.com', 'jedlee9@yahoo.com', 'jeffmeng7@gmail.com',
    'jeremiahlb7@yahoo.com', 'jerry_zhang@bd.com', 'jianjyao@gmail.com', 'jihengkao@gmail.com', 'jim_mei@hotmail.com', 'jimball234@gmail.com',
    'jingchen72@gmail.com', 'jinyudoudou@hotmail.com', 'jjustinx@gmail.com', 'jlai95014@yahoo.com', 'jody1020@aol.com', 'joekuo99@gmail.com', 'johnny@chenhome.org',
    'johnson_kou@yahoo.com', 'jonathan.ty.lu@gmail.com', 'josephinedlee@gmail.com', 'josh@chenhome.org', 'joshuazmei31@gmail.com', 'joyjoycelia@gmail.com',
    'justin1998@gmail.com', 'jyqiao@gmail.com', 'ks3101@163.com', 'kwei8620826@gmail.com', 'kzhang99@gmail.com', 'kzheng888@gmail.com', 'lakeman@gmail.com',
    'lancew2012@gmail.com', 'lanshen2008@gmail.com', 'lawawsomeboy@gmail.com', 'lee.jayson.jayson@gmail.com', 'leonlau313@gmail.com', 'lg9393@gmail.com',
    'lihongc@gmail.com', 'lili_yi@yahoo.com', 'lilylau313@gmail.com', 'linda.c.bao@gmail.com', 'lindacai@yahoo.com', 'liyuchen2000@yahoo.com', 'lniu001@gmail.com',
    'lo_chien@yahoo.com', 'loveneverfails.kuo@gmail.com', 'lsun2011@gmail.com', 'lw2354@163.com', 'lw2354@yahoo.com', 'margaret.z.zhao@gmail.com',
    'margaret_zhao@hotmail.com', 'matt.tsai.55@gmail.com', 'maxwellkchan@gmail.com', 'melody@chenhome.org', 'melodyxiong711@gmail.com', 'minmma@gmail.com',
    'mtham88@yahoo.com', 'oliversguan@gmail.com', 'ouyang2007@gmail.com', 'Panlin_us@yahoo.com', 'patricky168@gmail.com', 'peilinjiang2007@gmail.com',
    'pow827@gmail.com', 'qiaodavid5@gmail.com', 'qip1801@163.com', 'qip2636@gmail.com', 'rhsieh2005@yahoo.com', 'richy.liu.2002@gmail.com', 'ruili2000@hotmail.com',
    'rzhsieh2013@gmail.com', 'samng_ccf@yahoo.com', 'samuelting@gmail.com', 'samuelting@yahoo.com', 'samuelwong.lh@gmail.com', 'sc.ivy.hsu@gmail.com',
    'scouting@garricka.com', 'scoutingiscool99@yahoo.com', 'scoutingisfun88@yahoo.com', 'sherry_zhangyu@yahoo.com', 'shujenjao@gmail.com',
    'shuqingli2007@gmail.com', 'sismmk@gmail.com', 'Skyblue1086@gmail.co', 'skyblue1086@gmail.com', 'stardust.us50@gmail.com', 'stevenjiang2004@gmail.com',
    'stevenkou@gmail.com', 'syzcpatax@gmail.com', 't485bsa@yahoo.com', 'tedleeteam@gmail.com', 'tedylee@live.com', 'tehhenyu@gmail.com', 'tehhenyu@hotmail.com',
    'tengo1627@gmail.com', 'teresapan11@gmail.com', 'teresawang168@gmail.com', 'the.casper.wu@gmail.com', 'tianyue.t.yang@gmail.com', 'timothyl201@gmail.com',
    'tjzhoupj@gmail.com', 'tracey.meng@gmail.com', 'twong_@yahoo.com', 'unknownsoul98910@gamil.com', 'unknownsyrum@gmail.com', 'vanrookjs@gmail.com',
    'vivawind@gmail.com', 'vivian_tang@yahoo.com', 'weihongzhang@hotmail.com', 'wen.zhu2006@gmail.com', 'whzhang99@gmail.com', 'williamjao@yahoo.com',
    'winnietu@yahoo.com', 'wmwcomp@hotmail.com', 'wongfelicia808@gmail.com', 'xiaochen133@gmail.com', 'xiaotong_he@yahoo.com', 'xichen06@gmail.com',
    'xie_bo@hotmail.com', 'xujian_us@yahoo.com', 'yanfangz@yahoo.com', 'yao.sharon@gmail.com', 'yayperry@gmail.com', 'yijiehuang77@gmail.com',
    'yinghailu@gmail.com', 'yoweiliu@gmail.com', 'yuanwen@gmail.com', 'yuhua_c2000@yahoo.com', 'yunchunli@gmail.com', 'yzxn@ymail.com', 'zhaomei_zhang@yahoo.com',
    'zlpac05@gmail.com', 'zonghuan.wu@gmail.com', 'loyoloy402@gmail.com', 'xiaochun.mei@gmail.com'
];


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
    
    ref.onAuth(function(authData) {
        if (members.indexOf(authData.google.email) > -1) {
            var authed = ref.getAuth();
            console.log('auth status: ' + authed);
            
            /* USE IN EMERGENCY: DISABLE LOGIN */
            // authed = true;
            // Run callbacks
            if (authed) {
                if (typeof onAuthed === 'function') onAuthed();
            } else {
                if (typeof onUnauthed === 'function') onUnauthed();
            }
        }
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