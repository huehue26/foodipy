// opening sign up on click
document.getElementById('signup-button').addEventListener('click', function () {
    document.getElementById('signup').style.display = 'flex';
});

// closing sign up after clicking on cross
document.getElementById('close-signup').addEventListener('click', function () {
    document.getElementById('signup').style.display = 'none';
});

// opening log in on click
document.getElementById('login-button').addEventListener('click', function () {
    document.getElementById('login').style.display = 'flex';
});

// closing log in after clicking on cross
document.getElementById('close-login').addEventListener('click', function () {
    document.getElementById('login').style.display = 'none';
});

// opening signup when create account is clicked
document.getElementById('create_account').addEventListener('click', function () {
    document.getElementById('login').style.display = 'none';
    document.getElementById('signup').style.display = 'flex';
});

// opening login when already have a account is clicked
document.getElementById('login_account').addEventListener('click', function () {
    document.getElementById('signup').style.display = 'none';
    document.getElementById('login').style.display = 'flex';
});

// email validation
function ValidateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.match(mailformat)) {
        // alert("Valid email address!");
        document.getElementById('signup').style.display = 'none';
    }
    else {
        // alert("You have entered an invalid email address!");
        document.getElementById('signup-error').innerText = "Please enter valid email";
        document.getElementById('signup-error').style.display = "block";
    }
}

// checking signup input
document.getElementById('submit-signup').addEventListener('click', function () {
    const name_input_login = document.getElementById('name-input').value;
    const email_input_login = document.getElementById('email-input').value;
    if (email_input_login === "" || name_input_login === "") {
        document.getElementById('signup-error').innerText = "Please enter the details";
        document.getElementById('signup-error').style.display = "block";
    } else {
        ValidateEmail(email_input_login);
    }
});

// checking login input
document.getElementById('submit-login').addEventListener('click', function () {
    const name_input_login = document.getElementById('name-input').value;
    const email_input_login = document.getElementById('email-input').value;
    if (email_input_login === "" || name_input_login === "") {
        document.getElementById('login-error').innerText = "Please enter the details";
        document.getElementById('login-error').style.display = "block";
    } else {
        ValidateEmail(email_input_login);
    }
});