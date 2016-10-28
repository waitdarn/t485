var INDEX_PAGE = 'index.html';

window.location.href = INDEX_PAGE + '?' + encodeURIComponent(window.location.pathname + window.location.hash + window.location.search);
