const form = document.querySelector(".login-form");
const emailEl = document.querySelector('input[type="email"]');
const passwordEl = document.querySelector('input[type="password"]');
const submitBtn = document.querySelector("button");

form.addEventListener("submit", onSubmitForm);

function onSubmitForm(event) {
    event.preventDefault();

    const {
    elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        alert("All fields must be filled!");
        
    } else {
        email.value = emailEl;
        password.value = passwordEl;
    }
    console.log(`Email: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();
}
