function logIn(event) {
    event.preventDefault();
    let input = document.querySelector(".form").value;
    console.log(input); 

}
let input = document.querySelector(".form");
input.addEventListener("submit", logIn);