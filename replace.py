#!/usr/bin/env python3
import sys

find = '''</title>'''
replace = '''</title>

<script src="/js/combined.min.js"></script>
<script src="https://www.gstatic.com/firebasejs/3.6.9/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAvhRMDTAxHRqIM0-RpHxPjZtMn7S_H7K4",
    authDomain: "t485.firebaseapp.com",
    databaseURL: "https://t485.firebaseio.com",
    storageBucket: "project-2556333409340273878.appspot.com",
    messagingSenderId: "510743665020"
  };
  firebase.initializeApp(config);
</script>
<script src="/js/t485.js"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/t485.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Josefin+Slab:100,300,400,600,700,100italic,300italic,400italic,600italic,700italic">'''
files = sys.argv[1:]


for file in files:
    print('replaced', file)
    f = open(file, 'r+')
    fileread = f.read().replace(find, replace)
    f.seek(0, 0)
    f.write(fileread)
    f.close()
