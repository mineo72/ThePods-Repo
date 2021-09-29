

let submitButton = document.querySelector(`#submit`);

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
    } else{
        window.location = "account.html";
    } 

}
//Add event listener to listen for a click, then call the function.
submitButton.addEventListener('click',clickListener);
