console.log("running on home");
function submitLink(link){
  let inputLinkVal = document.getElementById("link").value;
  let finishedLink = document.getElementById("finishedLink");
  let linkDesc = document.getElementById("linkDesc");
  
  if(urlValid(inputLinkVal)){
    let final = "https://magrush.glitch.me/input?l=" + inputLinkVal;
    finishedLink.innerHTML = final;
    finishedLink.href = final;
    linkDesc.innerHTML = "Link: ";
    linkDesc.className = "valid";
  }else{
    finishedLink.innerHTML = "";
    finishedLink.href = "";
    linkDesc.innerHTML = "Invalid link";
    linkDesc.className = "invalid";
 ;}
}

function urlValid(url) {
    const urlPattern = /^(http|https):\/\/[^ "]+$/;
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