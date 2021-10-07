// opening sign up on click
document.getElementById('signup-button').addEventListener('click',function() {
    document.getElementById('signup').style.display='flex';
});

// closing sign up after clicking on cross
document.getElementById('close-signup').addEventListener('click',function() {
    document.getElementById('signup').style.display='none';
});

// opening log in on click
document.getElementById('login-button').addEventListener('click',function() {
    document.getElementById('login').style.display='flex';
});

// closing log in after clicking on cross
document.getElementById('close-login').addEventListener('click',function() {
    document.getElementById('login').style.display='none';
});