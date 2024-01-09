function send(){
    var val=document.getElementById("input").value;

    displaymsg("Your Entered Text is :"+val);

}
function displaymsg(k){
    document.getElementById("msg").textContent=k;

}
