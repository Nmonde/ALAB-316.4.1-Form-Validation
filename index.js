// Username Validation:
function validateUserName() {
    const username = document.getElementById("username").value;
    const usernameError = document.getElementById("usernameError");
    const specialCharacters = /[^A-Za-z0-9]/;
    usernameError.innerHTML = "";

    if (username === "") {
        usernameError.innerHTML = "Username cannot be blank. Enter Username.";
        return false;
    }

    if (username.length < 4) {
        usernameError.innerHTML = "Username must be four characters long.";
        return false;
    }

    const uniqueCharacters = new Set(username);
    if (uniqueCharacters.size < 2) {
        usernameError.innerHTML = "Username must contain at least two unique characters.";
        return false;
    }

    if (specialCharacters.test(username)) {
        usernameError.innerHTML = "Username cannot contain special characters or white spaces.";
        return false;
    }
    return true;
}


//Email Validation:
function validateEmail() {
const email = document.getElementById("email").value;
const emailError = document.getElementById("emailError");
const exampleComCheck = /@exaple\.com$/i;
emailError = "";
const emailRegex = /^[A-Z0-9._%+-]+@{A-Z0-9.-}+\.[A-Z]{2,}$/I;

if (!email.match(emailRegex)) {
    emailError.innerHTML = "Please enter a valid email address.";
    return false;
}

if (exampleComCheck.test(email)) {
    emailError.innerHTML = "Emails like 'example.com' domains are not valid email.";
    return false;
}
return true;
}

//Password Validation:

function validatePassword() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const passwordError = document.getElementById("passwordError");
    password.innerHTML = "";

if (password.length !== 12) {
    password.innerHTML = "Passwords must be 12 characters long";
    return false;
}

if (!/[A-Z]/.test(password) || !/[a-z]/.test(password)) {
    passwordError.innerHTML = "Passwords must contain at least one uppercase and one lowercase letter."
    return false;
}

if (!/\d/.test(password)) {
    passwordError.innerHTML = "Passwords must contain at least one number.";
    return false;
}

if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
    passwordError.innerHTML = "Passwords must contain at least one special charater";
    return false;
}

if (/(password)/i.test(password)) {
    passwordError.innerHTML = "Passwords cannot contain the word 'password'.";
    return false;
}

const username = document.getElementById("username").value;
if (password.includes(username)) {
    passwordError.innerHTML = "Passwords cannot contain username.";
    return false;
}

if(password !== confirmPassword) {
    passwordError.innerHTML = "Passwords do not match.";
    return false;
}
    return true;
}

//Terms and Conditions accepted:
function validateTermsandConditions () {
    const acceptCheckbox = document.getElementById("acceptTermsandCond");
    if(!acceptCheckbox.checked) {
        validateTermsandConditions.innerHTML = "You must accept the Terms and Conditions to continue form submission."
        return false;
    }
    return true;
}


//Registration form submission
//May need Node.js continuing to part 4.

//Part 4
// Login Form Username Validation:
