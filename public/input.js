new URLSearchParams(window.location.search).get("l")

const finalLink = btoa(link);
window.open('/link/?l=' + finalLink, '_blank');