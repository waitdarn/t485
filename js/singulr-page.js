const l = window.location;
l.href = 'index.html?' + encodeURIComponent(l.pathname + l.hash + l.search);
