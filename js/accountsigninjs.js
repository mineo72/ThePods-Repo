let submitButton = document.querySelector("#submit");
function clickListener(event){
    //Create error message
    let errorMessage = "Please enter a valid:";
    let error = 0;

    let emailValue = document.getElementById('email').value;
    if(emailValue == "" || !emailValue.includes('@')){
        errorMessage += "<br>&nbsp&nbsp&middot;Email";
        error = 1}; 

    let pswValue = document.getElementById('psw').value;
    if(pswValue == ""){
        errorMessage += "<br>&nbsp&nbsp&middot;Password";
        error = 1}; 
    
        

    if(error == 1){
        document.getElementById(`error`).innerHTML=errorMessage;
    }else{
        logIn()
    }
}
//Add event listener to listen for a click, then call the function.
submitButton.addEventListener('click',clickListener);

function logIn(){
    let emailValue = document.getElementById('email').value;
    let pswValue = document.getElementById('psw').value;
    if (emailValue != "" && pswValue != ''){
        document.cookie = "email = " + emailValue + ";"
        alert(getCookie(email))
    } else{
        alert("Fail")
    }
}
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
}
function deleteCookie(){
    document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/"
}