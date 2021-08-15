document.getElementById('login-submit').addEventListener('click', function () {
    // console.log("clicked")
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // console.log(userEmail)

    const emailPassword = document.getElementById('user-password');
    const userPassword = emailPassword.value;
    // console.log(userPassword);

    if (userEmail == 'test@gmail.com' && userPassword == '1234') {
        console.log("valid");
        window.location.href = './banking.html'
    }
    else {
        // console.log("wrong")
        alert("Please enter a valid email");
    }
})
