/*
    TODO:
    - add refresh directory
    - resources better download?
*/




// Initialize app and store it to myApp variable for futher access to its methods
var myApp = new Framework7();

// We need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Initialize Firebase
firebase.initializeApp({
    apiKey: "AIzaSyAvhRMDTAxHRqIM0-RpHxPjZtMn7S_H7K4",
    authDomain: "t485.firebaseapp.com",
    databaseURL: "https://t485.firebaseio.com",
    storageBucket: "project-2556333409340273878.appspot.com"
});




var data = [];
myApp.onPageInit('directory', function() {
    data = JSON.parse(localStorage.getItem('directory-info'));
    for (var i = 0; i < data.length; i++) {
        var currentName = data[i]['Scout\'s Full Name (last name first):'];
        
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
        var key = 'Scout\'s Full Name (last name first):';
        return a[key] < b[key] ? -1 : 1;
    });
    
    
    for (var i = 0; i < data.length; i++) {
        currentName = data[i]['Scout\'s Full Name (last name first):'];
        
        $$('#search-content > ul').append(
            '<li>' +
                '<a href="directory-more.html" class="item-link" onclick="showfullinfo(' + i + ')">' +
                    '<div class="item-content">' +
                        '<div class="item-inner">' +
                            '<div class="item-title">' + currentName + '</div>' +
                            '<div class="item-after">' + data[i]['patrol'] + '</div>' +
                        '</div>' +
                    '</div>' +
                '</a>' +
            '</li>'
        );
    }
});


function showfullinfo(id) {
    myApp.onPageInit('directory-more', function() {
        console.log(id);
        $$('#more-name').html(data[id]['Scout\'s Full Name (last name first):']);
        $$('#more-info').html('').append(
            'Name: '                    + data[id]['Scout\'s Full Name (last name first):'] + '<br>' +
            'Email: <a href="mailto:'   + data[id]['Scout\'s E-mail:']                 + '">' + data[id]['Scout\'s E-mail:'] + '</a><br>' +
            'Cell Phone: <a href="tel:' + data[id]['Scout\'s Cell Phone']              + '">' + data[id]['Scout\'s Cell Phone'] + '</a><br>' +
            'Home Phone: <a href="tel:' + data[id]['Scout\'s Home Phone']              + '">' + data[id]['Scout\'s Home Phone'] + '</a><br>' +
            'Patrol: '                  + data[id]['patrol']                           + '<br><br>' +
            'Father\'s Cell Phone: <a href="tel:' + data[id]['Father\'s Cell Phone']   + '">' + data[id]['Father\'s Cell Phone'] + '</a><br>' +
            'Father\'s E-mail: <a href="mailto:'  + data[id]['Father\'s E-mail']       + '">' + data[id]['Father\'s E-mail'] + '</a><br>' +
            'Mother\'s Cell Phone: <a href="tel:' + data[id]['Mother\'s Cell Phone']   + '">' + data[id]['Mother\'s Cell Phone'] + '</a><br>' +
            'Mother\'s E-mail: <a href="mailto:'  + data[id]['Mother\'s E-mail']       + '">' + data[id]['Mother\'s E-mail'] + '</a><br>'
        );
    });
}



if (localStorage.getItem('directory-info') === null) refreshDirectory();
$$('.pull-to-refresh-content').on('refresh', function() {
    refreshDirectory();
});


function refreshDirectory() {
    var secretInfo = {
        "cacti": "1FUlVVgMz1IgP68LExESAFwokIGc5zWUq6mEk5auKiSU",
        "hawks": "1NUCXRoB3Z2Su-KCG5bTNna3nxNEYHO3KK3n3lIL0wTk",
        "wildcats": "1pEWKoQjXaekpDKfZSkAuKt0WCDKNfBIckMbDV-5m31Y",
        "serpents": "1GHWUQD86AGYW5H4M-YnU3c97gFMayzmdVLf2iG8ioEc",
        "blobfish": "1peBfMWQb0CGOhTwDDN5IQ-Xpvctucr9XqRji7sViKLo",
        "dragons": "1BDqSGHtNsa_pt6FHq40NS02sHcwsfh36QVTpwoykL_A"
    };
    var allLoaded = [false, false, false, false, false, false];
    var allData = [];
    
    
    // Cacti
    Tabletop.init({key: secretInfo.cacti, callback: function (data) {
        for (var i = 0; i < data.length; i++) {
            data[i].patrol = 'Cacti';
        }
        allData.push.apply(allData, data);
        allLoaded[0] = true;
    }, simpleSheet: true});
    
    // Hawks
    Tabletop.init({key: secretInfo.hawks, callback: function (data) {
        for (var i = 0; i < data.length; i++) {
            data[i].patrol = 'Hawks';
        }
        allData.push.apply(allData, data);
        allLoaded[1] = true;
        checkLoaded();
    }, simpleSheet: true});
    
    // Wildcats
    Tabletop.init({key: secretInfo.wildcats, callback: function (data) {
        for (var i = 0; i < data.length; i++) {
            data[i].patrol = 'Wildcats';
        }
        allData.push.apply(allData, data);
        allLoaded[2] = true;
        checkLoaded();
    }, simpleSheet: true});
    
    // Serpents
    Tabletop.init({key: secretInfo.serpents, callback: function (data) {
        for (var i = 0; i < data.length; i++) {
            data[i].patrol = 'Serpents';
        }
        allData.push.apply(allData, data);
        allLoaded[3] = true;
        checkLoaded();
    }, simpleSheet: true});
    
    // Blobfish
    Tabletop.init({key: secretInfo.blobfish, callback: function (data) {
        for (var i = 0; i < data.length; i++) {
            data[i].patrol = 'Blobfish';
        }
        allData.push.apply(allData, data);
        allLoaded[4] = true;
        checkLoaded();
    }, simpleSheet: true});
    
    // Dragons
    Tabletop.init({key: secretInfo.dragons, callback: function (data) {
        for (var i = 0; i < data.length; i++) {
            data[i].patrol = 'Dragons';
        }
        allData.push.apply(allData, data);
        allLoaded[5] = true;
        checkLoaded();
    }, simpleSheet: true});
    
    
    function checkLoaded() {
        for (var i = 0; i < allLoaded.length; i++) {
            if (!allLoaded[i]) return;
        }
        
        // all loaded
        myApp.pullToRefreshDone();
        localStorage.setItem('directory-info', JSON.stringify(allData));
    }
}




myApp.onPageInit('resources', function() {
    var ref = firebase.database().ref();
    
    ref.child('resourceUrls').on('child_added', function(snapshot) {
        var response = snapshot.val();
        var listElement = document.getElementById('upload-list');
        var eventName = response.event;
        var resourceUrls = response.urls.split(',');
        var resourceNames = response.names.split(',');
        var resourceSizes = response.sizes.split(',');
        
        var title = document.createElement('div');
        title.setAttribute('class', 'content-block-title');
        title.innerHTML = eventName;
        listElement.appendChild(title);
        
        var listBlock = document.createElement('div');
        listBlock.setAttribute('class', 'list-block');
        
        
        
        var list = document.createElement('ul');
        
        for (var i = 0; i < resourceUrls.length; i++) {
            $$(list).append(
                '<li>' +
                    '<a href="' + resourceUrls[i] + '" class="item-link external" target="_blank">' +
                        '<div class="item-content">' +
                            '<div class="item-inner">' +
                                '<div class="item-title">' + resourceNames[i] + '</div>' +
                                '<div class="item-after">' + resourceSizes[i] + '</div>' +
                            '</div>' +
                        '</div>' +
                    '</a>' +
                '</li>'
            );
        }
        
        listBlock.appendChild(list);
        
        listElement.appendChild(listBlock);
    });
});
