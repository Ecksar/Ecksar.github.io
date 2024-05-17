console.log("running on home");
function submitLink(link){
  let inputLinkVal = document.getElementById("link").value;
  let finishedLink = document.getElementById("finishedLink");
  
  if(urlValid(inputLinkVal)){
    let final = inputLinkVal;
    finishedLink.innerHTML = final;
    finishedLink.href = final;
  }else{
    alert("are you ok?")
  }
}

function urlValid(url) {
    const urlPattern = /^(http|https):\/\/[^ "]+$/;
    return urlPattern.test(url);
}