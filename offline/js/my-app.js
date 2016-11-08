// Initialize app and store it to myApp letiable for futher access to its methods
let myApp = new Framework7();

// We need to use custom DOM library, let's save it to $$ letiable:
let $$ = Dom7;

// Add view
let mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

let online = navigator.onLine;
// let online = false;

if (online) {
    // Initialize Firebase
    firebase.initializeApp({
        apiKey: "AIzaSyAvhRMDTAxHRqIM0-RpHxPjZtMn7S_H7K4",
        authDomain: "t485.firebaseapp.com",
        databaseURL: "https://t485.firebaseio.com",
        storageBucket: "project-2556333409340273878.appspot.com"
    });
}




let data = [];
myApp.onPageInit('directory', function() {
    data = JSON.parse(localStorage.getItem('directory-info'));
    for (let i = 0; i < data.length; i++) {
        let currentName = data[i]['Scout\'s Full Name (last name first):'];
        
        // if name is in format: last, first --> turn into --> first last
        if (currentName.indexOf(',') > -1) {
            if (currentName.indexOf(' ') > -1) {
                currentName = currentName.split(', ')[1] + ' ' + currentName.split(', ')[0];
            } else {
                currentName = currentName.split(',')[1] + ' ' + currentName.split(',')[0];
            }
        }
        data[i]['Scout\'s Full Name (last name first):'] = currentName;
    }
    
    // sort data according to name
    data = data.sort(function(a, b) {
        let key = 'Scout\'s Full Name (last name first):';
        return a[key] < b[key] ? -1 : 1;
    });
    
    
    for (i = 0; i < data.length; i++) {
        let currentName = data[i]['Scout\'s Full Name (last name first):'];
        
        $$('#search-content > ul').append(
            '<li>' +
                '<a href="#" class="item-link" onclick="showfullinfo(' + i + ')">' +
                    '<div class="item-content">' +
                        '<div class="item-inner">' +
                            '<div class="item-title">' + currentName + '</div>' +
                            '<div class="item-after">' + data[i].patrol + '</div>' +
                        '</div>' +
                    '</div>' +
                '</a>' +
            '</li>'
        );
    }
});


function showfullinfo(id) {
    $$('#directory-more-name').html(data[id]['Scout\'s Full Name (last name first):']);
    $$('#directory-more-info').html(
        'Name: '                    + data[id]['Scout\'s Full Name (last name first):'] + '<br>' +
        'Email: <a href="mailto:'   + data[id]['Scout\'s E-mail:']                 + '" class="external">' + data[id]['Scout\'s E-mail:'] + '</a><br>' +
        'Cell Phone: <a href="tel:' + data[id]['Scout\'s Cell Phone']              + '" class="external">' + data[id]['Scout\'s Cell Phone'] + '</a><br>' +
        'Home Phone: <a href="tel:' + data[id]['Scout\'s Home Phone']              + '" class="external">' + data[id]['Scout\'s Home Phone'] + '</a><br>' +
        'Patrol: '                  + data[id].patrol                              + '<br><br>' +
        'Father\'s Cell Phone: <a href="tel:' + data[id]['Father\'s Cell Phone']   + '" class="external">' + data[id]['Father\'s Cell Phone'] + '</a><br>' +
        'Father\'s E-mail: <a href="mailto:'  + data[id]['Father\'s E-mail']       + '" class="external">' + data[id]['Father\'s E-mail'] + '</a><br>' +
        'Mother\'s Cell Phone: <a href="tel:' + data[id]['Mother\'s Cell Phone']   + '" class="external">' + data[id]['Mother\'s Cell Phone'] + '</a><br>' +
        'Mother\'s E-mail: <a href="mailto:'  + data[id]['Mother\'s E-mail']       + '" class="external">' + data[id]['Mother\'s E-mail'] + '</a><br>'
    );
    mainView.router.loadContent($$('#directory-more-template').html());
}




if (online) {
    // refresh on app startup
    refreshDirectory();
    $$('.pull-to-refresh-content').on('refresh', function() {
        refreshDirectory();
    });
}



function refreshDirectory() {
    let secretInfo = {
        "cacti": "1FUlVVgMz1IgP68LExESAFwokIGc5zWUq6mEk5auKiSU",
        "hawks": "1NUCXRoB3Z2Su-KCG5bTNna3nxNEYHO3KK3n3lIL0wTk",
        "wildcats": "1pEWKoQjXaekpDKfZSkAuKt0WCDKNfBIckMbDV-5m31Y",
        "serpents": "1GHWUQD86AGYW5H4M-YnU3c97gFMayzmdVLf2iG8ioEc",
        "blobfish": "1peBfMWQb0CGOhTwDDN5IQ-Xpvctucr9XqRji7sViKLo",
        "dragons": "1BDqSGHtNsa_pt6FHq40NS02sHcwsfh36QVTpwoykL_A"
    };
    let allLoaded = [false, false, false, false, false, false];
    let allData = [];
    
    
    // Cacti
    Tabletop.init({key: secretInfo.cacti, callback: function (data) {
        for (let i = 0; i < data.length; i++) {
            data[i].patrol = 'Cacti';
        }
        allData.push.apply(allData, data);
        checkLoaded(0);
    }, simpleSheet: true});
    
    // Hawks
    Tabletop.init({key: secretInfo.hawks, callback: function (data) {
        for (let i = 0; i < data.length; i++) {
            data[i].patrol = 'Hawks';
        }
        allData.push.apply(allData, data);
        checkLoaded(1);
    }, simpleSheet: true});
    
    // Wildcats
    Tabletop.init({key: secretInfo.wildcats, callback: function (data) {
        for (let i = 0; i < data.length; i++) {
            data[i].patrol = 'Wildcats';
        }
        allData.push.apply(allData, data);
        checkLoaded(2);
    }, simpleSheet: true});
    
    // Serpents
    Tabletop.init({key: secretInfo.serpents, callback: function (data) {
        for (let i = 0; i < data.length; i++) {
            data[i].patrol = 'Serpents';
        }
        allData.push.apply(allData, data);
        checkLoaded(3);
    }, simpleSheet: true});
    
    // Blobfish
    Tabletop.init({key: secretInfo.blobfish, callback: function (data) {
        for (let i = 0; i < data.length; i++) {
            data[i].patrol = 'Blobfish';
        }
        allData.push.apply(allData, data);
        checkLoaded(4);
    }, simpleSheet: true});
    
    // Dragons
    Tabletop.init({key: secretInfo.dragons, callback: function (data) {
        for (let i = 0; i < data.length; i++) {
            data[i].patrol = 'Dragons';
        }
        allData.push.apply(allData, data);
        checkLoaded(5);
    }, simpleSheet: true});
    
    
    function checkLoaded(i) {
        allLoaded[i] = true;
        for (i = 0; i < allLoaded.length; i++) {
            if (!allLoaded[i]) return;
        }
        
        // all loaded
        console.log('directory refreshed!');
        myApp.pullToRefreshDone();
        localStorage.setItem('directory-info', JSON.stringify(allData));
    }
}



myApp.onPageInit('events', function() {
    if (online) {
        let ref = firebase.database().ref();
        
        ref.child('events').on('child_added', function(snapshot) {
            let response = snapshot.val();
            let listElement = document.getElementById('event-list');
            let eventName = response.title;
            
            let linkElement = document.createElement('li');
            linkElement.innerHTML = `
                <a href="#" class="item-link item-content" onclick="showEventInfo('${encodeURIComponent(eventName)}','${encodeURIComponent(response.description)}')">
                    <div class="item-inner">
                        <div class="item-title">${eventName}</div>
                    </div>
                </a>
            `;
            
            listElement.appendChild(linkElement);
            
            localStorage.setItem('event-info', document.getElementById('event-list').innerHTML);
        });
    } else {
        // load from offline
        document.getElementById('event-list').innerHTML = localStorage.getItem('event-info');
    }
});


function showEventInfo(name, description) {
    $$('#event-more-name').html(decodeURIComponent(name));
    $$('#event-more-info').html(decodeURIComponent(description));
    mainView.router.loadContent($$('#event-more-template').html());
}




myApp.onPageInit('calendar', function() {
    // updated 11/07/2016
    // TODO: get way to update calendar in real time
    var info = [
        ["Troop and ASM Meeting","2016-11-07T19:30:00-08:00"],
        ["District Roundtable","2016-11-09T19:30:00-08:00"],
        ["Scouting for Food","2016-11-12T09:00:00-08:00"],
        ["BOR","2016-11-14T19:30:00-08:00"],
        ["Scouting for Food","2016-11-19T09:00:00-08:00"],
        ["Troop and Committee Meeting","2016-11-21T19:30:00-08:00"],
        ["PLC","2016-11-28T19:30:00-08:00"],
        ["Troop and ASM Meeting","2016-12-05T19:30:00-08:00"],
        ["Year End Party","2016-12-11T13:30:00-08:00"],
        ["BOR","2016-12-12T19:30:00-08:00"],
        ["District Roundtable","2016-12-14T19:30:00-08:00"],
        ["Father and Son Campout","2016-12-17"],
        ["Troop and Committee Meeting","2016-12-19T19:30:00-08:00"],
        ["PLC","2016-12-26T19:30:00-08:00"],
        ["Troop and ASM Meeting","2017-01-02T19:30:00-08:00"],
        ["BOR","2017-01-09T19:30:00-08:00"],
        ["District Roundtable","2017-01-11T19:30:00-08:00"],
        ["TLT( Troop Leadership Training)","2017-01-14T06:00:00-08:00"],
        ["Troop and Committee Meeting","2017-01-16T19:30:00-08:00"],
        ["PLC","2017-01-23T19:30:00-08:00"],
        ["Troop and ASM Meeting","2017-02-06T19:30:00-08:00"],
        ["District Roundtable","2017-02-08T19:30:00-08:00"],
        ["BOR","2017-02-13T19:30:00-08:00"],
        ["Troop and Committee Meeting","2017-02-20T19:30:00-08:00"],
        ["Bear Paw","2017-02-24T17:00:00-08:00"],
        ["PLC","2017-02-27T19:30:00-08:00"],
        ["Troop and ASM Meeting","2017-03-06T19:30:00-08:00"],
        ["District Roundtable","2017-03-08T19:30:00-08:00"],
        ["BOR","2017-03-13T19:30:00-07:00"],
        ["Troop and Committee Meeting","2017-03-20T19:30:00-07:00"],
        ["PLC","2017-03-27T19:30:00-07:00"],
        ["Troop and ASM Meeting","2017-04-03T19:30:00-07:00"],
        ["BOR","2017-04-10T19:30:00-07:00"],
        ["District Roundtable","2017-04-12T19:30:00-07:00"],
        ["Troop and Committee Meeting","2017-04-17T19:30:00-07:00"],
        ["PLC","2017-04-24T19:30:00-07:00"],
        ["Troop and ASM Meeting","2017-05-01T19:30:00-07:00"],
        ["BOR","2017-05-08T19:30:00-07:00"],
        ["District Roundtable","2017-05-10T19:30:00-07:00"],
        ["Troop and Committee Meeting","2017-05-15T19:30:00-07:00"],
        ["PLC","2017-05-22T19:30:00-07:00"],
        ["Troop and ASM Meeting","2017-06-05T19:30:00-07:00"],
        ["BOR","2017-06-12T19:30:00-07:00"],
        ["District Roundtable","2017-06-14T19:30:00-07:00"],
        ["Troop and Committee Meeting","2017-06-19T19:30:00-07:00"],
        ["PLC","2017-06-26T19:30:00-07:00"],
        ["Summer Camp","2017-06-30"],
        ["Troop and ASM Meeting","2017-07-03T19:30:00-07:00"],
        ["BOR","2017-07-10T19:30:00-07:00"],
        ["District Roundtable","2017-07-12T19:30:00-07:00"],
    ];
    
    let calList = document.getElementById('cal-list');
    
    for (let i = 0; i < info.length; i++) {
        let listElement = document.createElement('li');
        listElement.innerHTML =
        `<div class="item-content">
            <div class="item-inner">
                <div class="item-title">${info[i][0]}</div>
                <div class="item-after">${info[i][1].replace('T', ' ')}</div>
            </div>
        </div>`;
        
        calList.appendChild(listElement);
    }
});
