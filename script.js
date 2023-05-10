// input 1 
let input = document.getElementById("first");
let error = document.getElementById("first-heading");
// input 2
let secondInput = document.getElementById("last");
let secondError = document.getElementById("last-heading");
// input 3
let thirdInput = document.getElementById("email");
let thirdError = document.getElementById("email-heading");
// input 4
let fourthInput = document.getElementById("pass");
let fourthError = document.getElementById("pass-heading");
let btn = document.getElementById("btn");
console.log(btn);

btn.addEventListener("click", function(){
    if(input.value === ""){
        input.style.border = "2px solid hsl(0, 93%, 68%)";
        error.innerText = "First Name cannot be empty";
        input.style.backgroundImage = "url('images/icon-error.svg')";
        input.style.backgroundRepeat = "no-repeat";
        input.style.backgroundPosition = "80%";
    }
    else{
        input.value = "";
        input.style.background = "none";
        input.style.border = "2px solid #b9b6c4";
        error.innerText = "";
    }
    if(secondInput.value === ""){
        secondInput.style.border = "2px solid hsl(0, 93%, 68%)";
        secondError.innerText = "Last Name cannot be empty";
        secondInput.style.backgroundImage = "url('images/icon-error.svg')";
        secondInput.style.backgroundRepeat = "no-repeat";
        secondInput.style.backgroundPosition = "80%";
    }
    else{
        input.value = "";
        input.style.background = "none";
        input.style.border = "2px solid #b9b6c4";
        error.innerText = "";
        secondInput.value = "";
        secondInput.style.background = "none";
        secondInput.style.border = "2px solid #b9b6c4";
        secondError.innerText = "";
    }
    if(thirdInput.value.indexOf("@") === -1){
        thirdInput.style.border = "2px solid hsl(0, 93%, 68%)";
        thirdError.innerText = "Looks like this is not an email";
        thirdInput.style.backgroundImage = "url('images/icon-error.svg')";
        thirdInput.style.backgroundRepeat = "no-repeat";
        thirdInput.style.backgroundPosition = "80%";
    }
    else{
        input.value = "";
        input.style.background = "none";
        input.style.border = "2px solid #b9b6c4";
        error.innerText = "";
        secondInput.value = "";
        secondInput.style.background = "none";
        secondInput.style.border = "2px solid #b9b6c4";
        secondError.innerText = "";
        thirdInput.value = "";
        thirdInput.style.background = "none";
        thirdInput.style.border = "2px solid #b9b6c4";
        thirdError.innerText = ""; 
    }
    if(fourthInput.value.indexOf("#") === -1){
        fourthInput.style.border = "2px solid hsl(0, 93%, 68%)";
        fourthError.innerText = "Password cannot be empty";
        fourthInput.style.backgroundImage = "url('images/icon-error.svg')";
        fourthInput.style.backgroundRepeat = "no-repeat";
        fourthInput.style.backgroundPosition = "80%";
    }
    else{
        input.value = "";
        input.style.background = "none";
        input.style.border = "2px solid #b9b6c4";
        error.innerText = "";
        secondInput.value = "";
        secondInput.style.background = "none";
        secondInput.style.border = "2px solid #b9b6c4";
        secondError.innerText = "";
        thirdInput.value = "";
        thirdInput.style.background = "none";
        thirdInput.style.border = "2px solid #b9b6c4";
        thirdError.innerText = ""; 
        fourthInput.value = "";
        fourthInput.style.background = "none";
        fourthInput.style.border = "2px solid #b9b6c4";
        fourthError.innerText = ""; 
    }
})
