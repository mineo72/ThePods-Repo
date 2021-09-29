//ignore this javascript, it doesn't work quite yet.
/*
let submitButton = document.querySelector(`#submit`);

function clickListener(event){
    //Create error message
    let errorMessage = "Please enter a valid:";
    let error = 0;

    //Email
    let emailInput = document.getElementById(`email`);
    let emailValue = emailInput.value;
    //Validate email
    if(emailValue == "" || !emailValue.includes('@')){
        errorMessage += "<br>&nbsp;&nbsp;&middot;Email Address";
        error = 1;
    }

    //Password
    let pswInput = document.getElementById(`psw`);
    let pswValue = pswInput.value;
    //Validate password
    if(pswValue == ""){
        errorMessage += "<br>&nbsp;&nbsp;&middot;Password";
        error = 1;
    }
    


    if(error == 1){
        document.getElementById(`error`).innerHTML=errorMessage;
    }else{
        location.href = "account.html";
    } 

}
//Add event listener to listen for a click, then call the function.
submitButton.addEventListener('click',clickListener);
*/