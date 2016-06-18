// Initialize app and store it to myApp variable for futher access to its methods
var myApp = new Framework7();

// We need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
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



myApp.onPageInit('resources', function() {
    /*
    <li>
        <a href="#" class="item-link">
            <div class="item-content">
                <div class="item-inner">
                    <div class="item-title">test link</div>
                    <div class="item-after">3 MB</div>
                </div>
            </div>
        </a>
    </li>
    */
    
    
});
