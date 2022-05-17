var form = document.getElementById('form');
var fname = document.getElementById('first-name');
var lname = document.getElementById('last-name');
var addr = document.getElementById('address');
var city = document.getElementById('city');
var pcode = document.getElementById('post-code');
var pvince = document.getElementById('province');
var age = document.getElementById('age');
var pwd = document.getElementById('password');
var cpwd = document.getElementById('confirm-password');
var email = document.getElementById('email');
var submitBtn = document.getElementById('submit-button');
var resetBtn = document.getElementById('reset-button');
const availableProvinces = ["ontario", "on", "quebec", "qc", "manitoba", "mn", "saskatchewan", "sk", "alberta", "ab", "british columbia", "bc"];
/* Boolean var for validation */;
var isEmpty;
var isEmailError;
var isAgeError;
var isIdenticalError;
var isPasswordError;
var isProvinceError;
var isPostCodeError;
function showError(input, message) {
    let parent = input.parentElement;
    let small = parent.querySelector('small');
    parent.classList.remove('success');
    parent.classList.add('error');
    small.innerText = message;
}
function showSuccess(input) {
    let parent = input.parentElement;
    let small = parent.querySelector('small');
    parent.classList.remove('error');
    parent.classList.add('success')
    small.innerText = '';
}
function emptyValidation() {
    isEmpty = false;
    var listInputs = document.querySelectorAll('input');
    listInputs.forEach(function (e) {
        e.value = e.value.trim();
        if (!e.value) {
            isEmpty = true;
            showError(e, 'This field can not be left blank');
        }
        else {
            showSuccess(e);
        }
    });    
}
function emailValidation(email) {
    isEmailError = false;
    email.value = email.value.trim();
    const emailRegex =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!emailRegex.test(email.value)) {
        isEmailError = true;
        showError(email, 'Please insert a valid email address');
    }
    else {
        showSuccess(email);
    }    
}
function postalCodeValidation(pcode) {
    isPostCodeError = false;
    pcode.value = pcode.value.trim();
    const postCodeRegex = /^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1} *\d{1}[A-Z]{1}\d{1}$/i;
    if (!postCodeRegex.test(pcode.value)) {
        isPostCodeError = true;
        showError(pcode, 'Please insert a valid postal code. The format should be "A1A 1A1"');
    }
    else {
        showSuccess(pcode);
    }    
}
function provinceValidation(pvince) {
    isProvinceError = false;
    pvince.value = pvince.value.trim();
    if (!availableProvinces.includes(pvince.value.toLowerCase())) {
        isProvinceError = true;
        showError(pvince,"Province must be one of ON,QC,MN,SK,AB,BC");
    }
    else {
        showSuccess(pvince);
    }    
}
function ageValidation(age){
    isAgeError = false;
    age.value = age.value.trim();
    if(Number(age.value) < 18){
        isAgeError = false;
        showError(age,"Age must be at least 18 years old")
    }
    else{
        showSuccess(age);
    }    
}
function identicalValidation(pwd,cpwd){
    isIdenticalError = false;
    pwd.value = pwd.value.trim();
    cpwd.value = cpwd.value.trim();    
    if(cpwd.value !== pwd.value){
        isIdenticalError = true;
        showError(cpwd,"Confirm password must match password");
    }
    else{
        showSuccess(cpwd)
    }    
}
function passwordValidation(pwd){
    isPasswordError = false;
    pwd.value = pwd.value.trim();    
    const pwdRegex = /^(?=.*\d)(?=.*[A-Z]).{6,}$/;
    if(!pwdRegex.test(pwd.value)){
        isPasswordError = true;
        showError(pwd,"Password must contain at least 6 characters with at least one digit and one uppercase")
    }
    else{
        showSuccess(pwd)
    }    
}
form.addEventListener('submit', function (e) {
    e.preventDefault();
    emptyValidation();
    if (email.value !== '') {
        emailValidation(email);
    }
    if (pcode.value !== '') {
        postalCodeValidation(pcode);
    }
    if (pvince.value !== '') {
        provinceValidation(pvince);
    }
    if(age.value !== ''){
        ageValidation(age);
    }
    if(pwd.value !== ''){
        passwordValidation(pwd);
    }
    if(pwd.value !== '' && cpwd.value !== ''){
        identicalValidation(pwd,cpwd);
    }    
    if(!isEmpty && !isEmailError && !isAgeError && !isIdenticalError && !isPostCodeError && !isProvinceError && !isPasswordError){
        window.alert("Thanks for registering with our website, your customer record was created successfully.")        
    }
});