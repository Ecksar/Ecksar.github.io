console.log("running on home");
function submitLink(link){
  let inputLinkVal = document.getElementById("link").value;
  let finishedLink = document.getElementById("finishedLink");
  
  let final = inputLinkVal;
  finishedLink.innerHTML = final;
  finishedLink.href = final;
}