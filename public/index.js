console.log("running on home");
function submitLink(link){
  let inputLinkVal = document.getElementById("link").value;
  let finishedLink = document.getElementById("finishedLink");
  let linkDisplay = document.getElementById("linkDisplay");
  let linkError = document.getElementById("linkError");
  
  if(urlValid(inputLinkVal)){
      if (!inputLinkVal.startsWith("http://") && !inputLinkVal.startsWith("https://")) {
      inputLinkVal = "http://" + inputLinkVal;
    }
    let final = "https://magrush.glitch.me/input?l=" + inputLinkVal;
    finishedLink.innerHTML = final;
    finishedLink.href = final;
    linkDisplay.style.display = "inline-block";
    linkError.style.display = "none";
  }else{
    linkDisplay.style.display = "none";
    linkError.style.display = "inline-block";
 ;}
}

function urlValid(url) {
    const urlPattern = new RegExp(
   '^(https?:\\/\\/)?' + // protocol
     '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
     '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR IP (v4) address
     '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
     '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
     '(\\#[-a-z\\d_]*)?$', // fragment locator
   'i'
 );
    return urlPattern.test(url);
}

function openTab(){
  let link = document.getElementById("finishedLink").href;
  if(link.length > "https://magrush.glitch.me/".length){
    window.open(link);
  }
}

function copyLink(){
  let link = document.getElementById("finishedLink").href;
  if(link.length > "https://magrush.glitch.me/".length){
    navigator.clipboard.writeText(link);
  }
}