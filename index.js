const button = document.getElementById("submit-button");
const userInput = document.getElementById("user-input");
const errorMessage = document.getElementById("error");




function validateEmail() {
    const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(userInput.value === "" | userInput.value === null){
        return false;
    } else if(!(userInput.value.match(emailReg))){
        return false;
    } else {
        return true;
    }
}
function alertSuccess(){
    alert("Congratulations! You have successfully signed up for our newsletter.");
}

button.addEventListener("click", (e) => {
    e.preventDefault();
    let timeout;
    //when button is clicked, remove error class, background error icon and error message
    userInput.classList.remove("error-outline");
    errorMessage.style.visibility="hidden";
    
   if(validateEmail()){
       timeout = setTimeout(alertSuccess, 100);
       userInput.value="";
   } else {
    userInput.classList.add("error-outline");
    //error msg shows up
    errorMessage.style.visibility="visible";
   }

})
