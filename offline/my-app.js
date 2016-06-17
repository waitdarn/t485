// Initialize app and store it to myApp variable for futher access to its methods
var myApp = new Framework7();

// We need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});



// Now we need to run the code that will be executed only for About page.

var data = [];
// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function(e) {
    // Get page data from event data
    var page = e.detail.page;

    if (page.name === 'directory') {
        // Following code will be executed for page with data-page attribute equal to "about"
        
        
        data = JSON.parse(localStorage.getItem('directory-info'));
        console.log(data);
        
        
        for (var i = 0; i < data.length; i++) {
            $$('#search-content > ul').append(
                '<li>' +
                    '<a href="#" class="item-link open-popup" data-popup=".directory-more-popup" onclick="showfullinfo(' + i + ')">' +
                        '<div class="item-content">' +
                            '<div class="item-inner">' +
                                '<div class="item-title">' + data[i]['Scout\'s Full Name (last name first):'] + '</div>' +
                            '</div>' +
                        '</div>' +
                    '</a>' +
                '</li>'
            );
        }
    } else if (page.name === 'resources') {
        // Following code will be executed for page with data-page attribute equal to "about"
        // myApp.alert('Here comes the resources page');
        
        
    }
});



function showfullinfo(id) {
    console.log(id);
    $$('#directory-more-popup-title').html(data[id]['Scout\'s Full Name (last name first):']);
    $$('#directory-more-popup-info').html('').append(
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
}