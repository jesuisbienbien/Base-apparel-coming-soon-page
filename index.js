const button = document.getElementById("submit-button");
const errorMessage = document.getElementById("error");
const form = document.getElementById("form");

function validateEmail(valueEntered) {
    const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(valueEntered === "" | valueEntered === null){
        return false;
    } else if(!(valueEntered.match(emailReg))){
        return false;
    } else {
        return true;
    }
}
function alertSuccess(){
    alert("Congratulations! You have successfully signed up for our newsletter.");
}


form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const valueEntered = e.target.email.value;

    //when button is clicked, remove error class, background error icon and error message
    e.target.email.classList.remove("error-outline");
    errorMessage.style.visibility="hidden";
    

    if(validateEmail(valueEntered)){
        e.target.email.value="";
        alertSuccess();
        
    } else {
        e.target.email.classList.add("error-outline");
        
        //error msg shows up
        errorMessage.style.visibility="visible";
   
    }
    

})


