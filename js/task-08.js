const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmitForm);

const userData = {
    email: "",
    password: "",
};

function onSubmitForm(event) {
    event.preventDefault();

    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;
    
    if (email === "" || password === "") {
        alert("All fields must be filled!");
        
    } else {
        userData.email = email;
        userData.password = password;
        
        console.log(userData);
        form.reset();
    }
    
}
