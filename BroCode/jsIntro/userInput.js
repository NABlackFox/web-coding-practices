let userName;

document.getElementById("userNameButton").onclick = function(){
    userName = document.getElementById("userNameInput").value;
    console.log(userName);
}