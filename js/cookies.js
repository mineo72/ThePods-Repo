function onStart(){
    if (readCookie("email") != null) {
        document.getElementById("signin").hidden = true;
        document.getElementById('signout').hidden = false;
    } else {
        document.getElementById('signout').hidden = true;
        document.getElementById("signin").hidden = false;
    }
}

function acntStart() {
    if (readCookie("email") == null) {
        window.location.href = "accountsignin.html"
    } else{
        document.getElementById("acntEmail").innerHTML = readCookie("email")
        onStart()
    }
}

function johnDoe(){
    document.cookie = "username=Jane Doe;"
}
function deleteCookie(){
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/"
}
function sOut() {
    document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/"
    location.reload()
}
let test = "Test"
function etGoHome(){
    window.location.href = "transactionp1.html"
} 
function goToSignIn(){
    window.location.href = "accountsignin.html"
}


function realCheck(){
    lookFor = prompt("Check For")
    if (readCookie(lookFor) != null) {
    alert(readCookie(lookFor))
    } else {
        alert("Cookie Not Found")
    }
}
function readCookie(name) {
name += '=';
var parts = document.cookie.split(/;\s*/);
for (var i = 0; i < parts.length; i++)
{
    var part = parts[i];
    if (part.indexOf(name) == 0)
    return part.substring(name.length)
}
    return null;
}
