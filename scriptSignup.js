//fetching and storing the form element and its submit button from the DOM
const form = document.getElementById('form');
const submit = document.getElementById('button');

//fetching and storing form inputs by id
const username = document.getElementById('usernameInput');
const email = document.getElementById('emailInput');
const password = document.getElementById('passwordInput');
const passwordConfirm = document.getElementById('passwordConfirmInput');

//fetching the span following each input, for displaying validation messages
const usernameError = document.querySelector("#usernameInput + span.error");
const emailError = document.querySelector("#emailInput + span.error");
const passwordError = document.querySelector("#passwordInput + span.error");
const passwordConfirmError = document.querySelector("#passwordConfirmInput + span.error");

//event listeners on inputs, checking validity
username.addEventListener('input', function(event){
    if (username.validity.valid){
        usernameError.textContent = "";
    } else {
        showErrorUsername();
    }
});
email.addEventListener('input', function(event){
    if (email.validity.valid){
        emailError.textContent = "";
    } else {
        showErrorEmail();
    }
});
password.addEventListener('input', function(event){
    if (password.validity.valid){
        passwordError.textContent = "";
    } else {
        showErrorPass();
    }
});
passwordConfirm.addEventListener('input', function(event){
    if (passwordConfirm.validity.valid){
        passwordConfirmError.textContent = "";
    } else {
        showErrorPassConfirm();
    }
});

//form listener for password matching
form.addEventListener('input', function (event) {
    if (passwordConfirm.value != password.value) {
        passwordConfirmError.textContent = "Passwords must match.";
        passwordConfirmError.className = 'error';
    } else {
        passwordConfirmError.textContent = "";
    }
});
//if username, email, or password are invalid, prevent form from submitting
form.addEventListener('submit', function(event){
    if(!username.validity.valid || !email.validity.valid || !password.validity.valid || !passwordConfirm.validity.valid){
        event.preventDefault();
    }
});
//check if form is valid, then submit button enabled
form.addEventListener('input', function(event){
	if(username.validity.valid && email.validity.valid && password.validity.valid && passwordConfirm.validity.valid && passwordConfirm.value === password.value){
		submit.removeAttribute('disabled');
        submit.classList.remove('disabled');
	} else
	submit.classList.add("disabled");
}, true);
//error functions for username, password, and email
function showErrorUsername(){
	if(username.validity.valueMissing){
		usernameError.textContent = 'Please enter your username';
	} else if (username.validity.tooShort){
        usernameError.textContent = 'Please enter at least 4 characters.';
    }
	usernameError.className = 'error';
};
function showErrorEmail(){
    if (email.validity.valueMissing){
        emailError.textContent = "Please enter your email.";
    } else if (email.validity.typeMismatch){
        emailError.textContent ="Example: j.doe@email.com"
    }
    emailError.className = 'error';
};
function showErrorPass(){
    if (password.validity.valueMissing){
        passwordError.textContent = "Please choose a password.";
    } else if (password.validity.tooShort){
        passwordError.textContent = 'Please enter at least 5 characters.';
    } else if (password.validity.patternMismatch){
        passwordError.textContent = 'Include uppercase, lowercase, and a number.'
    }
    passwordError.className = 'error';
};
function showErrorPassConfirm() {
    if (passwordConfirm.validity.valueMissing){
        passwordConfirmError.textContent = "Please confirm your password.";
    }
    passwordConfirmError.className = 'error';
}

/*usernameError.className = "valid"; emailError.className = "valid"; passwordError.className = "valid"; passwordConfirmError.className = "valid";passwordConfirmError.className = 'valid';*/
