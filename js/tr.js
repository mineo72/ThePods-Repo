

let submitButton = document.querySelector('#button');
function clickListener(event){
    document.getElementById('error').innerHTML = '';
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
    if(ccValue == "" || ccValue.length != 16){
        errorMessage += "<br>&nbsp&nbsp&middot;Credit Card";
        error = 1};
    
    let cvvValue = document.getElementById('cvv').value;
    if(cvvValue.length != 3 || (cvvValue.value < 100 || cvvValue > 999 ) ){
        errorMessage += "<br>&nbsp&nbsp&middot;CVV";
        error = 1};
        
    let expValue = document.getElementById('exp').value;
    if(expValue == "" || expValue.includes("/") == false){
        errorMessage += "<br>&nbsp&nbsp&middot;Expiry";
        error = 1}; 

    let addressValue = document.getElementById('address').value;
    if(addressValue == ""){
        errorMessage += "<br>&nbsp&nbsp&middot; Address";
        error = 1}; 
        
    let cityValue = document.getElementById('city').value;
    if(cityValue == ""){
        errorMessage += "<br>&nbsp&nbsp&middot;City";
        error = 1}; 

    let stateValue = document.getElementById('state').value;
    if(stateValue == ""){
        errorMessage += "<br>&nbsp&nbsp&middot;State";
        error = 1}; 

    let zipValue = document.getElementById('zip').value;
    if(zipValue == "" || (zipValue.value < 10000 || zipValue > 99999 )){
        errorMessage += "<br>&nbsp&nbsp&middot;Zip Code";
        error = 1}; 

    if(error == 1){
        document.getElementById('error').innerHTML = errorMessage
    } else{
        window.location.href = "purchase.html";
    };
       
     
}
submitButton.addEventListener('click',clickListener)
fillButton = document.querySelector('#fill');
function fillListener(event){
    document.getElementById('fn').value = "John"
    document.getElementById('ln').value = "Smith"
    document.getElementById('cc').value = "1231231231231230"
    document.getElementById('cvv').value = '123'
    document.getElementById('exp').value = '12/34'
    document.getElementById('address').value = '1234 Test Ln.'
    document.getElementById('city').value = 'Cityland'
    document.getElementById('state').value = 'Stateland'
    document.getElementById('zip').value = '12345'
}
fillButton.addEventListener('click', fillListener)
const d = new Date()
document.getElementById('date').innerHTML = d;
    


/*  Field check
    let Value = document.getElementById('').value;
    if(Value == ""){
        errorMessage += "<br>&nbsp&nbsp&middot;";
        error = 1}; 
                    */