const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
console.log(input);
console.log(output);

input.addEventListener("input", (event) => {
    output.textContent = event.currentTarget.value ?event.currentTarget.value : "Anonymous";
    // if (event.value === "") {
    //     output.textContent === "Anonymous";
    // } else {
    //     output.textContent = event.currentTarget.value;
    //     console.log(event.currentTarget.value);
    // }
});


