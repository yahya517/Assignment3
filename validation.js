
const form = document.querySelector("#registrationForm");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirmPassword");
const ageInput = document.querySelector("#age");

const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError");
const confirmPasswordError = document.querySelector("#confirmPasswordError");
const ageError = document.querySelector("#ageError");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    const age = ageInput.value.trim();

    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";
    ageError.textContent = "";

    if (name === "") {
        nameError.textContent = "Name is required.";
        return;
    }

    if (email === "") {
        emailError.textContent = "Email is required.";
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a fact email.";
        return;
    }

    if (password === "") {
        passwordError.textContent = "Password is required.";
        return;
    }

    if (confirmPassword === "") {
        confirmPasswordError.textContent =
            "Please confirm your password.";
        return;
    }

    if (password !== confirmPassword) {
        confirmPasswordError.textContent =
            "Passwords do not match.";
        return;
    }

    if (age === "") {
        ageError.textContent = "Age is required.";
        return;
    }

    alert("Form successful!");
    form.reset();
});
