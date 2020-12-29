//fetching and storing the form element and its submit button from the DOM
const form = document.getElementById('form');
const submit = document.getElementById('button');

//fetching and storing form inputs by id
const username = document.getElementById('usernameInput');
const password = document.getElementById('passwordInput');

//fetching the span following each input, for displaying validation messages
const usernameError = document.querySelector("#usernameInput + span.error");
const passwordError = document.querySelector("#passwordInput + span.error");

//event listeners on inputs, checking validity
username.addEventListener('input', function(event){
    if (username.validity.valid){
        usernameError.textContent = "";
    } else {
        showErrorUsername();
    }
});
password.addEventListener('input', function(event){
    if (password.validity.valid){
        passwordError.textContent = "";
    } else {
        showErrorPass();
    }
});

//if username or password are invalid, prevent form from submitting
form.addEventListener('submit', function(event){
    if(!username.validity.valid || !password.validity.valid){
        event.preventDefault();
    }
});
//check if form is valid, then submit button enabled
form.addEventListener('input', function(event){
	if(username.validity.valid && password.validity.valid){
		submit.removeAttribute('disabled');
        submit.classList.remove('disabled');
	} else
	submit.classList.add("disabled");
}, true);
//error functions for username password
function showErrorUsername(){
	if(username.validity.valueMissing){
		usernameError.textContent = 'Please enter your username';
	} else if (username.validity.tooShort){
        usernameError.textContent = 'Please enter at least 4 characters.';
    }
	usernameError.className = 'error';
};
function showErrorPass(){
    if (password.validity.valueMissing){
        passwordError.textContent = "Please choose a password.";
    } else if (password.validity.tooShort){
        passwordError.textContent = 'Please enter at least 8 characters.';
    } else if (password.validity.patternMismatch){
        passwordError.textContent = 'Include uppercase, lowercase, and a number.'
    }
    passwordError.className = 'error';
};
