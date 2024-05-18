console.log("running on home");
function submitLink(link){
  let inputLinkVal = document.getElementById("link").value;
  let finishedLink = document.getElementById("finishedLink");
  let linkDisplay = document.getElementById("linkDisplay");
  let linkError = document.getElementById("linkError");
  
  if(urlValid(inputLinkVal)){
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
//@razgriz help me fix the styling
//span needs styling
// linkDisplay looks cursed in generalye ik
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