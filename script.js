const input = document.querySelector(".email");
const submit = document.querySelector("button");
const error = document.querySelector(".error-text");
const signUpFormContainer = document.querySelector(".sign-up-form-container");
const successMessageContainer = document.querySelector(".success-message-container");
const userEmail = document.querySelector(".user-email");
const dismissButton = document.querySelector(".dismiss-button");

function customValidation() {
    submit.addEventListener("click", function(event) {
        event.preventDefault();
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(input.value.toLowerCase())) {
            error.style.display = "block";
            input.style.borderColor = "hsl(4, 100%, 67%)";
            input.style.backgroundColor = "rgba(255, 97, 85, .15)";
            input.style.color = "hsl(4, 100%, 67%)";
            input.classList.add("error-text-placeholder-color");
            input.addEventListener("keydown", function() {
                error.style.display = "none";
                input.style.borderColor = "hsl(234, 29%, 20%)";
                input.style.backgroundColor = "hsl(0, 0%, 100%)";
                input.style.color = "hsl(234, 29%, 20%)";
                input.classList.remove("error-text-placeholder-color");
            })
        } else {
            signUpFormContainer.style.display = "none";
            successMessageContainer.style.display = "block";
            userEmail.innerHTML = input.value;
            dismissButton.addEventListener("click", function() {
                signUpFormContainer.style.display = "flex";
                successMessageContainer.style.display = "none";
            })
            input.value = "";
        }
    });
}

customValidation();