const input = document.querySelector("input");
input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    console.log(input.value.length );
    if (input.value.length == input.dataset.length) {
        input.classList.add("valid");
        input.classList.remove("invalid");

    } else {
        input.classList.add("invalid");
        input.classList.remove("valid");

    }
};

// function onInputBlur(event) {
//     console.log(input.value.length );
//     if (input.value.length == input.dataset.length) {
//         input.classList.add("valid");
//     } else {
//         input.classList.remove("valid");
//         input.classList.add("invalid");
//     }
// };
