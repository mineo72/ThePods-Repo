let submitButton = document.querySelector('#button');
function clickListener(event){
    document.getElementById('error').innerHTML = '';
    document.getElementById('success').innerHTML = ''
    let errorMessage = "You're missing the following fields:";
    let error = 0

    let fnValue = document.getElementById('fn').value;
    if(Value == ""){
        errorMessage += "<br>&nbsp&nbsp&middot;First Name";
        error = 1};


    /*let Value = document.getElementById('').value;
    if(Value == ""){
        errorMessage += "<br>&nbsp&nbsp&middot;";
        error = 1};*/
    
    if(error == 1){
        document.getElementById('error').innerHTML = errorMessage
    } else{
        document.getElementById('success').innerHTML = 'All Good!'
    };
        
}
submitButton.addEventListener('click',clickListener)