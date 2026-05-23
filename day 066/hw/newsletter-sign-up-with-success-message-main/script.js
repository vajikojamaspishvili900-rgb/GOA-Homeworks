// scripti didad ar gamovida ar gvaq jer esetebi naswavli mara vcade ragac mainc
// male viswavlit
const signupScreen = document.getElementById("signup-screen");
const successScreen = document.getElementById("success-screen");
const signupForm = document.getElementById("signup-form");
const emailInput = document.getElementById("email");
const errorMessage = document.getElementById("error-message");
const submittedEmail = document.getElementById("submitted-email");
const dismissButton = document.getElementById("dismiss-button");

function checkEmailValid(email) {
    if (email.includes("@") && email.includes(".")) {
    errorMessage.textContent = "";
    submittedEmail.textContent = userEmailValue;
    } else {
    errorMessage.textContent = "Valid email required";
    }
}