[1mdiff --git a/pictures.html b/pictures.html[m
[1mindex 766886b..b64d2be 100644[m
[1m--- a/pictures.html[m
[1m+++ b/pictures.html[m
[36m@@ -122,9 +122,10 @@[m
                     <h2 class="intro-text text-center">Pictures</h2>[m
                     <hr>[m
                 </div>[m
[31m-                <div class="col-md-12" id="more-photos-link">[m
[32m+[m[32m                <div class="col-md-12">[m
                     <button class="btn btn-default" onclick="window.location.href='logout.html?redir=pictures.html'">Log out</button>[m
                     <p>These photos are ordered randomly, so refresh the page to get different photos.</p>[m
[32m+[m[32m                    <p>Want more photos? Go to our <a id='photo-album' href=\"https://www.flickr.com/photos/97925389%40N07/albums\" target=\"_blank\">troop flickr page</a>.</p>[m
                 </div>[m
                 <div class="col-md-3 col-sm-4 col-xs-6" id="event-links">[m
                     <h3>Events</h3>[m
[36m@@ -172,34 +173,34 @@[m
     <!-- Flickr -->[m
     <script>[m
         var events =[m
[31m-        '<a href="pictures.html?id=72157662747042099">' +[m
[32m+[m[32m        '<a href="pictures.html?id=72157662623406403">' +[m
             '<figure>' +[m
[31m-                    '<img src="https://farm2.staticflickr.com/1679/24327112405_f09c039bcc_m.jpg" alt="">' +[m
[31m-                    '<figcaption style="text-align: center;"><b>TLT 2016</b></figcaption>' +[m
[32m+[m[32m                    '<img src="https://farm2.staticflickr.com/1707/25183414385_50a4b7df9d_m.jpg" alt="">' +[m
[32m+[m[32m                    '<figcaption style="text-align: center;"><b>Bearpaw 2016 Part 3</b></figcaption>' +[m
             '</figure>' +[m
[31m-        '</a>' + [m
[31m-        '<a href="pictures.html?id=72157661928401719">' +[m
[32m+[m[32m        '</a>' +[m
[32m+[m[32m        '<a href="pictures.html?id=72157664763530162">' +[m
             '<figure>' +[m
[31m-                    '<img src="https://farm2.staticflickr.com/1612/23812145722_478ecd6659_m.jpg" alt="">' +[m
[31m-                    '<figcaption style="text-align: center;"><b>Rim of the Bay Hike</b></figcaption>' +[m
[32m+[m[32m                    '<img src="https://farm2.staticflickr.com/1669/24556387433_a661b4db53_m.jpg" alt="">' +[m
[32m+[m[32m                    '<figcaption style="text-align: center;"><b>Bearpaw 2016 Part 2</b></figcaption>' +[m
             '</figure>' +[m
         '</a>' +[m
[31m-        '<a href="pictures.html?id=72157659281779929">' +[m
[32m+[m[32m        '<a href="pictures.html?id=72157664371486120">' +[m
             '<figure>' +[m
[31m-                    '<img src="https://farm1.staticflickr.com/769/21458655874_416fc5c6b5_m.jpg" alt="">' +[m
[31m-                    '<figcaption style="text-align: center;"><b>Coyote Creek Cycling Classic</b></figcaption>' +[m
[32m+[m[32m                    '<img src="https://farm2.staticflickr.com/1650/25156423316_5921f2ddf8_m.jpg" alt="">' +[m
[32m+[m[32m                    '<figcaption style="text-align: center;"><b>Bearpaw 2016 Part 1</b></figcaption>' +[m
             '</figure>' +[m
         '</a>' +[m
[31m-        '<a href="pictures.html?id=72157659191789575">' +[m
[32m+[m[32m        '<a href="pictures.html?id=72157662747042099">' +[m
             '<figure>' +[m
[31m-                    '<img src="https://farm6.staticflickr.com/5817/21777553621_8435e60f06_m.jpg" alt="">' +[m
[31m-                    '<figcaption style="text-align: center;"><b>CASA Camporee 2015</b></figcaption>' +[m
[32m+[m[32m                    '<img src="https://farm2.staticflickr.com/1679/24327112405_f09c039bcc_m.jpg" alt="">' +[m
[32m+[m[32m                    '<figcaption style="text-align: center;"><b>TLT 2016</b></figcaption>' +[m
             '</figure>' +[m
[31m-        '</a>' +[m
[31m-        '<a href="pictures.html?id=72157658182644490">' +[m
[32m+[m[32m        '</a>' +[m[41m [m
[32m+[m[32m        '<a href="pictures.html?id=72157661928401719">' +[m
             '<figure>' +[m
[31m-                    '<img src="https://farm1.staticflickr.com/613/21211787148_8ba213618c_m.jpg" alt="">' +[m
[31m-                    '<figcaption style="text-align: center;"><b>September 2015 COH</b></figcaption>' +[m
[32m+[m[32m                    '<img src="https://farm2.staticflickr.com/1612/23812145722_478ecd6659_m.jpg" alt="">' +[m
[32m+[m[32m                    '<figcaption style="text-align: center;"><b>Rim of the Bay Hike</b></figcaption>' +[m
             '</figure>' +[m
         '</a>';[m
         [m
[36m@@ -213,9 +214,8 @@[m
                 $('#content').show();[m
 [m
                 // Put all pictures info in javascript so that Google web crawler cannot index photos (for privacy)[m
[31m-                if ($("#more-photos-link") !== null)  {    [m
[31m-                    $("#more-photos-link").append("<p>Want more photos? Go to our <a href=\"https://www.flickr.com/photos/97925389%40N07/albums\" target=\"_blank\">troop flickr page</a>.</p>");[m
[31m-                }[m
[32m+[m[32m                $("#photo-album").attr('href', 'https://www.flickr.com/photos/97925389%40N07/albums');[m
[32m+[m[41m                [m
                 $("#event-links").append(events);[m
             }, function() {[m
                 window.location.href = "login.html?redirect=pictures.html";[m
[36m@@ -224,7 +224,7 @@[m
     [m
         function getUrlVars() {[m
             // If no id use latest[m
[31m-            var id = getVarsFromUrl()["id"] || "72157662747042099";[m
[32m+[m[32m            var id = getVarsFromUrl()["id"] || events.substr(26, 17);[m
 [m
             $.getScript("https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=3624106015a6a4fa65d62b48dd872655&user_id=97925389%40N07&photoset_id=" + id + "&format=json", function() {[m
                 console.log("loaded script successfully");[m
[36m@@ -238,7 +238,7 @@[m
             }[m
             [m
             var randomNums = generateRandomNums(rsp.photoset.photo.length);[m
[31m-            // 18 is divisible by 3, 2, 1 (can be evenly divided into 3, 2, and 1 columns)[m
[32m+[m[32m            // 24 is divisible by 3, 2, 1 (can be evenly divided into 3, 2, and 1 columns)[m
             var NUM_DISPLAY_PHOTOS = 24;[m
             for (var i = 0; i < NUM_DISPLAY_PHOTOS; i++) {[m
 [m
