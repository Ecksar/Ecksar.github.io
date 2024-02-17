const link = btoa(new URLSearchParams(window.location.search).get("l"));
window.open('/link/?l=' + link, '_blank');
window.close();