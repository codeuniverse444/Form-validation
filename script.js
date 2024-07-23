const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const feedback = document.getElementById('feedback');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    validate();
})

const isEmail = (emailVal) => {
    return true;
}
const validate = () => {
const usernameVal = username.value.trim();
const emailVal = email.value.trim();
const phoneVal = phone.value.trim();
const passwordVal = password.value.trim();
const feedbackVal = feedback.value.trim();

if (usernameVal === "") {
    setErrorMsg(username, 'Username cannot be blank');
}else if (usernameVal.length < 3) {
    setErrorMsg(username, 'Username min 3 char');
}else {
    setSuccessMsg(username);
}

if (emailVal === "") {
    setErrorMsg(email, 'Email cannot be blank');
}else if (!isEmail(emailVal)) {
    setErrorMsg(email, 'Not a valid Email');
}else {
    setSuccessMsg(email);
}

if (phoneVal === "") {
    setErrorMsg(phone, 'Phone number cannot be blank');
}else if (phoneVal.length != 10) {
    setErrorMsg(phone, 'Not a valid Number');
}else {
    setSuccessMsg(phone);
}

if (passwordVal === "") {
    setErrorMsg(password, 'Password cannot be blank');
}else if (passwordVal.length <= 5) {
    setErrorMsg(password, 'Minimum 6 characters');
}else {
    setSuccessMsg(password);
}
if (feedbackVal === "") {
    setErrorMsg(feedback, 'feedback cannot be blank');
}else if (feedbackVal.length <= 4) {
    setErrorMsg(feedback, 'Minimum 4 characters');
}else {
    setSuccessMsg(feedback);
}

}
function setErrorMsg(input, errormsgs) {
const formControl = input.parentElement;
const small = formControl.querySelector('small');
formControl.className = "form-control error";
small.innerText = errormsgs;
}

function setSuccessMsg(input) {
const formControl = input.parentElement;
formControl.className = "form-control success";

}






