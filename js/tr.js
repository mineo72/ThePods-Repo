

let submitButton = document.querySelector('#button');
function clickListener(event){
    document.getElementById('error').innerHTML = '';
    document.getElementById('success').innerHTML = ''
    let errorMessage = "You're missing the following fields:";
    let error = 0

    let fnValue = document.getElementById('fn').value;
    if(fnValue == "" || fnValue.length < 2){
        errorMessage += "<br>&nbsp&nbsp&middot;First Name";
        error = 1};


    let lnValue = document.getElementById('ln').value;
    if(lnValue == ""){
        errorMessage += "<br>&nbsp&nbsp&middot;Last Name";
        error = 1};

    let ccValue = document.getElementById('cc').value;
    if(ccValue == "" || ccValue.length < 16){
        errorMessage += "<br>&nbsp&nbsp&middot;Credit Card";
        error = 1};
    
    let cvvValue = document.getElementById('cvv').value;
    if(ccvValue.length != 3 || typeof cvvValue != Number){
        errorMessage += "<br>&nbsp&nbsp&middot;CVV";
        error = 1};





    if(error == 1){
        document.getElementById('error').innerHTML = errorMessage
    } else{
        document.getElementById('success').innerHTML = 'All Good!'
    };
       
    const d = new Date()
    document.getElementById('date').innerHTML = d; 
}
submitButton.addEventListener('click',clickListener)
